import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import ValueProps from '@/components/ValueProps';
import Guide from '@/components/Guide';
import Process from '@/components/Process';
import Explanatory from '@/components/Explanatory';
import Packages from '@/components/Packages';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900 text-navy-50 selection:bg-cyan-500 selection:text-navy-950">
      <Hero />
      <Problem />
      <ValueProps />
      <Guide />
      <Process />
      <Explanatory />
      <Packages />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
