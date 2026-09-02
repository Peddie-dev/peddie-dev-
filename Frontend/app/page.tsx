import Hero from '../Components/Hero';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

export default function Page() {
  return (
    <div className="space-y-28 py-16">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}