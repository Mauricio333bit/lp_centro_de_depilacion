
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import Location from './components/Location/Location'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
function App() {

  return (
    <>
      <main className='overflow-hidden bg-amber-50 text-dark p-0'>
       <Hero/>
       <WhyUs/>
       <Services/>
       <Location/>
       <Footer/>

      </main>
    </>
  )
}

export default App
