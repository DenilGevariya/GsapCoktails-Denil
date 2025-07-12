import gsap from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
  return(
    <div className="flex-center h-[100vh]">
      Denil Gevariya
    </div>
  )
}

export default App
