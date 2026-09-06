import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Opportunity } from './components/Opportunity';
import { WhatIBring } from './components/WhatIBring';
import { WhatICanManage } from './components/WhatICanManage';
import { Ideas } from './components/Ideas';
import { NinetyDayPlan } from './components/NinetyDayPlan';
import { MeasuringProgress } from './components/MeasuringProgress';
import { Pilot } from './components/Pilot';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Opportunity />
        <WhatIBring />
        <WhatICanManage />
        <Ideas />
        <NinetyDayPlan />
        <MeasuringProgress />
        <Pilot />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
