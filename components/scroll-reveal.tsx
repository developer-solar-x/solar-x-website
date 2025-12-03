"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "fade"
  delay?: number
  duration?: number
  threshold?: number
  triggerOnce?: boolean
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true)
                if (triggerOnce) {
                  setHasAnimated(true)
                }
              }, delay)
            } else {
              setIsVisible(true)
              if (triggerOnce) {
                setHasAnimated(true)
              }
            }
          } else if (!triggerOnce) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay, threshold, triggerOnce])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translateY(30px)"
        case "down":
          return "translateY(-30px)"
        case "left":
          return "translateX(30px)"
        case "right":
          return "translateX(-30px)"
        case "fade":
          return "translateY(0)"
        default:
          return "translateY(30px)"
      }
    }
    return "translateY(0) translateX(0)"
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
      }}
    >
      {children}
    </div>
  )
}

