'use client'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { StepStatus } from '@/components/ui/trail-steps'
import { TrailPath } from '@/components/ui/trail-path'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Scrollbar } from '@radix-ui/react-scroll-area'

interface Step {
  id: number
  status: StepStatus
}

export default function TrailDemo() {
  const [currentStep, setCurrentStep] = useState(2)

  const generateSteps = (current: number, total = 7): Step[] => {
    return Array.from({ length: total }, (_, index) => {
      const stepNumber = index + 1
      let status: StepStatus

      if (stepNumber < current) {
        status = 'completed'
      } else if (stepNumber === current) {
        status = 'current'
      } else {
        status = 'upcoming'
      }

      return {
        id: stepNumber,
        status,
      }
    })
  }

  const steps = generateSteps(currentStep)

  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetTrail = () => {
    setCurrentStep(1)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <ScrollArea>
          <TrailPath steps={steps} title="Trilha Diária" xpValue={300} />
          <Scrollbar orientation="horizontal" />
        </ScrollArea>

        <div className="flex justify-center space-x-4 mt-8">
          <Button
            onClick={prevStep}
            disabled={currentStep === 1}
            variant="outline"
          >
            Anterior
          </Button>
          <Button onClick={nextStep} disabled={currentStep === 7}>
            Próximo
          </Button>
          <Button onClick={resetTrail} variant="secondary">
            Reiniciar
          </Button>
        </div>

        <div className="text-center mt-4 text-gray-600">
          Etapa atual: {currentStep} de 7
        </div>
      </div>
    </div>
  )
}
