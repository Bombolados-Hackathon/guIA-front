'use client'

import FlashCard from './flashcard'

export default function FlashCardDemo() {
    const sampleCards = [
        {
            front: 'What is the capital of France?',
            back: 'Paris',
            category: 'Geography',
        },
        {
            front: 'What is 15 × 8?',
            back: '120',
            category: 'Math',
        },
        {
            front: "Who wrote 'Romeo and Juliet'?",
            back: 'William Shakespeare',
            category: 'Literature',
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Flash Card Component
                    </h1>
                    <p className="text-gray-600">
                        Interactive post-it style flash cards for education
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {sampleCards.map((card, index) => (
                        <FlashCard
                            key={index}
                            front={card.front}
                            back={card.back}
                            category={card.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
