import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';

export default function Page() {
  return (
    <div className="space-y-28 py-16">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}