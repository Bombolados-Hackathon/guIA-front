import { TrailStep, type StepStatus } from './trail-steps'

interface Step {
  id: number
  status: StepStatus
}

interface TrailPathProps {
  steps: Step[]
  title?: string
  xpValue?: number
}

export function TrailPath({
  steps,
  title = 'Trilha Diária',
  xpValue = 300,
}: TrailPathProps) {
  return (
    <div className="w-full mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          {title} {xpValue} XP
        </h2>
      </div>

      <div className="flex items-center justify-center overflow-x-auto pb-4">
        <div className="flex items-center space-x-0">
          {steps.map((step, index) => (
            <TrailStep
              key={step.id}
              number={step.id}
              status={step.status}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
