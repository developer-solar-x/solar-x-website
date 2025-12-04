import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const powerStations = [
  {
    name: "Pion Power P302",
    title: "Endless Power, Anywhere You Wander",
    capacity: "296Wh capacity",
    output: "300W AC output",
    image: "/ev-charger-and-portable-power-stations-solar-equip.jpg",
  },
  {
    name: "Pion Power P201",
    title: "Small but Mighty",
    capacity: "148Wh capacity",
    output: "150W AC output",
    image: "/ev-charger-and-portable-power-stations-solar-equip.jpg",
  },
  {
    name: "Pion Power E600LFP",
    title: "Temporary Power Backup",
    capacity: "614Wh capacity",
    output: "1200W AC output",
    image: "/ev-charger-and-portable-power-stations-solar-equip.jpg",
  },
  {
    name: "Pion Power E3600LFP",
    title: "Versatile for Any Occasions",
    capacity: "3072Wh capacity",
    output: "3600W AC output",
    image: "/ev-charger-and-portable-power-stations-solar-equip.jpg",
  },
]

export function PortablePowerStations() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Power on the Go
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Portable Power Stations
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {powerStations.map((station, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={station.image}
                  alt={station.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{station.name}</CardTitle>
                <CardDescription className="font-medium">{station.title}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">• {station.capacity}</p>
                  <p className="text-sm text-muted-foreground">• {station.output}</p>
                </div>
                <Button className="mt-auto w-full bg-primary text-white hover:bg-primary/90">
                  Purchase Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



