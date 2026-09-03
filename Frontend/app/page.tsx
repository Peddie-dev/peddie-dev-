import Hero from '../Components/Hero';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

export default function Page() {
  return (
    <div className="space-y-14 sm:space-y-16 md:space-y-20 py-6 sm:py-8">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}