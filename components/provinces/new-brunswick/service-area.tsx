"use client"

export function ServiceAreaSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Service Area in New Brunswick
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We proudly serve communities across New Brunswick with our solar and battery solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Fredericton",
            "Saint John",
            "Moncton",
            "Dieppe",
            "Riverview",
            "Quispamsis",
            "Miramichi",
            "Edmundston",
            "Bathurst",
            "Campbellton",
            "Oromocto",
            "Sackville",
          ].map((city) => (
            <div
              key={city}
              className="bg-background rounded-lg p-4 text-center border border-border hover:border-primary transition-colors"
            >
              <p className="font-medium text-foreground">{city}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don't see your city? Contact us to see if we service your area!
          </p>
        </div>
      </div>
    </section>
  )
}



