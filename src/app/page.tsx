import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection/Hero"
import About from "../components/About"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
    </main>
  )
}
