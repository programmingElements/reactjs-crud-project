import { Outlet } from "react-router";

const App = () => {
  return (
    <section id="main-section" className="flex flex-col  items-center bg-slate-300 h-screen">
     <Outlet />
    </section>
  )
}

export default App;