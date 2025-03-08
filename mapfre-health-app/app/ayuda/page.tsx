import Image from "next/image"
import { Bell, Menu, Search, MessageSquare, Phone, FileText, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"

export default function AyudaPage() {
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
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Centro de ayuda</h1>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Buscar en preguntas frecuentes" className="pl-10" />
        </div>

        <div className="grid gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3">
                <MessageSquare className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg">Chat con soporte</h3>
                <p className="text-gray-600 mb-3">Habla con un agente de atención al cliente</p>

                <Button className="bg-red-600 hover:bg-red-700">Iniciar chat</Button>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg">Llamar a soporte</h3>
                <p className="text-gray-600 mb-3">Lun-Vie: 9:00-20:00, Sáb: 9:00-14:00</p>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="h-4 w-4 mr-2" />
                  900 100 200
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h2 className="text-lg font-medium mb-4">Preguntas frecuentes</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cómo solicito una autorización médica?</AccordionTrigger>
              <AccordionContent>
                Para solicitar una autorización médica, puedes hacerlo desde la sección "Autorizaciones" en el menú
                principal. Pulsa en "Solicitar nueva autorización" y sigue los pasos indicados. También puedes llamar al
                teléfono de atención al cliente o acudir a una oficina MAPFRE.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cómo pedir una cita médica?</AccordionTrigger>
              <AccordionContent>
                Puedes pedir cita desde la sección "Citas" en el menú principal o desde el botón central en la barra
                inferior. Selecciona la especialidad, el centro médico y la fecha que prefieras. También puedes llamar
                directamente al centro médico.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>¿Qué hago si he perdido mi tarjeta?</AccordionTrigger>
              <AccordionContent>
                No te preocupes, puedes usar la tarjeta digital desde la app. Si necesitas una tarjeta física nueva,
                puedes solicitarla desde la sección "Tarjetas" pulsando en "Solicitar duplicado" o llamando a atención
                al cliente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>¿Cómo cambio mis datos personales?</AccordionTrigger>
              <AccordionContent>
                Puedes modificar tus datos personales desde la sección &quot;Ajustes&quot; &gt; &quot;Información
                personal&quot;. Algunos datos como el DNI o fecha de nacimiento no pueden ser modificados directamente y
                requieren contactar con atención al cliente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Card className="p-4">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 rounded-full p-3">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">Guías y tutoriales</h3>
              <p className="text-gray-600 mb-3">Aprende a usar todas las funciones de la app</p>

              <Button variant="outline" className="w-full">
                <HelpCircle className="h-4 w-4 mr-2" />
                Ver guías
              </Button>
            </div>
          </div>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

