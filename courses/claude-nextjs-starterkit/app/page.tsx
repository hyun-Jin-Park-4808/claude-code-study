import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Code2, Palette, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const features = [
    {
      title: 'Next.js 15',
      description: '최신 Next.js App Router로 빠른 웹 개발',
      icon: Rocket,
    },
    {
      title: 'TypeScript',
      description: '타입 안전성으로 높은 품질의 코드 작성',
      icon: Code2,
    },
    {
      title: 'TailwindCSS v4',
      description: 'CSS 기반 설정으로 유연한 스타일링',
      icon: Palette,
    },
    {
      title: 'shadcn/ui',
      description: '프로덕션 레벨의 UI 컴포넌트 라이브러리',
      icon: Zap,
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline">개발자 친화적</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Next.js Starter Kit
              </h1>
              <p className="mx-auto max-w-[42rem] text-base text-muted-foreground sm:text-xl md:text-2xl">
                빠른 웹 개발을 위한 완벽한 시작 템플릿
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/dashboard">시작하기</Link>
              </Button>
              <Button variant="outline">
                문서보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge>기능</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                최신 기술 스택
              </h2>
              <p className="mx-auto max-w-[42rem] text-muted-foreground md:text-xl">
                프로덕션 준비가 완료된 모던 웹 개발 환경
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                지금 시작하세요
              </h2>
              <p className="mx-auto max-w-[42rem] text-muted-foreground md:text-xl">
                npm install로 모든 준비가 완료됩니다.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <code className="block rounded-lg bg-muted p-4 text-sm font-mono">
                npm install
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
