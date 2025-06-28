import LottieAnimation from '@/components/Lottie'
import AboutCard from '@/components/ui/about-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CardWrap } from '@/components/ui/card-wrap'
import Animation from '@/lib/ui/lottie/estudanteFlutuando.json'
import {
  BookMarked,
  Bot,
  Laugh,
  Pencil,
  Rocket,
  Target,
  Trophy,
  Layers,
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-full w-full justify-center">
      <main className="h-screen w-full overflow-y-scroll scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <section
          id="home"
          className="h-screen flex gap-4 px-20 bg-gradient-to-br from-green-50 to-blue-50 not-sm:flex-col not-sm:px-5 not-sm:items-center not-sm:justify-center items-center"
        >
          <div id="esquerda" className="max-w-[50%] not-sm:max-w-[90%]">
            <div>
              <div className="space-y-6 mb-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Estude com <span className="text-green-400 block">GuIA</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  O GuIA (se diz &quot;Guia&quot;, do verbo &quot;Guiar&quot;)
                  usa inteligência artificial para transformar suas aulas em
                  resumos, quizzes e uma experiência de aprendizado{' '}
                  <span className="text-green-400 font-semibold italic">
                    gamificada{' '}
                  </span>
                  que realmente funciona! 🚀
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-6">
              <Button
                asChild
                className="bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                <Link href="/trilhaDiaria">Começar agora</Link>
              </Button>
              <Button variant={'secondary'} asChild>
                <Link href="#about">Saiba mais</Link>
              </Button>
            </div>
          </div>
          <div id="direita">
            <Card className="shadow-2xl p-3 space-y-4 border-none outline-none">
              <CardContent>
                <LottieAnimation
                  animationData={Animation}
                  loop={true}
                  autoplay={true}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="about"
          className="h-screen w-full sm:px-20 space-y-6 mt-8 mb-8 pb-6"
        >
          {/* O que é o GuIA */}
          <div className="w-full">
            <h1 className="text-3xl lg:text-6xl font-bold leading-tight flex items-center gap-2 mb-5 pl-5">
              O que é o <span className="text-green-400 inline">GuIA</span>?
            </h1>
            <CardWrap gap="lg" className="mx-auto">
              <AboutCard
                title="Direcionamento de Estudos"
                icon={<BookMarked />}
                content="A IA do GuIA reconhece suas maiores dificuldades e monta um plano de estudos personalizado."
                hasBadge
                badgeText="I.A"
                badgeIcon={<Bot />}
                badgeVariant="default"
              />
              <AboutCard
                title="Resumos Inteligentes"
                icon={<Pencil />}
                content="Transforme conteúdos longos e complexos em resumos claros e diretos com a ajuda da IA."
                hasBadge
                badgeText="I.A"
                badgeIcon={<Bot />}
                badgeVariant="default"
              />
              <AboutCard
                title="Estudo Divertido"
                icon={<Laugh />}
                content="Estudar com o GuIA é envolvente: gamificação, desafios e recompensas mantêm sua motivação alta."
                hasBadge
                badgeText="I.A"
                badgeIcon={<Bot />}
                badgeVariant="default"
              />
            </CardWrap>
          </div>

          {/* Por que o GuIA */}
          <div className="w-full mt-16">
            <h1 className="text-3xl lg:text-6xl font-bold leading-tight flex items-center gap-2 mb-5 pl-5">
              Por que o <span className="text-green-400 inline">GuIA</span>?
            </h1>
            <CardWrap gap="lg" className="mx-auto">
              <AboutCard
                title="Agilidade no Aprendizado"
                icon={<Rocket />}
                content="Economize tempo com conteúdos adaptados ao seu ritmo e avance mais rapidamente."
                hasBadge
                badgeText="Novo"
                badgeIcon={<Rocket />}
                badgeVariant="secondary"
              />
              <AboutCard
                title="Foco Personalizado"
                icon={<Target />}
                content="Evite perder tempo com o que você já domina. O GuIA foca no que você precisa melhorar."
                hasBadge
                badgeText="Novo"
                badgeIcon={<Target />}
                badgeVariant="secondary"
              />
              <AboutCard
                title="Cobertura Completa"
                icon={<Layers />}
                content="Estude diversas disciplinas em um só lugar com a ajuda da IA, desde o básico até o avançado."
                hasBadge
                badgeText="Novo"
                badgeIcon={<Layers />}
                badgeVariant="secondary"
              />
            </CardWrap>
          </div>

          {/* Gamificação */}
          <div className="w-full mt-16 mb-16">
            <h1 className="text-xl lg:text-6xl font-bold leading-tight flex items-center gap-2 mb-5 pl-5">
              Aprendizado como um jogo:{' '}
              <span className="text-green-400 inline">GuIA</span>
            </h1>
            <CardWrap gap="lg" className="mx-auto">
              <AboutCard
                title="Gamificação Educacional"
                icon={<Laugh />}
                content="Avance por níveis, desbloqueie conquistas e ganhe pontos enquanto aprende de forma divertida."
                hasBadge
                badgeText="Novo"
                badgeIcon={<Laugh />}
                badgeVariant="secondary"
              />
              <AboutCard
                title="Desafios e Rankings"
                icon={<Trophy />}
                content="Participe de competições, compare seu desempenho com outros alunos e suba no ranking."
                hasBadge
                badgeText="Novo"
                badgeIcon={<Trophy />}
                badgeVariant="secondary"
              />
              <AboutCard
                title="Quizzes Personalizados"
                icon={<Pencil />}
                content="Testes e quizzes são gerados com base nos seus estudos para reforçar seu aprendizado."
                hasBadge
                badgeText="Novo"
                badgeIcon={<Pencil />}
                badgeVariant="secondary"
              />
            </CardWrap>
          </div>
        </section>
      </main>
    </div>
  )
}
