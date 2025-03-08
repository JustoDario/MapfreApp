"use client"

import { useState } from "react"
import Image from "next/image"
import { Bell, Menu, ChevronLeft, ChevronRight, PlusCircle, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"
import EmotionSelector from "@/components/emotion-selector"

// Datos de ejemplo para el calendario emocional
const emotionalData = {
  2025: {
    // Enero - mes con mayoría de días buenos
    1: {
      average: 4.2,
      days: {
        5: { value: 5, note: "Día excelente. Empecé el año con mucha energía y motivación." },
        8: { value: 4, note: "Buen día en el trabajo, logré terminar un proyecto importante." },
        12: { value: 3, note: "Día normal, nada especial que destacar." },
        15: { value: 5, note: "Excelente día, recibí una buena noticia sobre mi salud." },
        18: { value: 4, note: "Pasé un buen día con amigos, me sentí muy conectado." },
        22: { value: 4, note: "Día productivo, me sentí satisfecho con mis logros." },
        25: { value: 5, note: "Día de descanso perfecto, me sentí renovado." },
        28: { value: 4, note: "Buen día familiar, celebramos el cumpleaños de mi sobrino." },
      },
    },
    // Febrero - mes con días mixtos
    2: {
      average: 3.1,
      days: {
        2: { value: 2, note: "Día difícil, me sentí estresado por el trabajo." },
        5: { value: 3, note: "Día normal, algo cansado pero estable." },
        8: { value: 4, note: "Buen día, salí a caminar y me sentí mejor." },
        12: { value: 2, note: "Problemas para dormir, me sentí irritable." },
        15: { value: 3, note: "Día regular, mejoró por la tarde." },
        18: { value: 4, note: "Día positivo, resolví un problema pendiente." },
        22: { value: 2, note: "Me sentí algo triste sin razón aparente." },
        25: { value: 4, note: "Buen día, tuve una conversación importante que me ayudó." },
      },
    },
    // Marzo (mes actual) - pocos días registrados
    3: {
      average: 3.5,
      days: {
        1: { value: 3, note: "Inicio de mes tranquilo, me sentí neutral." },
        3: { value: 4, note: "Buen día, avancé en mis proyectos personales." },
        5: { value: 3, note: "Día normal, algo de estrés pero manejable." },
        6: { value: 4, note: "Me sentí bien después de mi cita médica." },
      },
    },
    // Abril - sin datos
    4: { average: 0, days: {} },
    // Mayo - mes con mayoría de días malos
    5: {
      average: 1.8,
      days: {
        3: { value: 2, note: "Día difícil, me sentí ansioso." },
        7: { value: 1, note: "Muy mal día, problemas de salud." },
        10: { value: 2, note: "Seguí sintiéndome mal, preocupado por mi salud." },
        14: { value: 1, note: "Visita al médico, diagnóstico preocupante." },
        18: { value: 2, note: "Algo mejor, pero todavía con malestar." },
        22: { value: 2, note: "Lentamente recuperándome, pero con poca energía." },
        26: { value: 3, note: "Día neutral, empezando a sentirme mejor." },
        30: { value: 2, note: "Recaída leve, frustrado por el proceso." },
      },
    },
    6: { average: 0, days: {} },
    7: { average: 0, days: {} },
    8: { average: 0, days: {} },
    9: { average: 0, days: {} },
    10: { average: 0, days: {} },
    11: { average: 0, days: {} },
    12: { average: 0, days: {} },
  },
}

// Función para obtener el color según el valor emocional
const getEmotionColor = (value) => {
  if (value === 0) return "bg-gray-200" // Sin datos
  if (value < 2) return "bg-red-500"
  if (value < 3) return "bg-orange-400"
  if (value < 4) return "bg-yellow-400"
  if (value < 4.5) return "bg-green-400"
  return "bg-green-600"
}

// Función para obtener el texto según el valor emocional
const getEmotionText = (value) => {
  if (value === 0) return "Sin datos"
  if (value < 2) return "Mal"
  if (value < 3) return "Regular"
  if (value < 4) return "Neutral"
  if (value < 4.5) return "Bien"
  return "Excelente"
}

// Función para obtener el emoji según el valor emocional
const getEmotionEmoji = (value) => {
  if (value === 0) return "❓"
  if (value < 2) return "😞"
  if (value < 3) return "😕"
  if (value < 4) return "😐"
  if (value < 4.5) return "🙂"
  return "😄"
}

export default function CalendarioEmocionalPage() {
  const [selectedYear, setSelectedYear] = useState(2025)
  const [selectedMonth, setSelectedMonth] = useState(3) // Marzo por defecto
  const [selectedDay, setSelectedDay] = useState(null)
  const [newEntryEmotion, setNewEntryEmotion] = useState(3)
  const [newEntryNote, setNewEntryNote] = useState("")
  const [isAddingEntry, setIsAddingEntry] = useState(false)

  // Obtener datos del año seleccionado
  const yearData = emotionalData[selectedYear] || {}

  // Obtener datos del mes seleccionado
  const monthData = yearData[selectedMonth] || { average: 0, days: {} }

  // Nombres de los meses
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  // Función para obtener el número de días en un mes
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate()
  }

  // Función para obtener el día de la semana del primer día del mes (0 = domingo, 1 = lunes, etc.)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month - 1, 1).getDay()
  }

  // Ajustar para que la semana comience en lunes (0 = lunes, 6 = domingo)
  const adjustFirstDay = (day) => {
    return day === 0 ? 6 : day - 1
  }

  // Función para manejar la selección de un día
  const handleDaySelect = (day) => {
    setSelectedDay(day)
  }

  // Función para manejar la adición de una nueva entrada
  const handleAddEntry = () => {
    // En una aplicación real, aquí se guardarían los datos en la base de datos
    // Para esta demo, simplemente cerramos el diálogo
    setIsAddingEntry(false)
    setNewEntryNote("")
    setNewEntryEmotion(3)
  }

  // Función para renderizar el calendario anual
  const renderYearCalendar = () => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => {
          const monthAverage = yearData[month]?.average || 0
          const colorClass = getEmotionColor(monthAverage)

          return (
            <button
              key={month}
              className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setSelectedMonth(month)}
            >
              <div className="h-full flex flex-col">
                <div className="bg-white p-2 text-center font-medium">{monthNames[month - 1]}</div>
                <div className={`flex-1 ${colorClass} flex items-center justify-center`}>
                  <span className="text-2xl">{getEmotionEmoji(monthAverage)}</span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    )
  }

  // Función para renderizar el calendario mensual
  const renderMonthCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedYear, selectedMonth)
    const firstDay = adjustFirstDay(getFirstDayOfMonth(selectedYear, selectedMonth))
    const days = []

    // Días vacíos al inicio
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>)
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const dayData = monthData.days[day]
      const emotionValue = dayData?.value || 0
      const colorClass = getEmotionColor(emotionValue)
      const isToday = selectedYear === 2025 && selectedMonth === 3 && day === 7 // Simulamos que hoy es 7 de marzo de 2025
      const isPast =
        selectedYear < 2025 ||
        (selectedYear === 2025 && selectedMonth < 3) ||
        (selectedYear === 2025 && selectedMonth === 3 && day < 7)

      days.push(
        <button
          key={day}
          className={`h-10 rounded-md flex items-center justify-center relative ${
            emotionValue > 0 ? colorClass : "bg-gray-100"
          } ${isToday ? "ring-2 ring-red-600" : ""}`}
          onClick={() => handleDaySelect(day)}
          disabled={isPast && !dayData} // Deshabilitar días pasados sin datos
        >
          <span className={emotionValue > 0 ? "text-white font-medium" : ""}>{day}</span>
          {dayData && <span className="absolute bottom-1 right-1 text-xs">{getEmotionEmoji(emotionValue)}</span>}
        </button>,
      )
    }

    return (
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-500 mb-2">
          <div>L</div>
          <div>M</div>
          <div>X</div>
          <div>J</div>
          <div>V</div>
          <div>S</div>
          <div>D</div>
        </div>
        <div className="grid grid-cols-7 gap-2">{days}</div>
      </div>
    )
  }

  // Función para renderizar el detalle del día seleccionado
  const renderDayDetail = () => {
    if (!selectedDay) return null

    const dayData = monthData.days[selectedDay]
    const currentDate = new Date()
    const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay)
    const isPastOrToday = selectedDate <= currentDate

    return (
      <Card className="mt-4 p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-medium">
              {selectedDay} de {monthNames[selectedMonth - 1]} de {selectedYear}
            </h3>
            {dayData && (
              <div className="flex items-center mt-1">
                <span className="text-2xl mr-2">{getEmotionEmoji(dayData.value)}</span>
                <span className="text-gray-600">{getEmotionText(dayData.value)}</span>
              </div>
            )}
          </div>

          {!dayData && isPastOrToday && (
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 border-red-600"
              onClick={() => setIsAddingEntry(true)}
            >
              <PlusCircle className="h-4 w-4 mr-1" />
              Añadir entrada
            </Button>
          )}

          {dayData && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNewEntryEmotion(dayData.value)
                setNewEntryNote(dayData.note)
                setIsAddingEntry(true)
              }}
            >
              <Edit2 className="h-4 w-4 mr-1" />
              Editar
            </Button>
          )}
        </div>

        {dayData ? (
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="text-gray-700">{dayData.note}</p>
          </div>
        ) : (
          <div className="text-center py-6 text-gray-500">
            {isPastOrToday
              ? "No hay registro para este día. Añade una entrada para registrar cómo te sentiste."
              : "Este día aún no ha llegado. Podrás registrar cómo te sientes cuando llegue la fecha."}
          </div>
        )}
      </Card>
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
        <h1 className="text-2xl font-medium text-gray-800 mb-4">Calendario emocional</h1>

        {/* Selector de año */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="icon" onClick={() => setSelectedYear(selectedYear - 1)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-xl font-medium">{selectedYear}</h2>
          <Button variant="ghost" size="icon" onClick={() => setSelectedYear(selectedYear + 1)}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs para cambiar entre vista anual y mensual */}
        <Tabs defaultValue="month" className="w-full mb-6">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="year">Año</TabsTrigger>
            <TabsTrigger value="month">Mes</TabsTrigger>
          </TabsList>

          <TabsContent value="year">{renderYearCalendar()}</TabsContent>

          <TabsContent value="month">
            {/* Selector de mes */}
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedMonth(selectedMonth > 1 ? selectedMonth - 1 : 12)}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h3 className="text-lg font-medium">{monthNames[selectedMonth - 1]}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedMonth(selectedMonth < 12 ? selectedMonth + 1 : 1)}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {renderMonthCalendar()}

            {/* Detalle del día seleccionado */}
            {renderDayDetail()}
          </TabsContent>
        </Tabs>

        {/* Leyenda de colores */}
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500 mb-2">LEYENDA</h3>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-1"></div>
              <span className="text-xs">Mal</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-400 rounded-full mr-1"></div>
              <span className="text-xs">Regular</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
              <span className="text-xs">Neutral</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded-full mr-1"></div>
              <span className="text-xs">Bien</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-600 rounded-full mr-1"></div>
              <span className="text-xs">Excelente</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-1"></div>
              <span className="text-xs">Sin datos</span>
            </div>
          </div>
        </div>
      </main>

      {/* Diálogo para añadir/editar entrada */}
      <Dialog open={isAddingEntry} onOpenChange={setIsAddingEntry}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {selectedDay && `${selectedDay} de ${monthNames[selectedMonth - 1]} de ${selectedYear}`}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="text-center mb-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">¿CÓMO TE SIENTES HOY?</h3>
              <EmotionSelector selectedValue={newEntryEmotion} onChange={setNewEntryEmotion} />
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-500">NOTAS DEL DÍA</h3>
              <Textarea
                placeholder="Describe cómo te sientes hoy y por qué..."
                value={newEntryNote}
                onChange={(e) => setNewEntryNote(e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
            <Button className="bg-red-600 hover:bg-red-700" onClick={handleAddEntry}>
              Guardar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

