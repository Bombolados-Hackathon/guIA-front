'use client'

import { useState } from 'react'
import { RotateCcw, BookOpen, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FlashCardProps {
    front: string
    back: string
    category?: string
}

export default function FlashCard({
    front = 'What is the capital of France?',
    back = 'Paris',
    category = 'Geography',
}: FlashCardProps) {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isKnown, setIsKnown] = useState<boolean | null>(null)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    const handleKnowledge = (known: boolean) => {
        setIsKnown(known)
    }

    const resetCard = () => {
        setIsFlipped(false)
        setIsKnown(null)
    }

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            {/* Flash Card */}
            <div
                className="relative w-80 h-56 cursor-pointer group"
                onClick={handleFlip}
            >
                {/* Card Container with 3D flip effect */}
                <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                    {/* Front Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            {/* Post-it tape effect */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-100 opacity-60 rounded-b-md"></div>

                            {/* Category badge */}
                            <div className="absolute top-3 right-3 bg-orange-400 text-white text-xs px-2 py-1 rounded-full font-medium">
                                {category}
                            </div>

                            {/* Question mark icon */}
                            <div className="absolute top-3 left-3 text-yellow-700">
                                <BookOpen size={20} />
                            </div>

                            {/* Content */}
                            <div className="flex items-center justify-center h-full p-6">
                                <p className="text-gray-800 text-lg font-medium text-center leading-relaxed">
                                    {front}
                                </p>
                            </div>

                            {/* Flip hint */}
                            <div className="absolute bottom-3 right-3 text-yellow-700 text-xs opacity-70">
                                Click to flip
                            </div>
                        </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                        <div className="w-full h-full bg-gradient-to-br from-green-200 via-green-300 to-green-400 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                            {/* Post-it tape effect */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-green-100 opacity-60 rounded-b-md"></div>

                            {/* Check icon */}
                            <div className="absolute top-3 left-3 text-green-700">
                                <CheckCircle size={20} />
                            </div>

                            {/* Content */}
                            <div className="flex items-center justify-center h-full p-6">
                                <p className="text-gray-800 text-xl font-semibold text-center">
                                    {back}
                                </p>
                            </div>

                            {/* Flip hint */}
                            <div className="absolute bottom-3 right-3 text-green-700 text-xs opacity-70">
                                Click to flip back
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                {isFlipped && (
                    <>
                        <Button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleKnowledge(false)
                            }}
                            variant={isKnown === false ? 'default' : 'outline'}
                            className={`${isKnown === false ? 'bg-red-500 hover:bg-red-600' : 'hover:bg-red-50 hover:text-red-600 hover:border-red-300'}`}
                        >
                            Need Practice
                        </Button>
                        <Button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleKnowledge(true)
                            }}
                            variant={isKnown === true ? 'default' : 'outline'}
                            className={`${isKnown === true ? 'bg-green-500 hover:bg-green-600' : 'hover:bg-green-50 hover:text-green-600 hover:border-green-300'}`}
                        >
                            Got It!
                        </Button>
                    </>
                )}

                <Button
                    onClick={(e) => {
                        e.stopPropagation()
                        resetCard()
                    }}
                    variant="outline"
                    size="icon"
                >
                    <RotateCcw size={16} />
                </Button>
            </div>

            {/* Status indicator */}
            {isKnown !== null && (
                <div
                    className={`text-sm font-medium ${isKnown ? 'text-green-600' : 'text-red-600'}`}
                >
                    {isKnown ? '✓ Marked as known' : '⚠ Needs more practice'}
                </div>
            )}
        </div>
    )
}
