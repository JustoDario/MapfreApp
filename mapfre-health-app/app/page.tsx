"use client"

import Image from "next/image"
import { Bell, Menu, X, AlertTriangle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center">
          <Image
            src="/mapfre-salud-logo.jpg"
            alt="MAPFRE Salud"
            width={150}
            height={30}
            className="h-8 w-auto"
            priority
          />
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
        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-3xl font-medium text-gray-800">
            Buenos días,
            <br />
            Marcos
          </h1>
        </div>

        {/* Notification */}
        <Card className="mb-6 p-4 relative">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-gray-600 mt-0.5" />
            <div className="flex-1">
              <h2 className="font-medium text-gray-800 mb-1">Petición de autorización</h2>
              <p className="text-gray-600">Se ha aprobado tu autorización médica.</p>
              <Button variant="ghost" className="mt-2 h-8 px-0 text-red-600 font-medium">
                VER AUTORIZACIÓN
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="absolute top-2 right-2">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </Card>

        {/* Cards Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-500">Tarjetas</h2>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Health Card */}
          <Card className="overflow-hidden">
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
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-500">Próximas citas</h2>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Empty state or appointments would go here */}
        </div>

        {/* Calendario Emocional */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-500">Calendario emocional</h2>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          <Card className="p-4 relative">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-gray-600 mt-0.5" />
              <div className="flex-1">
                <h2 className="font-medium text-gray-800 mb-1">¿Cómo te sientes hoy?</h2>
                <p className="text-gray-600">
                  Registra tu estado de ánimo y lleva un seguimiento de tu bienestar emocional.
                </p>
                <Button
                  variant="ghost"
                  className="mt-2 h-8 px-0 text-red-600 font-medium"
                  onClick={() => (window.location.href = "/calendario-emocional")}
                >
                  IR AL CALENDARIO
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

