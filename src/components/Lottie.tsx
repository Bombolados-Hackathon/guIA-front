'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

interface LottieAnimationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any
  loop?: boolean
  autoplay?: boolean
  className?: string
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className,
}) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  )
}

export default LottieAnimation
