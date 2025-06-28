'use client'

import { useParams } from 'next/navigation'

export default function Page() {
  const { taskId } = useParams()

  return (
    <div className="h-full w-full flex items-center justify-center">
      <main></main>
      <footer></footer>
    </div>
  )
}
