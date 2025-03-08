"use client"

// Definición de las emociones
const emotions = [
  { value: 1, emoji: "😞", label: "Mal" },
  { value: 2, emoji: "😕", label: "Regular" },
  { value: 3, emoji: "😐", label: "Neutral" },
  { value: 4, emoji: "🙂", label: "Bien" },
  { value: 5, emoji: "😄", label: "Excelente" },
]

interface EmotionSelectorProps {
  selectedValue: number
  onChange: (value: number) => void
}

export default function EmotionSelector({ selectedValue, onChange }: EmotionSelectorProps) {
  return (
    <div className="flex justify-between bg-white rounded-lg p-2 shadow-sm">
      {emotions.map((emotion) => (
        <button
          key={emotion.value}
          onClick={() => onChange(emotion.value)}
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            selectedValue === emotion.value ? "bg-red-100 text-red-600" : "hover:bg-gray-100"
          }`}
        >
          <span className="text-2xl">{emotion.emoji}</span>
          <span className="text-xs mt-1">{emotion.label}</span>
        </button>
      ))}
    </div>
  )
}

