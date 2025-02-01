import Arrival from "@/components/Arrival";
import CategoryDisplay from "@/components/Dress";

import HeroSection from "@/components/HeroSection";
import Selling from "@/components/Selling";
import Slider from "@/components/Slider";


export default function Home() {
  return (
   <main  className="overflow-hidden">
   <HeroSection/>
   <Arrival/>
   <Selling/>
  <CategoryDisplay/>
   <Slider/>
   </main>
  );
}
