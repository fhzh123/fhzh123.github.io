import Image from "next/image"
import Link from "next/link"
import { Github, Mail, FileText, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-teal-50">
      {/* 상단 메뉴바 */}
      <header className="sticky top-0 z-10 w-full border-b bg-teal-50/95 backdrop-blur supports-[backdrop-filter]:bg-teal-50/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">홍길동</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#main" className="text-sm font-medium transition-colors hover:text-teal-700">
              Main
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-teal-700">
              Projects
            </Link>
            <Link href="#research" className="text-sm font-medium transition-colors hover:text-teal-700">
              Research
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-teal-700">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="border-teal-200 hover:bg-teal-100">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon" className="border-teal-200 hover:bg-teal-100">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="border-teal-200 hover:bg-teal-100">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="outline" size="icon" className="border-teal-200 hover:bg-teal-100">
              <FileText className="h-4 w-4" />
              <span className="sr-only">이력서</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 메인 섹션 - 중앙 사진과 간략한 소개 */}
        <section id="main" className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* 프로필 사진 */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-teal-200">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="프로필 사진"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* 간략한 소개 */}
            <div className="max-w-md text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                안녕하세요, <br />
                <span className="text-teal-600">홍길동</span>입니다
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                프론트엔드 개발자로서 사용자 경험을 중심으로 한 웹 애플리케이션을 개발합니다. React, TypeScript,
                Next.js를 주로 사용하며 창의적인 문제 해결을 즐깁니다.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button className="bg-teal-600 hover:bg-teal-700">프로젝트 보기</Button>
                <Button variant="outline" className="border-teal-200 hover:bg-teal-100">
                  이력서 다운로드
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 프로젝트 섹션 */}
        <section id="projects" className="bg-white py-12 md:py-24">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-teal-700">Projects</h2>

            {/* Main Projects */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-teal-600">Main Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="border border-teal-100 rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video relative bg-teal-50">
                      <Image
                        src={`/placeholder.svg?height=300&width=500&text=Main+Project+${i}`}
                        alt={`메인 프로젝트 ${i}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 text-teal-800">메인 프로젝트 {i}</h3>
                      <p className="text-gray-600 mb-4">
                        이 프로젝트는 React와 TypeScript를 사용하여 개발한 웹 애플리케이션입니다.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-teal-200 hover:bg-teal-100">
                          상세보기
                        </Button>
                        <Button variant="outline" size="sm" className="border-teal-200 hover:bg-teal-100">
                          GitHub
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry-academia Projects */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-teal-600">
                Industry-academia Project
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="border border-teal-100 rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video relative bg-teal-50">
                      <Image
                        src={`/placeholder.svg?height=300&width=500&text=Industry+Project+${i}`}
                        alt={`산학협력 프로젝트 ${i}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 text-teal-800">산학협력 프로젝트 {i}</h3>
                      <p className="text-gray-600 mb-4">이 프로젝트는 기업과 협력하여 개발한 솔루션입니다.</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-teal-200 hover:bg-teal-100">
                          상세보기
                        </Button>
                        <Button variant="outline" size="sm" className="border-teal-200 hover:bg-teal-100">
                          관련 자료
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 연구 섹션 */}
        <section id="research" className="bg-teal-50 py-12 md:py-24">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-teal-700">Research</h2>

            {/* International Publications */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-teal-600">
                International Publications
              </h3>
              <div className="max-w-4xl mx-auto space-y-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-lg border border-teal-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-lg mb-2 text-teal-800">
                      A Novel Approach to Web Development with React and TypeScript
                    </h4>
                    <p className="text-sm text-gray-500 mb-3">
                      <span className="font-medium">Authors:</span> Hong, G.D., Kim, J.S., Lee, M.H.
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      <span className="font-medium">Journal:</span> International Journal of Web Technologies,{" "}
                      {2020 + i}
                    </p>
                    <p className="text-gray-600 mb-4">
                      This paper presents a novel approach to developing web applications using React and TypeScript,
                      focusing on performance optimization and user experience.
                    </p>
                    <Button variant="outline" size="sm" className="border-teal-200 hover:bg-teal-100">
                      논문 보기
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Domestic Publications */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-teal-600">
                Domestic Publications
              </h3>
              <div className="max-w-4xl mx-auto space-y-6">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-lg border border-teal-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-lg mb-2 text-teal-800">
                      웹 개발에서의 사용자 경험 최적화 방법론 연구
                    </h4>
                    <p className="text-sm text-gray-500 mb-3">
                      <span className="font-medium">저자:</span> 홍길동, 김철수, 이영희
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      <span className="font-medium">학술지:</span> 한국 웹 기술 학회지, {2021 + i}
                    </p>
                    <p className="text-gray-600 mb-4">
                      본 논문은 웹 애플리케이션 개발에서 사용자 경험을 최적화하기 위한 방법론을 제시하고, 실제 사례를
                      통해 그 효과를 검증합니다.
                    </p>
                    <Button variant="outline" size="sm" className="border-teal-200 hover:bg-teal-100">
                      논문 보기
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section id="contact" className="bg-white py-12 md:py-24">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-teal-700">Contact</h2>
            <div className="max-w-md mx-auto text-center">
              <p className="text-lg mb-6 text-gray-600">
                프로젝트 협업이나 연구 관련 문의는 아래 연락처로 부탁드립니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">email@example.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Github className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">github.com/username</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Linkedin className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">linkedin.com/in/username</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-teal-100 py-6 bg-teal-50">
        <div className="container flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-gray-500">© 2024 홍길동. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
