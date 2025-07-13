import gsap from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";
import NavBar from "./componets/NavBar";
import './index.css'
import Hero from "./componets/Hero";
import Cocktails from "./componets/Cocktails";

gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
  return(
   <main>
      <NavBar/>
      <Hero/>
      <Cocktails/>
      
   </main>
  )
}

export default App
