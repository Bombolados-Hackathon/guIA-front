'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardAction,
} from "@/components/ui/card"

import LottieAnimation from "@/components/Lottie"
import Sol from "@/lib/ui/lottie/sol.json"
import Sad from "@/lib/ui/lottie/sad.json"
import Camelo from "@/lib/ui/lottie/camelo.json"

export function CardXp() {
    const [xp, setXp] = useState(0)

    let title = ""
    let message = ""
    let color = ""
    let animation = Sad // valor padrão

    if (xp < 50) {
        title = "Continue tentando!"
        message = "Você ainda não atingiu a pontuação necessária. Revise o conteúdo e tente novamente!"
        color = "text-red-600"
        animation = Sad
    } else if (xp < 100) {
        title = "Muito bem!"
        message = "Você atingiu uma boa pontuação. Continue assim para gabaritar!"
        color = "text-yellow-600"
        animation = Camelo
    } else {
        title = "Parabéns!"
        message = "Você gabaritou! Excelente trabalho!"
        color = "text-green-600"
        animation = Sol
    }

    return (
        <Card className="w-[320px] h-[320px] flex flex-col justify-between">
            <CardHeader className="flex flex-col gap-1 px-4 pt-4 text-center">
                <CardTitle className={`text-lg font-bold ${color}`}>{title}</CardTitle>
                <CardDescription className="text-sm">{message}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-4">
                <p className="text-base font-medium text-gray-800">Você ganhou {xp} XP</p>
                <LottieAnimation
                    animationData={animation}
                    loop
                    autoplay
                    className="w-24 h-24"
                />
            </CardContent>

            <CardAction className="pb-4 text-center">
                <div className="flex justify-center gap-2">
                    <Button size="sm" onClick={() => setXp((prev) => Math.min(prev + 10, 100))}>
                        +10 XP
                    </Button>
                    <Button size="sm" variant="link" onClick={() => setXp(0)}>
                        Reiniciar
                    </Button>
                </div>
            </CardAction>
        </Card>
    )
}
