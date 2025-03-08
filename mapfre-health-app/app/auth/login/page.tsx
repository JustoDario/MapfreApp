import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white">
      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-8">
            <Image src="/mapfre-salud-logo.jpg" alt="MAPFRE Salud" width={200} height={40} className="h-12 w-auto" />
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h1>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email o DNI</Label>
              <Input id="email" placeholder="Introduce tu email o DNI" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <Link href="/auth/reset-password" className="text-sm text-red-600 hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="Introduce tu contraseña" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm">
                Recordar mis datos
              </Label>
            </div>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Iniciar sesión
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">¿No tienes cuenta?</p>
            <Link href="/auth/register" className="text-sm text-red-600 hover:underline">
              Regístrate ahora
            </Link>
          </div>
        </div>
      </div>

      <footer className="p-4 text-center text-sm text-gray-500">
        <p>© 2025 MAPFRE S.A. Todos los derechos reservados</p>
      </footer>
    </div>
  )
}

