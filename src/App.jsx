import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Newpage from './components/Newpage';
import Event from './components/Event';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Newpage/>
      <Event/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  )
}

export default App