import { Button } from "@mui/material"; // Import Material UI Button
import { ChevronDown } from "lucide-react"; // Import ChevronDown Icon
import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import ThreeDModel from "./components/threeDModel"; // Import the new component

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = () => {
    document.getElementById("fpt-university-info").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header scrolled={scrolled} />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-gray-500 mb-4">EXE101 Group-1</div>
            <h1 className="text-5xl font-bold leading-tight mb-8">
              Welcome to E-Toad
              <span className="text-yellow-400"> ✨</span>
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

            {/* ChevronDown Scroll Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={scrollToSection}
                className="flex items-center text-gray-500 hover:text-black transition-colors"
              >
                <ChevronDown className="mr-2" />
                <span>Scroll down</span>
              </button>
            </div>
          </div>

          {/* Use ThreeDModel component here */}
          <ThreeDModel />
        </div>

        {/* FPT University Information Section */}
        <div id="fpt-university-info" className="max-w-7xl mx-auto mt-32 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            About FPT University
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-4">
                FPT University is a leading private university in Vietnam,
                established in 2006 by the FPT Corporation, one of the largest
                information technology companies in the country.
              </p>
              <p className="text-gray-700 mb-4">
                The university specializes in technology education, business
                administration, languages, and art & design, with a strong focus
                on practical skills and industry-ready graduates.
              </p>
              <p className="text-gray-700 mb-4">
                With campuses in Hanoi, Ho Chi Minh City, Da Nang, and Can Tho,
                FPT University provides students with modern facilities and an
                international learning environment.
              </p>
              <div className="mt-6">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-600 mb-2">
                  Key Strengths
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Industry-oriented curriculum</li>
                  <li>Strong partnerships with global tech companies</li>
                  <li>English as the primary language of instruction</li>
                  <li>High employment rate for graduates</li>
                  <li>International exchange programs</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">
                  Academic Programs
                </h3>
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
                    <a href="#" className="hover:text-black transition-colors">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Consulting
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Office
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Social</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      LinkedIn
                    </a>
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
  );
}
