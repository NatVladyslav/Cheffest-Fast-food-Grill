import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'

function App() {
  return (
    <div className='add-wrapper'>
      <Header />
      <main>
        <Hero />
        <About/>
      </main>
      
    </div>
  )
}
export default App
