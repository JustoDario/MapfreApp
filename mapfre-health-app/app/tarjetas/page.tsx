import Image from "next/image"
import { Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"

export default function TarjetasPage() {
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
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Mis Tarjetas</h1>

        {/* Health Card */}
        <Card className="overflow-hidden mb-4">
          <div className="bg-red-600 p-4 flex justify-between items-center">
            <h3 className="text-white font-medium">Asistencia Sanitaria</h3>
            <Image src="/mapfre-salud-white.svg" alt="MAPFRE Salud" width={100} height={20} className="h-5 w-auto" />
          </div>
          <div className="p-4">
            <p className="text-lg font-medium mb-1">01 035 984 228 7</p>
            <p className="text-gray-800 mb-4">Marcos Castillo Blanco</p>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Fecha alta</p>
                <p className="font-medium">03/19</p>
              </div>
              <div>
                <p className="text-gray-500">N.I.F.</p>
                <p className="font-medium">70058775Q</p>
              </div>
              <div>
                <p className="text-gray-500"></p>
                <p className="font-medium">Dental completa</p>
              </div>
            </div>
          </div>
          <div className="h-2 bg-red-600"></div>
        </Card>

        {/* Digital Card */}
        <Card className="overflow-hidden">
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <h3 className="text-white font-medium">Tarjeta Digital</h3>
            <Image src="/mapfre-salud-white.svg" alt="MAPFRE Salud" width={100} height={20} className="h-5 w-auto" />
          </div>
          <div className="p-4">
            <p className="text-lg font-medium mb-1">01 035 984 228 7</p>
            <p className="text-gray-800 mb-4">Marcos Castillo Blanco</p>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Fecha alta</p>
                <p className="font-medium">03/19</p>
              </div>
              <div>
                <p className="text-gray-500">N.I.F.</p>
                <p className="font-medium">70058775Q</p>
              </div>
              <div>
                <p className="text-gray-500"></p>
                <p className="font-medium">Dental completa</p>
              </div>
            </div>
          </div>
          <div className="h-2 bg-blue-600"></div>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

