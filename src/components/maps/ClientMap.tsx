'use client'

import { useTheme } from "next-themes"
import { Map, MapMarker, MarkerContent, MarkerLabel } from "@/components/ui/map";

type ClientMapProps = {
  long?: string | null
  lat?: string | null
}

export default function ClientMap({ long, lat }: ClientMapProps) {

  const { theme } = useTheme()
  const mapTheme = theme === "dark" ? "dark" : "light"
  const longitude = Number(long) || -1.692815483570881
  const latitude = Number(lat) || 52.632465238120055


  return (
    <Map className="h-full" center={[longitude, latitude]} zoom={16} theme={mapTheme}>
      <MapMarker longitude={longitude} latitude={latitude}>
        <MarkerContent>
          <div className="size-5 cursor-pointer rounded-full border-2 border-white bg-rose-500 shadow-lg transition-transform hover:scale-110" />
          <MarkerLabel position="bottom" className="text-white">You are here</MarkerLabel>
        </MarkerContent>
      </MapMarker>
    </Map>
  )
}
