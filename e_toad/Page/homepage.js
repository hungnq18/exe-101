"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-black rounded-md p-1.5">
              <span className="text-white font-bold text-lg">E-toad</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="#work" className="text-gray-700 hover:text-black transition-colors">
              Work
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="#jobs" className="text-gray-700 hover:text-black transition-colors">
              Jobs
            </Link>
          </nav>

          <Button className="bg-white text-black border border-gray-200 hover:bg-gray-100">
            <span className="mr-2">Contact</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5C3 2.77614 3.22386 3 3.5 3H11.5C11.7761 3 12 2.77614 12 2.5C12 2.22386 11.7761 2 11.5 2H3.5ZM3 7.5C3 7.22386 3.22386 7 3.5 7H11.5C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8H3.5C3.22386 8 3 7.77614 3 7.5ZM3 12.5C3 12.2239 3.22386 12 3.5 12H11.5C11.7761 12 12 12.2239 12 12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-gray-500 mb-4">Marina Budarina</div>
            <h1 className="text-5xl font-bold leading-tight mb-8">
              Hey& Welcome.
              <br />
              Spline to Framer
              <br />
              tutorial here <span className="text-yellow-400">✨</span>
            </h1>

            <div className="flex gap-3 mb-12">
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span>Spline</span>
              </div>
              <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span>Framer</span>
              </div>
            </div>

            <button className="flex items-center text-gray-500 hover:text-black transition-colors">
              <ChevronDown className="mr-2" />
              <span>Scroll down</span>
            </button>
          </div>

          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 opacity-80 rounded-full blur-xl transform rotate-45"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-pink-200 opacity-70 rounded-full blur-md transform -rotate-12"></div>
            <div className="absolute inset-10 bg-gradient-to-r from-purple-200 to-pink-100 opacity-90 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* FPT University Information */}
        <div className="max-w-7xl mx-auto mt-32 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">About FPT University</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-4">
                FPT University is a leading private university in Vietnam, established in 2006 by the FPT Corporation,
                one of the largest information technology companies in the country.
              </p>
              <p className="text-gray-700 mb-4">
                The university specializes in technology education, business administration, languages, and art &
                design, with a strong focus on practical skills and industry-ready graduates.
              </p>
              <p className="text-gray-700 mb-4">
                With campuses in Hanoi, Ho Chi Minh City, Da Nang, and Can Tho, FPT University provides students with
                modern facilities and an international learning environment.
              </p>
              <div className="mt-6">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-600 mb-2">Key Strengths</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Industry-oriented curriculum</li>
                  <li>Strong partnerships with global tech companies</li>
                  <li>English as the primary language of instruction</li>
                  <li>High employment rate for graduates</li>
                  <li>International exchange programs</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">Academic Programs</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Software Engineering</li>
                  <li>Artificial Intelligence</li>
                  <li>Business Administration</li>
                  <li>Digital Marketing</li>
                  <li>Graphic Design</li>
                  <li>Japanese and Korean Language Studies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="bg-black rounded-md p-1.5 inline-block">
                <span className="text-white font-bold text-lg">E-toad</span>
              </div>
              <p className="text-gray-500 mt-2">Innovative digital solutions</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-3">About</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Consulting
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Email
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Office
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Social</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black transition-colors">
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500">
            <p>© 2024 E-toad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

