import Link from "next/link"
import { Home, CreditCard, Calendar, Building2, Activity, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BottomNavigation() {
  return (
    <div className="sticky bottom-0 bg-white border-t flex items-center justify-around py-2">
      <Link href="/" className="flex flex-col items-center py-1 px-2 text-xs text-gray-800">
        <Home className="h-5 w-5 mb-1" />
        <span>Inicio</span>
      </Link>

      <Link href="/tarjetas" className="flex flex-col items-center py-1 px-2 text-xs text-gray-500">
        <CreditCard className="h-5 w-5 mb-1" />
        <span>Tarjetas</span>
      </Link>

      <Link href="/actividades" className="flex flex-col items-center py-1 px-2 text-xs text-gray-500">
        <Activity className="h-5 w-5 mb-1" />
        <span>Actividades</span>
      </Link>

      <div className="relative -mt-8">
        <Button className="h-16 w-16 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-lg">
          <span className="text-3xl text-white">+</span>
        </Button>
      </div>

      <Link href="/agenda" className="flex flex-col items-center py-1 px-2 text-xs text-gray-500">
        <Calendar className="h-5 w-5 mb-1" />
        <span>Agenda</span>
      </Link>

      <Link href="/chat-medico" className="flex flex-col items-center py-1 px-2 text-xs text-gray-500 relative">
        <MessageSquare className="h-5 w-5 mb-1" />
        <span>Chat</span>
        <div className="absolute top-0 right-1 h-2 w-2 bg-red-600 rounded-full" />
      </Link>

      <Link href="/centros" className="flex flex-col items-center py-1 px-2 text-xs text-gray-500">
        <Building2 className="h-5 w-5 mb-1" />
        <span>Centros</span>
      </Link>
    </div>
  )
}

