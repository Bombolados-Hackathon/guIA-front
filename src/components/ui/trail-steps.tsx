import { cn } from "@/lib/utils"

export type StepStatus = "completed" | "current" | "upcoming"

interface TrailStepProps {
    number: number
    status: StepStatus
    isLast?: boolean
}

export function TrailStep({ number, status, isLast = false }: TrailStepProps) {
    const getStepStyles = () => {
        switch (status) {
            case "completed":
                return "bg-blue-200 text-blue-700 border-blue-300"
            case "current":
                return "bg-blue-500 text-white border-blue-600"
            case "upcoming":
                return "bg-gray-200 text-gray-600 border-gray-400"
            default:
                return "bg-gray-200 text-gray-600 border-gray-400"
        }
    }

    const getConnectorStyles = () => {
        switch (status) {
            case "completed":
                return "bg-blue-200"
            case "current":
                return "bg-blue-400"
            case "upcoming":
                return "bg-gray-300"
            default:
                return "bg-gray-300"
        }
    }

    return (
        <div className="flex items-center">
            <div
                className={cn(
                    "w-20 h-20 rounded-full border-4 flex items-center justify-center text-2xl font-bold transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg",
                    getStepStyles(),
                )}
            >
                {number}
            </div>
            {!isLast && <div className={cn("w-16 h-1 transition-all duration-300", getConnectorStyles())} />}
        </div>
    )
}
