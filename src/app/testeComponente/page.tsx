'use client'

import FlashCard from "@/components/ui/flashcard"
import RadioCards from "@/components/ui/radiobutton"
import { Progress } from "@/components/ui/progress"
import { DialogBox } from "@/components/ui/dialogBox"
import { useState, useEffect } from "react"

export default function TesteComponente() {

  const minhasOpçoes = [
    { id: "1", label: "1", description: "Gato" },
    { id: "2", label: "2", description: "Cachorro" },
    { id: "3", label: "3", description: "Pato" },
    { id: "4", label: "4", description: "Cabra" },
  ]

  const minhasLigacoes = [
    { id: "1", label: "1", description: "Gato", column: "left" as "left", matchId: "A" },
    { id: "2", label: "2", description: "Cachorro", column: "left" as "left", matchId: "B" },
    { id: "3", label: "3", description: "Pato", column: "left" as "left", matchId: "D" },
    { id: "4", label: "4", description: "Cabra", column: "left" as "left", matchId: "C" },
    { id: "A", label: "A", description: "Miau", column: "right" as "right" },
    { id: "B", label: "B", description: "Au au", column: "right" as "right" },
    { id: "C", label: "C", description: "Meee", column: "right" as "right" },
    { id: "D", label: "D", description: "Quak", column: "right" as "right" },
  ]

  const [progress, setProgress] = useState(30)
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <FlashCard back="Paris" front="What is the capital of France?" category="B" />
      <RadioCards variant="connection" connectionOptions={minhasLigacoes} />
      <RadioCards variant="trueFalse" />
      <RadioCards variant="alternatives" options={minhasOpçoes} />
      <div style={{
        width: "60%", marginBottom: "50px",
        marginTop: "50px", display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <Progress value={progress} color="#0E7C7B" />
        <DialogBox onClose={() => console.log("a")} variant="desafio"   />
      </div>

    </div>
  )
}