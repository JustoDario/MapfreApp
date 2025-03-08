import Image from "next/image"
import { Bell, Menu, Search, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"

export default function CentrosPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center">
          <Image src="/mapfre-salud-logo.jpg" alt="MAPFRE Salud" width={150} height={30} className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <MainMenu
            trigger={
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            }
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-medium text-gray-800 mb-4">Centros médicos</h1>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Buscar por nombre o especialidad" className="pl-10" />
        </div>

        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium text-lg mb-1">Centro Médico MAPFRE Madrid</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <MapPin className="h-4 w-4 text-red-600" />
              <span>Calle Serrano 84, 28006 Madrid</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Phone className="h-4 w-4 text-red-600" />
              <span>915 55 66 77</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <Clock className="h-4 w-4 text-red-600" />
              <span>Lun-Vie: 9:00-20:00, Sáb: 9:00-14:00</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-red-600 border-red-600">
                Cómo llegar
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                Pedir cita
              </Button>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-medium text-lg mb-1">Centro Médico MAPFRE Barcelona</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <MapPin className="h-4 w-4 text-red-600" />
              <span>Avinguda Diagonal 543, 08029 Barcelona</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Phone className="h-4 w-4 text-red-600" />
              <span>932 11 22 33</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <Clock className="h-4 w-4 text-red-600" />
              <span>Lun-Vie: 9:00-20:00, Sáb: 9:00-14:00</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-red-600 border-red-600">
                Cómo llegar
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                Pedir cita
              </Button>
            </div>
          </Card>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

