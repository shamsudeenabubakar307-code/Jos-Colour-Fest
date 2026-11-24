import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Programmes from './components/Programmes.jsx'
import Schedule from './components/Schedule.jsx'
import Tickets from './components/Tickets.jsx'
import Faq from './components/Faq.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import josLogo from "./assets/jos-logo.png";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Programmes />
        <Schedule />
        <Tickets />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <header className="flex items-center gap-3 bg-white p-4 shadow">

        <img
          src={josLogo}
          alt="Jos Plateau State Logo"
          className="h-16 w-16 object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold text-green-800">
            JOS
          </h1>

          <p className="text-sm text-gray-600">
            Home of Peace and Hospitality
          </p>
        </div>

      </header>

    </div>
  );
}
