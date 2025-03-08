import Image from "next/image"
import { Bell, Menu, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"

export default function CitasPage() {
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
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Próximas citas</h1>

        {/* Appointment Card */}
        <Card className="mb-4 p-4">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 rounded-full p-3">
              <Calendar className="h-6 w-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">Consulta Dental</h3>
              <p className="text-gray-600 mb-2">Dr. García Martínez</p>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Clock className="h-4 w-4" />
                <span>15 Marzo, 2025 - 10:30</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Centro Médico MAPFRE Madrid</span>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="text-red-600 border-red-600">
                  Cancelar
                </Button>
                <Button variant="outline" size="sm" className="text-gray-600">
                  Modificar
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Button className="w-full bg-red-600 hover:bg-red-700 mt-4">Solicitar nueva cita</Button>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

