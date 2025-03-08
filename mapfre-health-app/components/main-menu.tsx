import type React from "react"
import Link from "next/link"
import {
  User,
  FileText,
  Calendar,
  CreditCard,
  Building2,
  Phone,
  Settings,
  LogOut,
  MessageSquare,
  FileCheck,
  HelpCircle,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface MainMenuProps {
  trigger: React.ReactNode
}

export default function MainMenu({ trigger }: MainMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[350px] p-0">
        <div className="flex flex-col h-full">
          {/* User Profile Section */}
          <div className="bg-red-600 p-6 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-14 w-14 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Marcos" />
                <AvatarFallback className="bg-red-700 text-white">MC</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium text-lg">Marcos Castillo Blanco</h2>
                <p className="text-sm text-red-100">70058775Q</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent text-white border-white hover:bg-red-700 hover:text-white w-full"
            >
              <User className="h-4 w-4 mr-2" />
              Ver mi perfil
            </Button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-auto py-4">
            <div className="px-4 mb-2 text-sm font-medium text-gray-500">MI SALUD</div>
            <nav className="space-y-1">
              <Link href="/" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100">
                <FileText className="h-5 w-5 text-red-600" />
                <span>Mi póliza</span>
              </Link>
              <Link href="/tarjetas" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100">
                <CreditCard className="h-5 w-5 text-red-600" />
                <span>Mis tarjetas</span>
              </Link>
              <Link href="/citas" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100">
                <Calendar className="h-5 w-5 text-red-600" />
                <span>Mis citas</span>
              </Link>
              <Link
                href="/autorizaciones"
                className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100"
              >
                <FileCheck className="h-5 w-5 text-red-600" />
                <span>Autorizaciones médicas</span>
              </Link>
            </nav>

            <Separator className="my-4" />

            <div className="px-4 mb-2 text-sm font-medium text-gray-500">SERVICIOS</div>
            <nav className="space-y-1">
              <Link href="/centros" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100">
                <Building2 className="h-5 w-5 text-red-600" />
                <span>Centros médicos</span>
              </Link>
              <Link href="/chat-medico" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100">
                <MessageSquare className="h-5 w-5 text-red-600" />
                <span>Chat médico</span>
              </Link>
              <Link
                href="/calendario-emocional"
                className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100"
              >
                <Calendar className="h-5 w-5 text-red-600" />
                <span>Calendario emocional</span>
              </Link>
              <Link
                href="/telefono-salud"
                className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100"
              >
                <Phone className="h-5 w-5 text-red-600" />
                <span>Teléfono de salud</span>
              </Link>
            </nav>

            <Separator className="my-4" />

            <nav className="space-y-1">
              <Link href="/ajustes" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100">
                <Settings className="h-5 w-5 text-gray-600" />
                <span>Ajustes</span>
              </Link>
              <Link href="/ayuda" className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100">
                <HelpCircle className="h-5 w-5 text-gray-600" />
                <span>Ayuda</span>
              </Link>
            </nav>
          </div>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start text-red-600 border-red-600 hover:bg-red-50">
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

