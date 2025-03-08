import Image from "next/image"
import { Bell, Menu, FileText, Clock, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"

export default function AutorizacionesPage() {
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
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Autorizaciones médicas</h1>

        <Tabs defaultValue="activas" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="activas">Activas</TabsTrigger>
            <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
            <TabsTrigger value="historial">Historial</TabsTrigger>
          </TabsList>

          <TabsContent value="activas">
            <Card className="p-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">Autorización médica</h3>
                  <p className="text-gray-600 mb-2">Consulta especialista - Traumatología</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <FileText className="h-4 w-4" />
                    <span>Ref: AUT-2025-03456</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Válida hasta: 15 Junio, 2025</span>
                  </div>

                  <Button variant="outline" size="sm" className="text-red-600 border-red-600 mt-4">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="pendientes">
            <Card className="p-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 rounded-full p-3">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">Autorización pendiente</h3>
                  <p className="text-gray-600 mb-2">Prueba diagnóstica - Resonancia magnética</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <FileText className="h-4 w-4" />
                    <span>Ref: AUT-2025-03789</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Solicitada: 5 Marzo, 2025</span>
                  </div>

                  <Button variant="outline" size="sm" className="text-red-600 border-red-600 mt-4">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="historial">
            <Card className="p-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 rounded-full p-3">
                  <XCircle className="h-6 w-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">Autorización expirada</h3>
                  <p className="text-gray-600 mb-2">Consulta especialista - Oftalmología</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <FileText className="h-4 w-4" />
                    <span>Ref: AUT-2024-12345</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Expirada: 15 Enero, 2025</span>
                  </div>

                  <Button variant="outline" size="sm" className="text-gray-600 mt-4">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <Button className="w-full bg-red-600 hover:bg-red-700 mt-4">Solicitar nueva autorización</Button>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

