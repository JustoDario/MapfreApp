"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Bell,
  Menu,
  Calendar,
  Clock,
  User,
  MapPin,
  Search,
  Info,
  Heart,
  BookOpen,
  Music,
  Utensils,
  Bike,
  Palette,
  Users,
  Leaf,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"
import ActivityMap from "@/components/activity-map"

// Datos de actividades
const activities = [
  {
    id: 1,
    title: "Yoga para principiantes",
    description:
      "Clase de yoga para todos los niveles. Aprende las posturas básicas y técnicas de respiración para mejorar tu bienestar físico y mental.",
    type: "Bienestar",
    date: "15 Marzo, 2025",
    time: "18:00 - 19:30",
    instructor: "Ana Martínez",
    location: "Centro MAPFRE Bienestar Castellana",
    address: "Paseo de la Castellana 33, 28046 Madrid",
    requirements: "Ropa cómoda, esterilla (opcional)",
    status: "available",
    icon: Heart,
    color: "green",
    coordinates: [40.4323, -3.6908],
  },
  {
    id: 2,
    title: "Nutrición saludable",
    description:
      "Aprende a comer sano con nuestros expertos. Descubre cómo planificar comidas equilibradas y nutritivas para toda la familia.",
    type: "Taller",
    date: "20 Marzo, 2025",
    time: "11:00 - 13:00",
    instructor: "Dr. Carlos Ruiz",
    location: "Centro MAPFRE Bienestar Castellana",
    address: "Paseo de la Castellana 33, 28046 Madrid",
    requirements: "Ninguno",
    status: "available",
    icon: Utensils,
    color: "blue",
    coordinates: [40.4323, -3.6908],
  },
  {
    id: 3,
    title: "Pilates terapéutico",
    description:
      "Mejora tu postura y fortalece tu core. Sesiones especialmente diseñadas para personas con problemas de espalda o recuperación de lesiones.",
    type: "Bienestar",
    date: "12 Marzo, 2025",
    time: "10:00 - 11:30",
    instructor: "Laura Gómez",
    location: "Centro MAPFRE Bienestar Castellana",
    address: "Paseo de la Castellana 33, 28046 Madrid",
    requirements: "Ropa cómoda, calcetines antideslizantes",
    status: "enrolled",
    icon: Heart,
    color: "purple",
    coordinates: [40.4323, -3.6908],
  },
  {
    id: 4,
    title: "Mindfulness y meditación",
    description:
      "Técnicas para reducir el estrés y mejorar tu concentración. Aprende a vivir el momento presente y gestionar mejor tus emociones.",
    type: "Bienestar",
    date: "15 Febrero, 2025",
    time: "17:00 - 18:30",
    instructor: "Miguel Ángel Sánchez",
    location: "Centro MAPFRE Bienestar Castellana",
    address: "Paseo de la Castellana 33, 28046 Madrid",
    requirements: "Ninguno",
    status: "past",
    icon: Heart,
    color: "gray",
    coordinates: [40.4323, -3.6908],
  },
  {
    id: 5,
    title: "Ruta ciclista urbana",
    description:
      "Recorrido guiado por la ciudad en bicicleta. Descubre rutas seguras y consejos para moverte en bici por la ciudad de forma saludable.",
    type: "Actividad física",
    date: "22 Marzo, 2025",
    time: "09:00 - 12:00",
    instructor: "Roberto Fernández",
    location: "Parque del Retiro (Puerta de Alcalá)",
    address: "Plaza de la Independencia, 28001 Madrid",
    requirements: "Bicicleta propia, casco, agua",
    status: "available",
    icon: Bike,
    color: "orange",
    coordinates: [40.4195, -3.6836],
  },
  {
    id: 6,
    title: "Taller de cocina saludable",
    description:
      "Aprende a preparar platos saludables, sabrosos y fáciles de hacer. Incluye degustación de los platos preparados durante el taller.",
    type: "Taller",
    date: "25 Marzo, 2025",
    time: "18:30 - 20:30",
    instructor: "Chef María López",
    location: "Centro MAPFRE Bienestar Castellana",
    address: "Paseo de la Castellana 33, 28046 Madrid",
    requirements: "Delantal (opcional)",
    status: "available",
    icon: Utensils,
    color: "green",
    coordinates: [40.4323, -3.6908],
  },
  {
    id: 7,
    title: "Club de lectura: Libros de bienestar",
    description:
      "Reunión mensual para comentar libros relacionados con la salud, el bienestar y el desarrollo personal. Este mes: 'El poder del ahora' de Eckhart Tolle.",
    type: "Cultural",
    date: "18 Marzo, 2025",
    time: "18:00 - 19:30",
    instructor: "Elena Martín",
    location: "Centro MAPFRE Bienestar Castellana",
    address: "Paseo de la Castellana 33, 28046 Madrid",
    requirements: "Haber leído el libro (o parte de él)",
    status: "available",
    icon: BookOpen,
    color: "blue",
    coordinates: [40.4323, -3.6908],
  },
  {
    id: 8,
    title: "Concierto de música relajante",
    description:
      "Disfruta de un concierto de música en vivo diseñado para relajar cuerpo y mente. Una experiencia sensorial única para reducir el estrés.",
    type: "Cultural",
    date: "30 Marzo, 2025",
    time: "19:00 - 20:30",
    instructor: "Ensemble Armonía",
    location: "Auditorio MAPFRE",
    address: "Paseo de la Castellana 33, 28046 Madrid",
    requirements: "Ninguno",
    status: "available",
    icon: Music,
    color: "purple",
    coordinates: [40.4323, -3.6908],
  },
  {
    id: 9,
    title: "Taller de arte y bienestar",
    description:
      "Explora la conexión entre la expresión artística y el bienestar emocional. No se requiere experiencia previa en arte.",
    type: "Taller",
    date: "27 Marzo, 2025",
    time: "17:00 - 19:00",
    instructor: "Lucía Ramírez",
    location: "Centro MAPFRE Bienestar Castellana",
    address: "Paseo de la Castellana 33, 28046 Madrid",
    requirements: "Ninguno (materiales incluidos)",
    status: "available",
    icon: Palette,
    color: "pink",
    coordinates: [40.4323, -3.6908],
  },
  {
    id: 10,
    title: "Encuentro de networking saludable",
    description:
      "Conecta con otras personas interesadas en la salud y el bienestar mientras disfrutas de un desayuno saludable.",
    type: "Social",
    date: "16 Marzo, 2025",
    time: "10:00 - 12:00",
    instructor: "Equipo MAPFRE Bienestar",
    location: "Terraza Verde MAPFRE",
    address: "Paseo de Recoletos 23, 28004 Madrid",
    requirements: "Ninguno",
    status: "available",
    icon: Users,
    color: "green",
    coordinates: [40.4215, -3.6918],
  },
  {
    id: 11,
    title: "Excursión: Senderismo y naturaleza",
    description:
      "Ruta de senderismo de dificultad media-baja por entornos naturales cercanos a la ciudad. Incluye guía especializado y seguro.",
    type: "Actividad física",
    date: "23 Marzo, 2025",
    time: "08:30 - 14:30",
    instructor: "Guía Juan Pérez",
    location: "Sierra de Guadarrama",
    address: "Punto de encuentro: Intercambiador de Moncloa, Madrid",
    requirements: "Calzado adecuado, ropa cómoda, agua, protección solar",
    status: "available",
    icon: Leaf,
    color: "green",
    coordinates: [40.435, -3.7187],
  },
  {
    id: 12,
    title: "Charla: Prevención cardiovascular",
    description:
      "Conferencia informativa sobre cómo prevenir enfermedades cardiovasculares a través de hábitos saludables.",
    type: "Educativo",
    date: "14 Marzo, 2025",
    time: "18:00 - 19:30",
    instructor: "Dra. Marta Jiménez",
    location: "Centro MAPFRE Bienestar Castellana",
    address: "Paseo de la Castellana 33, 28046 Madrid",
    requirements: "Ninguno",
    status: "available",
    icon: Info,
    color: "red",
    coordinates: [40.4323, -3.6908],
  },
]

