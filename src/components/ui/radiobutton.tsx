"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface Option {
    id: string
    label: string
    description: string
}

interface ConnectionOption {
    id: string
    label: string
    description: string
    column: "left" | "right"
    matchId?: string
}

interface RadioCardsProps {
    variant: "alternatives" | "trueFalse" | "connection"
    options?: Option[]
    connectionOptions?: ConnectionOption[]
    selectedValue?: string
    onSelectionChange?: (value: string) => void
    onError?: () => void // <- Novo!
}

export default function RadioCards({
    variant,
    options = [],
    connectionOptions = [],
    selectedValue,
    onSelectionChange,
    onError,
}: RadioCardsProps) {
    const [selectedOption, setSelectedOption] = useState<string>(selectedValue || "")
    const [connectionState, setConnectionState] = useState({
        firstSelected: null as string | null,
        matches: [] as string[],
        incorrectPairs: [] as string[],
        disabledCards: [] as string[],
        errorCount: 0,
        lastCorrectPair: [] as string[],
    })

    const handleOptionChange = (optionId: string) => {
        setSelectedOption(optionId)
        onSelectionChange?.(optionId)
    }

    const handleConnectionClick = (optionId: string, column: "left" | "right") => {
        if (connectionState.disabledCards.includes(optionId)) return

        if (column === "left") {
            setConnectionState({
                ...connectionState,
                firstSelected: optionId,
                incorrectPairs: [],
            })
        } else {
            if (connectionState.firstSelected) {
                const leftOption = connectionOptions.find((opt) => opt.id === connectionState.firstSelected)

                if (leftOption?.matchId === optionId) {
                    const newCorrectPair = [connectionState.firstSelected, optionId]
                    setConnectionState({
                        ...connectionState,
                        firstSelected: null,
                        matches: [...connectionState.matches, ...newCorrectPair],
                        incorrectPairs: [],
                        lastCorrectPair: newCorrectPair,
                    })

                    setTimeout(() => {
                        setConnectionState((prev) => {
                            const newDisabledCards = [...prev.disabledCards, ...newCorrectPair]
                            return {
                                ...prev,
                                matches: prev.matches.filter((id) => !newCorrectPair.includes(id)),
                                disabledCards: newDisabledCards,
                            }
                        })
                    }, 1000)
                } else {
                    setConnectionState({
                        ...connectionState,
                        firstSelected: null,
                        incorrectPairs: [connectionState.firstSelected, optionId],
                        errorCount: connectionState.errorCount + 1,
                    })
                    onError?.() // <- Notifica erro!

                    setTimeout(() => {
                        setConnectionState((prev) => ({
                            ...prev,
                            incorrectPairs: [],
                        }))
                    }, 2000)
                }
            }
        }
    }

    const getConnectionCardStyle = (optionId: string) => {
        if (connectionState.disabledCards.includes(optionId)) {
            return "border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed"
        }
        if (connectionState.matches.includes(optionId)) {
            return "border-[#0E7C7B] text-[#0E7C7B] bg-[#E3F6F7]"
        }
        if (connectionState.incorrectPairs.includes(optionId)) {
            return "border-red-600 text-red-600 bg-red-50"
        }
        if (connectionState.firstSelected === optionId) {
            return "border-[#0E7C7B] text-[#0E7C7B] bg-[#E3F6F7]"
        }
        return "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
    }

    if (variant === "connection") {
        const leftOptions = connectionOptions.filter((opt) => opt.column === "left")
        const rightOptions = connectionOptions.filter((opt) => opt.column === "right")

        return (
            <div className="max-w-4xl mx-auto p-2">
                <h2 className="text-xl font-semibold mb-4 text-center">Faça as ligações corretas:</h2>
                <div className="text-center mb-4">
                    <p className="text-sm text-gray-600">
                        Erros: <span className="font-semibold text-red-600">{connectionState.errorCount}</span>
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                        {leftOptions.map((option) => (
                            <Card
                                key={option.id}
                                className={`cursor-pointer transition-all duration-200 border-2 h-16 ${getConnectionCardStyle(option.id)}`}
                                onClick={() => handleConnectionClick(option.id, "left")}
                            >
                                <CardContent className="p-2 h-full flex items-center">
                                    <p className="text-sm font-medium">
                                        {option.label}) {option.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="space-y-2">
                        {rightOptions.map((option) => (
                            <Card
                                key={option.id}
                                className={`cursor-pointer transition-all duration-200 border-2 h-16 ${getConnectionCardStyle(option.id)}`}
                                onClick={() => handleConnectionClick(option.id, "right")}
                            >
                                <CardContent className="p-2 h-full flex items-center">
                                    <p className="text-sm font-medium">
                                        {option.label}) {option.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return null
}
