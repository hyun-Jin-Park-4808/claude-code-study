# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 15 기반의 모던 웹 애플리케이션 Starter Kit입니다. 빠른 개발 시작을 위한 모든 필수 기술 스택이 사전 설정되어 있습니다.

## 개발 환경 설정 및 명령어

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 프로젝트 구조 및 아키텍처

### 핵심 디렉토리

```
/app          - Next.js App Router 페이지 및 레이아웃
  /layout.tsx - 루트 레이아웃 (Header, Footer 포함)
  /page.tsx   - 홈페이지
  /dashboard  - 대시보드 페이지
  /globals.css - 전역 스타일

/components   - React 컴포넌트
  /ui         - shadcn/ui 컴포넌트 (Button, Card, Badge, Separator)
  /layout     - 레이아웃 컴포넌트 (Header, Footer)

/lib          - 유틸리티 함수
  /utils.ts   - cn() 함수 등 공용 유틸리티

/public       - 정적 에셋
```

### 페이지 라우팅

- `/` - 홈페이지 (프로젝트 소개)
- `/dashboard` - 대시보드 페이지 (통계 및 활동 조회)

## 기술 스택 및 주요 라이브러리

| 레이어 | 기술 | 버전 | 용도 |
|------|------|------|------|
| **프레임워크** | Next.js | ^15 | App Router 기반의 SSR/SSG |
| **UI 라이브러리** | React | ^19 | UI 컴포넌트 및 상태 관리 |
| **타입 언어** | TypeScript | ^5 | 정적 타입 체크 |
| **CSS 프레임워크** | Tailwind CSS | ^4.2 | 유틸리티 기반 스타일링 |
| **UI 컴포넌트** | shadcn/ui | - | 프로덕션 레벨의 리액트 컴포넌트 |
| **유틸리티** | clsx, tailwind-merge | ^2.x, ^2.x | 클래스명 병합 및 최적화 |
| **아이콘** | lucide-react | ^0.408.0 | SVG 아이콘 라이브러리 |
| **변수 스타일** | class-variance-authority | ^0.7.0 | CSS 변수 기반 컴포넌트 스타일링 |
| **UI 원시요소** | Radix UI | ^1.x | 접근성 높은 UI 원시 컴포넌트 |
| **린트** | ESLint | ^9 | 코드 품질 검사 |

## 코드 조직 및 패턴

### 컴포넌트 구조

**shadcn/ui 컴포넌트 (components/ui)**
- `class-variance-authority`를 사용한 변수 기반 스타일링
- `clsx`와 `tailwind-merge`로 조건부 클래스 병합
- 모든 UI 컴포넌트는 `'use client'` 지시어 포함
- Radix UI 원시요소를 기반으로 구현

예시:
```tsx
// components/ui/button.tsx
'use client'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva('...', {
  variants: {
    variant: { default: '...', outline: '...' },
    size: { default: 'h-10 px-4', sm: 'h-9 px-3' }
  }
})
```

**레이아웃 컴포넌트 (components/layout)**
- Header: 네비게이션 및 GitHub 링크
- Footer: 페이지 하단 정보

### 페이지 컴포넌트 (app/)**

- 서버 컴포넌트 우선
- `'use client'` 지시어는 필요한 경우만 사용
- 대시보드 페이지는 통계 데이터 (stats, recentActivity)를 배열 형태로 관리

### 스타일링

**Tailwind CSS 설정**
- `postcss.config.mjs`에서 `@tailwindcss/postcss` 플러그인 사용
- `app/globals.css`에서 전역 스타일 정의
- CSS 변수 기반 테마 (zinc base color)
- components.json에서 `cssVariables: true` 설정

**클래스명 병합**
```tsx
import { cn } from '@/lib/utils'
<div className={cn('base-class', condition && 'conditional-class')} />
```

## shadcn/ui 컴포넌트 추가 방법

현재 설치된 컴포넌트: Button, Card, Badge, Separator

새로운 컴포넌트 추가:
```bash
# shadcn/ui CLI로 컴포넌트 추가 (components.json 설정 기반)
npx shadcn-ui@latest add <component-name>
```

컴포넌트를 components/ui에 추가한 후 필요한 페이지에서 import하여 사용합니다.

## TypeScript 설정

- `target: ES2020` - 최신 JavaScript 기능 사용
- `strict: true` - 엄격한 타입 검사
- `moduleResolution: node` - Node.js 모듈 해석
- `@/*` 경로 별칭 - 루트 디렉토리 기준 절대 경로 import

import 시 경로:
```tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

## ESLint 및 코드 품질

```bash
# 린트 검사
npm run lint

# 자동 수정 (ESLint에서 지원하는 경우)
npm run lint -- --fix
```

ESLint는 Next.js 공식 설정(`eslint-config-next`)을 사용하여 코드 품질을 관리합니다.

## 개발 워크플로우

### 새 페이지 추가

1. `app/[new-page]/page.tsx` 파일 생성
2. `app/layout.tsx`에서 헤더 네비게이션에 링크 추가
3. 필요한 컴포넌트는 `components/` 하위에 생성

### 새 컴포넌트 추가

1. **shadcn/ui 컴포넌트**: `npx shadcn-ui@latest add <name>` 후 import
2. **커스텀 컴포넌트**: `components/` 하위에 생성 (필요시 `'use client'` 지시어 추가)
3. `@/components` 경로 별칭으로 import

### 스타일 수정

- Tailwind 유틸리티 클래스 직접 사용
- 컴포넌트의 `variants` 수정 시 `class-variance-authority` 문법 사용
- 전역 스타일은 `app/globals.css`에서 관리

## 프로덕션 배포

```bash
# 빌드 (최적화된 프로덕션 번들 생성)
npm run build

# 로컬에서 프로덕션 서버 테스트
npm start
```

Next.js는 자동으로 코드 분할, 이미지 최적화, 정적 생성 등을 수행합니다.

## 주의사항

- **린트 검사**: 커밋 전 `npm run lint`로 코드 품질 확인
- **서버/클라이언트 컴포넌트**: 기본은 서버 컴포넌트, 상호작용이 필요할 때만 `'use client'` 사용
- **경로 별칭**: `@/`로 시작하는 절대 경로 사용으로 가독성 향상
- **타입 안전성**: TypeScript strict 모드로 타입 에러 사전 방지
