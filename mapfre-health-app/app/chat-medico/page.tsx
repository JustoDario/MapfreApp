"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Bell, Menu, Send, Calendar, MapPin, Clock, User, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import BottomNavigation from "@/components/bottom-navigation"
import MainMenu from "@/components/main-menu"

// Actividad recomendada
const recommendedActivity = {
  id: 1,
  title: "Yoga para principiantes",
  description:
    "Clase de yoga para todos los niveles. Aprende las posturas básicas y técnicas de respiración para mejorar tu bienestar físico y mental.",
  date: "15 Marzo, 2025",
  time: "18:00 - 19:30",
  instructor: "Ana Martínez",
  location: "Centro MAPFRE Bienestar Castellana",
  address: "Paseo de la Castellana 33, 28046 Madrid",
}

export default function ChatMedicoPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text: "Hola, Marcos 😊 ¿Cómo te sientes hoy?",
      timestamp: "10:30",
      isEmotionScale: true,
    },
  ])

  const [inputValue, setInputValue] = useState("")
  const [selectedEmotion, setSelectedEmotion] = useState(null)
  const [showRecommendation, setShowRecommendation] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // Emociones para la escala
  const emotions = [
    { value: 1, emoji: "😞", label: "Mal" },
    { value: 2, emoji: "😕", label: "Regular" },
    { value: 3, emoji: "😐", label: "Neutral" },
    { value: 4, emoji: "🙂", label: "Bien" },
    { value: 5, emoji: "😄", label: "Excelente" },
  ]

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const addAssistantMessage = async (text, options = {}) => {
    setIsTyping(true)
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simular escritura
    setIsTyping(false)

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "assistant",
        text,
        timestamp: getCurrentTime(),
        ...options,
      },
    ])
  }

  // Mostrar recomendación después de la respuesta del usuario
  useEffect(() => {
    if (messages.length === 3 && !showRecommendation) {
      const sendRecommendation = async () => {
        await addAssistantMessage(
          "Te entiendo perfectamente. Los exámenes pueden ser agotadores, pero recuerda que el esfuerzo que estás haciendo valdrá la pena. ¡Confío en ti! 💪",
        )
        await addAssistantMessage(
          "A veces, hacer una pausa puede ayudarte a rendir mejor. Revisé tu agenda y veo que el 15 de marzo no tienes exámenes ni entregas importantes, por lo que podrías tomarte un rato para relajarte sin afectar tu estudio. ¿Qué te parece esta actividad?",
          { isRecommendation: true },
        )
      }
      sendRecommendation()
      setShowRecommendation(true)
    }
  }, [messages, showRecommendation])

  const handleEmotionSelect = async (emotion) => {
    setSelectedEmotion(emotion)

    // Añadir mensaje de selección de emoción
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "user",
        text: `Me siento ${emotion.label} hoy ${emotion.emoji}`,
        timestamp: getCurrentTime(),
      },
    ])

    // Simular respuesta del asistente
    await addAssistantMessage("Gracias por contarme, Marcos. ¿Quieres contarme qué te tiene así?")
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "user",
        text: inputValue,
        timestamp: getCurrentTime(),
      },
    ])

    setInputValue("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleEnrollActivity = async () => {
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "user",
        text: "Me gustaría inscribirme en la actividad de yoga.",
        timestamp: getCurrentTime(),
      },
    ])

    await addAssistantMessage(
      "¡Perfecto! Te he inscrito en la clase de Yoga para principiantes del 15 de Marzo. Recibirás un recordatorio el día anterior. ¡Verás cómo te ayuda a sentirte mejor! 🧘‍♂️✨",
    )
  }

  const getCurrentTime = () => {
    const now = new Date()
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`
  }

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
      <main className="flex-1 p-4 flex flex-col">
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Mapfry</h1>

        <div className="flex-1 overflow-auto mb-4 flex flex-col gap-4">
          {/* System Message */}
          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] mx-auto text-center text-sm text-gray-600">
            Has iniciado una nueva consulta con Mapfry, tu asistente virtual.
          </div>

          {/* Chat Messages */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "self-end" : ""}`}
            >
              {message.sender === "assistant" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perfil.jpg-ESmTvvZgjl30k3QVPjMWZkRPs2j0HN.jpeg"
                    alt="Mapfry"
                  />
                  <AvatarFallback className="bg-red-600 text-white text-xs">MF</AvatarFallback>
                </Avatar>
              )}

              <div className={`rounded-lg p-3 ${message.sender === "assistant" ? "bg-blue-100" : "bg-red-100"}`}>
                {message.sender === "assistant" && <div className="text-xs text-blue-600 mb-1">Mapfry</div>}

                <p className="text-gray-800">{message.text}</p>

                {/* Escala emocional */}
                {message.isEmotionScale && (
                  <div className="mt-3 flex justify-between bg-white rounded-lg p-2">
                    {emotions.map((emotion) => (
                      <button
                        key={emotion.value}
                        onClick={() => handleEmotionSelect(emotion)}
                        className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                          selectedEmotion?.value === emotion.value ? "bg-blue-100" : "hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-2xl">{emotion.emoji}</span>
                        <span className="text-xs mt-1">{emotion.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Recomendación de actividad */}
                {message.isRecommendation && (
                  <Card className="mt-3 bg-white">
                    <div className="p-3">
                      <h3 className="font-medium text-blue-600">{recommendedActivity.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 mb-2">{recommendedActivity.description}</p>

                      <div className="space-y-1 text-xs text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{recommendedActivity.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{recommendedActivity.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>Instructor: {recommendedActivity.instructor}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{recommendedActivity.location}</span>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        className="w-full bg-red-600 hover:bg-red-700 text-xs"
                        onClick={handleEnrollActivity}
                      >
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        Inscribirme ahora
                      </Button>
                    </div>
                  </Card>
                )}

                <div className="text-xs text-gray-500 text-right mt-1">{message.timestamp}</div>
              </div>
            </div>
          ))}

          {/* Indicador de escritura */}
          {isTyping && (
            <div className="flex items-start gap-2 max-w-[80%]">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perfil.jpg-ESmTvvZgjl30k3QVPjMWZkRPs2j0HN.jpeg"
                  alt="Mapfry"
                />
                <AvatarFallback className="bg-red-600 text-white text-xs">MF</AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 rounded-lg px-4 py-2">
                <div className="flex gap-1">
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Escribe tu mensaje..."
            className="flex-1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            size="icon"
            className="bg-red-600 hover:bg-red-700 h-10 w-10 rounded-full"
            onClick={handleSendMessage}
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Enviar</span>
          </Button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

