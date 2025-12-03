import { NextResponse } from 'next/server'

// Google Places API configuration
// You'll need to:
// 1. Get a Google Places API key from: https://console.cloud.google.com/
// 2. Enable the "Places API" in your Google Cloud Console
// 3. Get your Place ID from: https://developers.google.com/maps/documentation/places/web-service/place-id
// 4. Add GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID to your .env.local file

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY
// Place ID extracted from your Google Business Profile URL
// The ludocid parameter in the URL is: 1856823012151048888
// However, Google Places API uses a different format. You'll need to find the actual Place ID.
// You can find it at: https://developers.google.com/maps/documentation/places/web-service/place-id
// Or use the Place ID Finder: https://developers.google.com/maps/documentation/places/web-service/place-id#find-id
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID || '' // Add your Place ID here

export async function GET() {
  // If API key is not configured, return empty array
  if (!GOOGLE_PLACES_API_KEY) {
    return NextResponse.json({ 
      reviews: [],
      error: 'Google Places API key not configured' 
    })
  }

  try {
    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${GOOGLE_PLACES_API_KEY}`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch reviews')
    }

    const data = await response.json()

    if (data.status !== 'OK' || !data.result?.reviews) {
      return NextResponse.json({ 
        reviews: [],
        error: 'No reviews found or invalid Place ID' 
      })
    }

    // Transform Google reviews to match your testimonial format
    const reviews = data.result.reviews
      .filter((review: any) => review.rating >= 4) // Only show 4+ star reviews
      .slice(0, 10) // Limit to 10 reviews
      .map((review: any) => ({
        name: review.author_name,
        text: review.text,
        rating: review.rating,
        time: review.time,
        profilePhoto: review.profile_photo_url || null,
      }))

    return NextResponse.json({ reviews, total: data.result.user_ratings_total || 0 })
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return NextResponse.json({ 
      reviews: [],
      error: 'Failed to fetch reviews' 
    }, { status: 500 })
  }
}

