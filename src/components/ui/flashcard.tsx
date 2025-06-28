'use client'

import { useState } from 'react'
import { RotateCcw, BookOpen, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FlashCardProps {
    front: string
    back: string
    category?: string
}

export default function FlashCard({ front, back, category }: FlashCardProps) {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isKnown, setIsKnown] = useState<boolean | null>(null)

    const handleFlip = () => setIsFlipped(!isFlipped)
    const handleKnowledge = (known: boolean) => setIsKnown(known)
    const resetCard = () => {
        setIsFlipped(false)
        setIsKnown(null)
    }

    const categoryStyles = {
        A: {
            front: 'bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400',
            back: 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300',
            tape: 'bg-blue-100',
            icon: 'text-blue-700',
            badge: 'bg-blue-500',
        },
        B: {
            front: 'bg-gradient-to-br from-green-200 via-green-300 to-green-400',
            back: 'bg-gradient-to-br from-green-100 via-green-200 to-green-300',
            tape: 'bg-green-100',
            icon: 'text-green-700',
            badge: 'bg-green-500',
        },
        C: {
            front: 'bg-gradient-to-br from-red-200 via-red-300 to-red-400',
            back: 'bg-gradient-to-br from-red-100 via-red-200 to-red-300',
            tape: 'bg-red-100',
            icon: 'text-red-700',
            badge: 'bg-red-500',
        },
    }

    const styles = categoryStyles[category as 'A' | 'B' | 'C'] ?? {
        front: 'bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400',
        back: 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300',
        tape: 'bg-gray-100',
        icon: 'text-gray-700',
        badge: 'bg-gray-500',
    }

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            {/* Flash Card */}
            <div className="relative w-80 h-56 cursor-pointer group" onClick={handleFlip}>
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                    {/* Front Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                        <div className={`w-full h-full ${styles.front} rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300`}>
                            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 ${styles.tape} opacity-60 rounded-b-md`} />
                            <div className={`absolute top-3 right-3 ${styles.badge} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                                {category}
                            </div>
                            <div className={`absolute top-3 left-3 ${styles.icon}`}>
                                <BookOpen size={20} />
                            </div>
                            <div className="flex items-center justify-center h-full p-6">
                                <p className="text-gray-800 text-lg font-medium text-center leading-relaxed">
                                    {front}
                                </p>
                            </div>
                            <div className={`absolute bottom-3 right-3 ${styles.icon} text-xs opacity-70`}>
                                Click to flip
                            </div>
                        </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                        <div className={`w-full h-full ${styles.back} rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300`}>
                            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 ${styles.tape} opacity-60 rounded-b-md`} />
                            <div className={`absolute top-3 left-3 ${styles.icon}`}>
                                <CheckCircle size={20} />
                            </div>
                            <div className="flex items-center justify-center h-full p-6">
                                <p className="text-gray-800 text-xl font-semibold text-center">
                                    {back}
                                </p>
                            </div>
                            <div className={`absolute bottom-3 right-3 ${styles.icon} text-xs opacity-70`}>
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
                            className={`${isKnown === false
                                ? 'bg-red-500 hover:bg-red-600'
                                : 'hover:bg-red-50 hover:text-red-600 hover:border-red-300'}`}
                        >
                            Need Practice
                        </Button>
                        <Button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleKnowledge(true)
                            }}
                            variant={isKnown === true ? 'default' : 'outline'}
                            className={`${isKnown === true
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'hover:bg-green-50 hover:text-green-600 hover:border-green-300'}`}
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
                <div className={`text-sm font-medium ${isKnown ? 'text-green-600' : 'text-red-600'}`}>
                    {isKnown ? '✓ Marked as known' : '⚠ Needs more practice'}
                </div>
            )}
        </div>
    )
}
