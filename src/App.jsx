import { useEffect } from "react";
import { Posts } from "./components/Posts";

const App = () => {
  
  return (
    <section id="main-section" className="flex flex-col justify-center items-center bg-black">
      <Posts />
    </section>
  )
}

export default App;