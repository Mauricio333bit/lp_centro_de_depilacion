
import './App.css'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
function App() {

  return (
    <>
      <main className='overflow-hidden bg-amber-50 text-dark p-0'>
       <Hero/>
       <WhyUs/>
       <Services/>

      </main>
    </>
  )
}

export default App
