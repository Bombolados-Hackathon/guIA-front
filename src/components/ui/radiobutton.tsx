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
    matchId?: string // ID do par correto
}

interface RadioCardsProps {
    variant: "alternatives" | "trueFalse" | "connection"
    options?: Option[]
    connectionOptions?: ConnectionOption[]
    selectedValue?: string
    onSelectionChange?: (value: string) => void
}

export default function RadioCards({
    variant,
    options = [],
    connectionOptions = [],
    selectedValue,
    onSelectionChange,
}: RadioCardsProps) {
    const [selectedOption, setSelectedOption] = useState<string>(selectedValue || "")
    const [connectionState, setConnectionState] = useState<{
        firstSelected: string | null
        matches: string[]
        incorrectPairs: string[]
        disabledCards: string[]
        errorCount: number
        lastCorrectPair: string[]
    }>({
        firstSelected: null,
        matches: [],
        incorrectPairs: [],
        disabledCards: [],
        errorCount: 0,
        lastCorrectPair: [],
    })

    const handleOptionChange = (optionId: string) => {
        setSelectedOption(optionId)
        onSelectionChange?.(optionId)
    }

    const handleConnectionClick = (optionId: string, column: "left" | "right") => {
        if (connectionState.disabledCards.includes(optionId)) return // Não permitir cliques se este card está desabilitado

        if (column === "left") {
            // Limpar pares incorretos quando selecionar nova opção da esquerda
            setConnectionState({
                ...connectionState,
                firstSelected: optionId,
                incorrectPairs: [],
            })
        } else {
            // Selecionando da coluna direita
            if (connectionState.firstSelected) {
                const leftOption = connectionOptions.find((opt) => opt.id === connectionState.firstSelected)

                if (leftOption?.matchId === optionId) {
                    // Par correto! Primeiro mostrar verde
                    const newCorrectPair = [connectionState.firstSelected, optionId]

                    setConnectionState({
                        firstSelected: null,
                        matches: [...connectionState.matches, ...newCorrectPair],
                        incorrectPairs: [],
                        disabledCards: connectionState.disabledCards,
                        errorCount: connectionState.errorCount,
                        lastCorrectPair: newCorrectPair,
                    })

                    // Após 1 segundo, mover para cinza e desabilitar par anterior se existir
                    setTimeout(() => {
                        setConnectionState((prev) => {
                            const newDisabledCards =
                                prev.lastCorrectPair.length > 0
                                    ? [...prev.disabledCards, ...prev.lastCorrectPair]
                                    : [...prev.disabledCards, ...newCorrectPair]

                            return {
                                ...prev,
                                matches: prev.matches.filter((id) => !newCorrectPair.includes(id)),
                                disabledCards: newDisabledCards,
                            }
                        })
                    }, 1000)
                } else {
                    // Par incorreto! Mostrar vermelho e incrementar contador
                    setConnectionState({
                        ...connectionState,
                        firstSelected: null,
                        incorrectPairs: [connectionState.firstSelected, optionId],
                        errorCount: connectionState.errorCount + 1,
                    })

                    // Limpar o vermelho após 2 segundos para permitir nova tentativa
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

    const getConnectionCardStyle = (optionId: string, column: "left" | "right") => {
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

    // Renderizar alternativas (atual)
    if (variant === "alternatives") {
        return (
            <div className="max-w-2xl mx-auto p-2">
                <h2 className="text-xl font-semibold mb-4 text-center">Escolha uma opção:</h2>
                <div className="grid grid-cols-2 gap-3">
                    {options.map((option) => (
                        <Card
                            key={option.id}
                            className={`cursor-pointer transition-all duration-200 border-2 h-24 ${selectedOption === option.id
                                    ? "border-[#0E7C7B] text-[#0E7C7B]"
                                    : "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
                                }`}
                            style={selectedOption === option.id ? { backgroundColor: "#E3F6F7" } : {}}
                            onClick={() => handleOptionChange(option.id)}
                        >
                            <CardContent className="p-3 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <p
                                        className={`text-lg leading-relaxed ${selectedOption === option.id ? "text-[#0E7C7B]" : "text-gray-600"}`}
                                    >
                                        <span className="font-semibold">{option.label})</span> {option.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

    // Renderizar Verdadeiro/Falso
    if (variant === "trueFalse") {
        const trueFalseOptions = [
            { id: "true", label: "Verdadeiro", description: "" },
            { id: "false", label: "Falso", description: "" },
        ]

        return (
            <div className="max-w-2xl mx-auto p-2">
                <h2 className="text-xl font-semibold mb-4 text-center">Verdadeiro ou Falso?</h2>
                <div className="grid grid-cols-2 gap-3">
                    {trueFalseOptions.map((option) => (
                        <Card
                            key={option.id}
                            className={`cursor-pointer transition-all duration-200 border-2 h-24 ${selectedOption === option.id
                                    ? option.id === "true"
                                        ? "border-[#0E7C7B] text-[#0E7C7B]"
                                        : "border-red-600 text-red-600"
                                    : "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
                                }`}
                            style={
                                selectedOption === option.id ? { backgroundColor: option.id === "true" ? "#E3F6F7" : "#FEE2E2" } : {}
                            }
                            onClick={() => handleOptionChange(option.id)}
                        >
                            <CardContent className="p-3 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <p
                                        className={`text-lg font-semibold ${selectedOption === option.id
                                                ? option.id === "true"
                                                    ? "text-[#0E7C7B]"
                                                    : "text-red-600"
                                                : "text-gray-600"
                                            }`}
                                    >
                                        {option.label}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

    // Renderizar Ligação
    if (variant === "connection") {
        const leftOptions = connectionOptions.filter((opt) => opt.column === "left")
        const rightOptions = connectionOptions.filter((opt) => opt.column === "right")

        return (
            <div className="max-w-4xl mx-auto p-2">
                <h2 className="text-xl font-semibold mb-4 text-center">Faça as ligações corretas:</h2>

                {/* Contador de erros */}
                <div className="text-center mb-4">
                    <p className="text-sm text-gray-600">
                        Erros: <span className="font-semibold text-red-600">{connectionState.errorCount}</span>
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {/* Coluna Esquerda */}
                    <div className="space-y-2">
                        {leftOptions.map((option) => (
                            <Card
                                key={option.id}
                                className={`cursor-pointer transition-all duration-200 border-2 h-16 ${getConnectionCardStyle(option.id, "left")}`}
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

                    {/* Coluna Direita */}
                    <div className="space-y-2">
                        {rightOptions.map((option) => (
                            <Card
                                key={option.id}
                                className={`cursor-pointer transition-all duration-200 border-2 h-16 ${getConnectionCardStyle(option.id, "right")}`}
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
