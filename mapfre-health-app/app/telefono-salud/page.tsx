import Image from "next/image"
import { Bell, Menu, Phone, Clock, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"

export default function TelefonoSaludPage() {
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
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Teléfono de salud</h1>

        <div className="grid gap-4">
          <Card className="p-4">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg">Urgencias médicas</h3>
                <p className="text-gray-600 mb-3">Atención 24 horas para emergencias médicas</p>

                <Button className="bg-red-600 hover:bg-red-700 w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  900 123 456
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg">Cita telefónica</h3>
                <p className="text-gray-600 mb-3">Solicita una cita telefónica con tu médico</p>

                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Solicitar cita telefónica
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-3">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg">Horario de atención</h3>
                <p className="text-gray-600 mb-1">Lunes a viernes: 8:00 - 22:00</p>
                <p className="text-gray-600">Sábados, domingos y festivos: 9:00 - 21:00</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 rounded-full p-3">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg">Historial de llamadas</h3>
                <p className="text-gray-600 mb-3">Consulta tus últimas llamadas al servicio</p>

                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Ver historial
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

