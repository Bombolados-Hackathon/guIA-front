import LottieAnimation from '@/components/Lottie'
import { Button } from '@/components/ui/button'
import Animation from '@/lib/ui/lottie/estudanteFlutuando.json'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-lato)]">
      <main className="flex gap-[32px] row-start-2 items-center sm:items-start">
        <section className="bg-gradient-to-br from-green-50 to-blue-50">
          <div>
            <h1 className="font-lato flex items-center text-4xl underline">
              Utilize o gu<span className="text-green-400">IA</span>
            </h1>
            <h1 className="font-lato">
              Uma solução baseada em transcrição de video-aulas com inteligência
              artificial, com intuito de transformar o processo de aprendizagem
              além de intuitivo, divertido e{' '}
              <i className="text-green-400">gameficado</i>.
            </h1>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <Button className="cursor-pointer">Iniciar</Button>
            <Button variant={'secondary'} className="cursor-pointer">
              Saiba mais
            </Button>
          </div>
        </section>
        <section className="bg-transparent">
          <div className="bg-transparent">
            <LottieAnimation
              animationData={Animation}
              loop={true}
              autoplay={true}
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-transparent"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
