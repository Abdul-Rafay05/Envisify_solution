import { useState, useEffect } from "react"
import { Header, Footer, Hero, About, Service } from "./AllFilesAccess"
import { ContentProvider } from "./Components/ContextAPI/Mode"

function App() {
  const [Mode, setMode] = useState("light")
  const Dark = () => {
    setMode("dark")
  }
  const light = () => {
    setMode("light")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(Mode);
  }, [Mode])
  return (
    <ContentProvider value={{ Mode, Dark, light }}>
      <Header />
      <Hero />
      <About />
      <Service />

      {/* <Footer /> */}
    </ContentProvider>
  )
}

export default App
