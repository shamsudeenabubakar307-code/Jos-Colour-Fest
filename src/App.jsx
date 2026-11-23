import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Programmes from './components/Programmes.jsx'
import Schedule from './components/Schedule.jsx'
import Tickets from './components/Tickets.jsx'
import Faq from './components/Faq.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

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
