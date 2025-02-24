
import './App.css'
import Footer from './Components/Footer/Footer'
import Gdp_Olympic from './Components/Gdp_Olympic/Gdp_Olympic'
import Hero from './Components/Hero/Hero'
import HostedCountries from './Components/HostedCountries/HostedCountries'
import Navbar from './Components/Navbar/Navbar'
import Setup from './Components/Setup/Setup'



function App() {


  return (
    <>
    <div>
    <header>
    <Navbar />
    </header>
    
    
    <main className='bg-[#FFF8E6]'>
    <Hero />
    <HostedCountries />
    <Gdp_Olympic/>
   
    <Setup />
    </main>
     
      <footer>
        <Footer></Footer>
      </footer>
      </div>
    
    </>
  )
}

export default App