export default function ActividadesPage() {
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  // Filtrar actividades según búsqueda y filtros
  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterType === "all" || activity.type.toLowerCase() === filterType.toLowerCase()

    return matchesSearch && matchesFilter
  })

  // Agrupar actividades por estado
  const availableActivities = filteredActivities.filter((a) => a.status === "available")
  const enrolledActivities = filteredActivities.filter((a) => a.status === "enrolled")
  const pastActivities = filteredActivities.filter((a) => a.status === "past")

  // Función para renderizar el icono de la actividad
  const renderActivityIcon = (activity) => {
    const IconComponent = activity.icon
    return (
      <div className={`bg-${activity.color}-100 rounded-full p-3`}>
        <IconComponent className={`h-6 w-6 text-${activity.color}-600`} />
      </div>
    )
  }

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
        <h1 className="text-2xl font-medium text-gray-800 mb-4">Actividades</h1>

        {/* Mapa de actividades */}
        <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
          <div className="h-64 w-full">
            <ActivityMap activities={activities} onMarkerClick={(activity) => setSelectedActivity(activity)} />
          </div>
        </div>

        {/* Búsqueda y filtros */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar actividades"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
            <Button
              variant={filterType === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("all")}
              className="whitespace-nowrap"
            >
              Todos
            </Button>
            <Button
              variant={filterType === "Bienestar" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("Bienestar")}
              className="whitespace-nowrap"
            >
              <Heart className="h-4 w-4 mr-2" />
              Bienestar
            </Button>
            <Button
              variant={filterType === "Taller" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("Taller")}
              className="whitespace-nowrap"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Talleres
            </Button>
            <Button
              variant={filterType === "Cultural" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("Cultural")}
              className="whitespace-nowrap"
            >
              <Music className="h-4 w-4 mr-2" />
              Cultural
            </Button>
            <Button
              variant={filterType === "Actividad física" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("Actividad física")}
              className="whitespace-nowrap"
            >
              <Activity className="h-4 w-4 mr-2" />
              Deportes
            </Button>
            <Button
              variant={filterType === "Social" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("Social")}
              className="whitespace-nowrap"
            >
              <Users className="h-4 w-4 mr-2" />
              Social
            </Button>
          </div>
        </div>

        <Tabs defaultValue="proximas" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="proximas">Próximas</TabsTrigger>
            <TabsTrigger value="inscritas">Inscritas</TabsTrigger>
            <TabsTrigger value="historial">Historial</TabsTrigger>
          </TabsList>

          <TabsContent value="proximas">
            {availableActivities.length > 0 ? (
              <div className="space-y-4">
                {availableActivities.map((activity) => (
                  <Card key={activity.id} className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`bg-${activity.color}-100 rounded-full p-3`}>
                        <activity.icon className={`h-6 w-6 text-${activity.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-lg">{activity.title}</h3>
                          <Badge className={`bg-${activity.color}-600`}>{activity.type}</Badge>
                        </div>
                        <p className="text-gray-600 mb-2 line-clamp-2">{activity.description}</p>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>{activity.date}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Clock className="h-4 w-4" />
                          <span>{activity.time}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <User className="h-4 w-4" />
                          <span>Instructor: {activity.instructor}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <MapPin className="h-4 w-4" />
                          <span>{activity.location}</span>
                        </div>

                        <div className="flex gap-2">
                          <Sheet>
                            <SheetTrigger asChild>
                              <Button variant="outline" size="sm" className="flex-1">
                                Ver detalles
                              </Button>
                            </SheetTrigger>
                            <SheetContent>
                              <SheetHeader>
                                <SheetTitle>{activity.title}</SheetTitle>
                              </SheetHeader>

                              <div className="mt-4">
                                <Badge className={`bg-${activity.color}-600 mb-4`}>{activity.type}</Badge>
                                <div className="text-gray-700 mb-4">{activity.description}</div>

                                <div className="space-y-3 mb-6">
                                  <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="h-4 w-4 text-gray-500" />
                                    <span>{activity.date}</span>
                                  </div>

                                  <div className="flex items-center gap-2 text-sm">
                                    <Clock className="h-4 w-4 text-gray-500" />
                                    <span>{activity.time}</span>
                                  </div>

                                  <div className="flex items-center gap-2 text-sm">
                                    <User className="h-4 w-4 text-gray-500" />
                                    <span>Instructor: {activity.instructor}</span>
                                  </div>

                                  <div className="flex items-start gap-2 text-sm">
                                    <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                                    <div>
                                      <div>{activity.location}</div>
                                      <div className="text-gray-500">{activity.address}</div>
                                    </div>
                                  </div>

                                  <div className="flex items-start gap-2 text-sm">
                                    <Info className="h-4 w-4 text-gray-500 mt-0.5" />
                                    <div>
                                      <div className="font-medium">Requisitos:</div>
                                      <div>{activity.requirements}</div>
                                    </div>
                                  </div>
                                </div>

                                <div className="h-40 w-full rounded-md overflow-hidden mb-6">
                                  <ActivityMap activities={[activity]} center={activity.coordinates} zoom={15} />
                                </div>

                                <Button className="w-full bg-red-600 hover:bg-red-700">Inscribirse</Button>
                              </div>
                            </SheetContent>
                          </Sheet>

                          <Button className="flex-1 bg-red-600 hover:bg-red-700">Inscribirse</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No se encontraron actividades que coincidan con tu búsqueda.
              </div>
            )}
          </TabsContent>

          <TabsContent value="inscritas">
            {enrolledActivities.length > 0 ? (
              <div className="space-y-4">
                {enrolledActivities.map((activity) => (
                  <Card key={activity.id} className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`bg-${activity.color}-100 rounded-full p-3`}>
                        <activity.icon className={`h-6 w-6 text-${activity.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-lg">{activity.title}</h3>
                          <Badge className="bg-purple-600">Inscrito</Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{activity.description}</p>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>{activity.date}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Clock className="h-4 w-4" />
                          <span>{activity.time}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <User className="h-4 w-4" />
                          <span>Instructor: {activity.instructor}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                          <MapPin className="h-4 w-4" />
                          <span>{activity.location}</span>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 text-red-600 border-red-600">
                            Cancelar
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Añadir a calendario
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">No estás inscrito en ninguna actividad actualmente.</div>
            )}
          </TabsContent>

          <TabsContent value="historial">
            {pastActivities.length > 0 ? (
              <div className="space-y-4">
                {pastActivities.map((activity) => (
                  <Card key={activity.id} className="p-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`bg-${activity.color}-100 rounded-full p-3`}>
                        <activity.icon className={`h-6 w-6 text-${activity.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">{activity.title}</h3>
                        <p className="text-gray-600 mb-2">{activity.description}</p>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>{activity.date}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                          <MapPin className="h-4 w-4" />
                          <span>{activity.location}</span>
                        </div>

                        <Button variant="outline" size="sm" className="text-gray-600">
                          Ver certificado
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">No hay actividades pasadas en tu historial.</div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

