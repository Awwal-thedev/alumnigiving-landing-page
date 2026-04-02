import Image from "next/image";
import Hero from '@/components/Hero'  // Hero component
import FeaturesSection from '@/components/features';

export default function Home() {
  return (
    <main>
    <Hero />

    <div className="size-full">
      <FeaturesSection />
    </div>
    
  </main>
  
  );
}
