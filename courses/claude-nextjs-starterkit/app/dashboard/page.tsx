import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart3, TrendingUp, Users, Activity } from 'lucide-react'

export default function DashboardPage() {
  const stats = [
    {
      title: '총 사용자',
      value: '1,234',
      description: '지난 30일 대비 +12%',
      icon: Users,
    },
    {
      title: '활동도',
      value: '4,231',
      description: '지난 시간 동안의 활동',
      icon: Activity,
    },
    {
      title: '성장률',
      value: '24.5%',
      description: '목표 달성도',
      icon: TrendingUp,
    },
    {
      title: '분석',
      value: '573',
      description: '이번 주 이벤트',
      icon: BarChart3,
    },
  ]

  const recentActivity = [
    { id: 1, title: '새 사용자 가입', description: '사용자 John Doe 가입', time: '2시간 전' },
    { id: 2, title: '페이지 조회', description: '메인 페이지 1,234회 조회', time: '4시간 전' },
    { id: 3, title: '시스템 업데이트', description: '새 기능 배포 완료', time: '1일 전' },
    { id: 4, title: 'API 응답 시간', description: '평균 응답 시간 123ms', time: '2일 전' },
  ]

  return (
    <div className="w-full space-y-6 p-4 md:p-6">
      {/* 헤더 */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">
          웹 애플리케이션의 핵심 지표를 한눈에 확인하세요.
        </p>
      </div>

      {/* 통계 카드 그리드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 메인 콘텐츠 */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* 최근 활동 */}
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
            <CardDescription>
              최근 발생한 주요 이벤트 목록
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-0">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 빠른 링크 */}
        <Card>
          <CardHeader>
            <CardTitle>빠른 링크</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <Badge variant="secondary" className="w-full justify-center cursor-pointer">설정</Badge>
              <Badge variant="secondary" className="w-full justify-center cursor-pointer">도움말</Badge>
              <Badge variant="secondary" className="w-full justify-center cursor-pointer">문서</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
