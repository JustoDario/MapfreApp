import Image from "next/image"
import { Bell, Menu, Calendar, Clock, MapPin, Search, Activity, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"

export default function AgendaPage() {
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
        <h1 className="text-2xl font-medium text-gray-800 mb-4">Mi agenda</h1>

        {/* Selector de vista */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <Button variant="ghost" className="bg-white shadow-sm rounded-md h-8 px-3 text-sm">
              Mes
            </Button>
            <Button variant="ghost" className="h-8 px-3 text-sm">
              Lista
            </Button>
          </div>
          <Button variant="outline" size="sm" className="text-red-600 border-red-600 h-8">
            + Nuevo
          </Button>
        </div>

        {/* Calendar Header */}
        <div className="bg-white rounded-lg shadow-sm mb-4">
          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-base font-medium">Marzo 2025</h2>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Calendar Days Header */}
          <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 border-b">
            <div className="py-2">L</div>
            <div className="py-2">M</div>
            <div className="py-2">X</div>
            <div className="py-2">J</div>
            <div className="py-2">V</div>
            <div className="py-2">S</div>
            <div className="py-2">D</div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 text-sm">
            {/* Week 1 */}
            <div className="py-2 text-center text-gray-400">24</div>
            <div className="py-2 text-center text-gray-400">25</div>
            <div className="py-2 text-center text-gray-400">26</div>
            <div className="py-2 text-center text-gray-400">27</div>
            <div className="py-2 text-center text-gray-400">28</div>
            <div className="py-2 text-center">1</div>
            <div className="py-2 text-center">2</div>

            {/* Week 2 */}
            <div className="py-2 text-center">3</div>
            <div className="py-2 text-center">4</div>
            <div className="py-2 text-center">5</div>
            <div className="py-2 text-center">6</div>
            <div className="py-2 text-center relative">
              <div className="h-7 w-7 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto">
                7
              </div>
            </div>
            <div className="py-2 text-center">8</div>
            <div className="py-2 text-center">9</div>

            {/* Week 3 */}
            <div className="py-2 text-center">10</div>
            <div className="py-2 text-center">11</div>
            <div className="py-2 text-center relative group">
              <div className="mx-auto h-7 w-7 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer">
                12
              </div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full"></div>
              <div className="absolute z-10 invisible group-hover:visible bg-white shadow-lg rounded-md p-2 text-xs w-48 -left-16 top-full mt-1">
                <div className="font-medium mb-1">12 Marzo, 2025</div>
                <div className="flex items-center gap-1 text-purple-600">
                  <Activity className="h-3 w-3" />
                  <span>Pilates terapéutico (10:00)</span>
                </div>
              </div>
            </div>
            <div className="py-2 text-center">13</div>
            <div className="py-2 text-center">14</div>
            <div className="py-2 text-center relative group">
              <div className="mx-auto h-7 w-7 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer">
                15
              </div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
              <div className="absolute z-10 invisible group-hover:visible bg-white shadow-lg rounded-md p-2 text-xs w-48 -left-16 top-full mt-1">
                <div className="font-medium mb-1">15 Marzo, 2025</div>
                <div className="flex items-center gap-1 text-blue-600">
                  <Calendar className="h-3 w-3" />
                  <span>Análisis de sangre (09:00)</span>
                </div>
              </div>
            </div>
            <div className="py-2 text-center">16</div>

            {/* Week 4 */}
            <div className="py-2 text-center">17</div>
            <div className="py-2 text-center">18</div>
            <div className="py-2 text-center">19</div>
            <div className="py-2 text-center relative group">
              <div className="mx-auto h-7 w-7 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer">
                20
              </div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full"></div>
              <div className="absolute z-10 invisible group-hover:visible bg-white shadow-lg rounded-md p-2 text-xs w-48 -left-16 top-full mt-1">
                <div className="font-medium mb-1">20 Marzo, 2025</div>
                <div className="flex items-center gap-1 text-green-600">
                  <Activity className="h-3 w-3" />
                  <span>Taller de nutrición (11:00)</span>
                </div>
              </div>
            </div>
            <div className="py-2 text-center">21</div>
            <div className="py-2 text-center">22</div>
            <div className="py-2 text-center">23</div>

            {/* Week 5 */}
            <div className="py-2 text-center">24</div>
            <div className="py-2 text-center">25</div>
            <div className="py-2 text-center">26</div>
            <div className="py-2 text-center">27</div>
            <div className="py-2 text-center">28</div>
            <div className="py-2 text-center">29</div>
            <div className="py-2 text-center">30</div>

            {/* Week 6 */}
            <div className="py-2 text-center">31</div>
            <div className="py-2 text-center text-gray-400">1</div>
            <div className="py-2 text-center text-gray-400">2</div>
            <div className="py-2 text-center text-gray-400">3</div>
            <div className="py-2 text-center text-gray-400">4</div>
            <div className="py-2 text-center text-gray-400">5</div>
            <div className="py-2 text-center text-gray-400">6</div>
          </div>

          {/* Calendar Legend */}
          <div className="flex items-center justify-center gap-4 p-2 text-xs border-t">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <span>Citas</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Actividades</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Análisis</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span>Talleres</span>
            </div>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Buscar en mi agenda" className="pl-10" />
        </div>

        <Tabs defaultValue="citas" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="citas">Citas médicas</TabsTrigger>
            <TabsTrigger value="actividades">Actividades</TabsTrigger>
            <TabsTrigger value="recordatorios">Recordatorios</TabsTrigger>
          </TabsList>

          <TabsContent value="citas">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-medium text-gray-500">HOY, 7 MARZO</h2>
                <Button variant="ghost" size="sm" className="text-red-600 h-8 px-2">
                  + Nueva cita
                </Button>
              </div>

              <Card className="p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <Calendar className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-lg">Consulta Dental</h3>
                      <Badge className="bg-green-600">Confirmada</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">Dr. García Martínez</p>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Clock className="h-4 w-4" />
                      <span>10:30</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>Centro Médico MAPFRE Madrid</span>
                    </div>

                    <div className="flex gap-2">
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

              <div className="flex items-center justify-between mt-6 mb-2">
                <h2 className="text-sm font-medium text-gray-500">PRÓXIMAMENTE</h2>
              </div>

              <Card className="p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-lg">Análisis de sangre</h3>
                      <Badge className="bg-blue-600">Pendiente</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">Laboratorio Central</p>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span>15 Marzo, 2025</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Clock className="h-4 w-4" />
                      <span>09:00</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>Centro Médico MAPFRE Madrid</span>
                    </div>

                    <div className="flex gap-2">
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
            </div>
          </TabsContent>

          <TabsContent value="actividades">
            <Card className="p-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Activity className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">Pilates terapéutico</h3>
                  <p className="text-gray-600 mb-2">Mejora tu postura y fortalece tu core</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>12 Marzo, 2025</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Clock className="h-4 w-4" />
                    <span>10:00 - 11:30</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>Centro MAPFRE Bienestar Madrid</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">Taller de nutrición</h3>
                  <p className="text-gray-600 mb-2">Aprende a comer sano con nuestros expertos</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>20 Marzo, 2025</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Clock className="h-4 w-4" />
                    <span>11:00 - 13:00</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>Centro MAPFRE Bienestar Barcelona</span>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="recordatorios">
            <Card className="p-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 rounded-full p-3">
                  <Bell className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">Tomar medicación</h3>
                  <p className="text-gray-600 mb-2">Antibiótico - 3 veces al día</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>Diario hasta 15 Marzo</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Clock className="h-4 w-4" />
                    <span>8:00, 14:00, 20:00</span>
                  </div>

                  <Button variant="outline" size="sm" className="text-gray-600">
                    Editar recordatorio
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

