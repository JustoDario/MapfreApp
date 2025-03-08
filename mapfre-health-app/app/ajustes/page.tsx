import Link from "next/link"
import Image from "next/image"
import { Bell, Menu, User, BellIcon, Lock, Globe, Moon, Eye, HelpCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"

export default function AjustesPage() {
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
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Ajustes</h1>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4">
            <h2 className="text-sm font-medium text-gray-500 mb-2">CUENTA</h2>

            <div className="space-y-4">
              <Link href="/ajustes/perfil" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-600" />
                  <span>Información personal</span>
                </div>
                <div className="text-gray-400">›</div>
              </Link>

              <Link href="/ajustes/notificaciones" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BellIcon className="h-5 w-5 text-gray-600" />
                  <span>Notificaciones</span>
                </div>
                <div className="text-gray-400">›</div>
              </Link>

              <Link href="/ajustes/seguridad" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-gray-600" />
                  <span>Seguridad y privacidad</span>
                </div>
                <div className="text-gray-400">›</div>
              </Link>
            </div>
          </div>

          <Separator />

          <div className="p-4">
            <h2 className="text-sm font-medium text-gray-500 mb-2">PREFERENCIAS</h2>

            <div className="space-y-4">
              <Link href="/ajustes/idioma" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-gray-600" />
                  <span>Idioma</span>
                </div>
                <div className="text-gray-600">Español ›</div>
              </Link>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="h-5 w-5 text-gray-600" />
                  <span>Modo oscuro</span>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-gray-600" />
                  <span>Tamaño de texto</span>
                </div>
                <div className="text-gray-600">Normal ›</div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="p-4">
            <h2 className="text-sm font-medium text-gray-500 mb-2">AYUDA</h2>

            <div className="space-y-4">
              <Link href="/ayuda" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-gray-600" />
                  <span>Centro de ayuda</span>
                </div>
                <div className="text-gray-400">›</div>
              </Link>

              <Link href="/ajustes/terminos" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-gray-600" />
                  <span>Términos y condiciones</span>
                </div>
                <div className="text-gray-400">›</div>
              </Link>

              <div className="pt-2">
                <p className="text-sm text-gray-500">Versión 2.5.1</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

