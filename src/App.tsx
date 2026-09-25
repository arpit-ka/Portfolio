import { Toaster } from "sonner";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import WhatIDo from "./Components/WhatIDo";

function App() {
  return (
    <>
      <Toaster richColors expand />
      <Navbar />
      <Hero />
      <WhatIDo />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
