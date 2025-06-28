'use client'

import { useParams } from 'next/navigation'
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"
import RadioCards from '@/components/ui/radiobutton'
import { Heart } from 'lucide-react'

export default function Page() {
  const { taskId } = useParams()
  const [vidas, setVidas] = useState(3)
  const [progress, setProgress] = useState(30)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 5000)
    return () => clearTimeout(timer)
  }, [])

  const minhasLigacoes: {
    id: string
    label: string
    description: string
    column: "left" | "right"
    matchId?: string
  }[] = [
    { id: "1", label: "1", description: "Gato", column: "left", matchId: "A" },
    { id: "2", label: "2", description: "Cachorro", column: "left", matchId: "B" },
    { id: "3", label: "3", description: "Pato", column: "left", matchId: "D" },
    { id: "4", label: "4", description: "Cabra", column: "left", matchId: "C" },
    { id: "A", label: "A", description: "Miau", column: "right" },
    { id: "B", label: "B", description: "Au au", column: "right" },
    { id: "C", label: "C", description: "Meee", column: "right" },
    { id: "D", label: "D", description: "Quak", column: "right" },
  ]

  return (
    <div className="h-full w-full flex items-center justify-center">
      <main className="mt-12 mb-12 w-[80%] flex flex-col items-center justify-around gap-6">
        <div className="w-[95%] flex items-center justify-between gap-6">
          <Progress value={progress} color="#0E7C7B" />
          <div className="flex items-center gap-2">
            {Array.from({ length: vidas }).map((_, index) => (
              <Heart key={index} color="#ff0000" fill="#ff0000" size={24} />
            ))}
          </div>
        </div>

        <div className="flex flex-col text-center max-w-2xl">
          <h1 className="text-xl font-semibold">Lorem</h1>
          <p className="text-gray-700 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non sem vel tortor consequat venenatis vel at sem.
          </p>
        </div>

        <RadioCards
          variant="connection"
          connectionOptions={minhasLigacoes}
          onError={() => setVidas((v) => Math.max(v - 1, 0))}
        />
      </main>
    </div>
  )
}


  