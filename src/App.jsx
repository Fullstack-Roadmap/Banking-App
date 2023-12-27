import Hero from "./Hero";
import Accolades from "./Accolades";
import Clients from "./Clients";
import Offers from "./Offer";
import PersonalisedCard from "./PersonalisedCard";
import PerfectCard from "./PerfectCard";

import ReviewSection from "./ReviewSection";

function App() {
  return (
    <div className="flex flex-col justify-center bg-my-dark-green overflow-hidden gap-10">
      <Hero />
      <Accolades />
      <Clients />
      <Offers />
      <PersonalisedCard />
      <PerfectCard />

      <ReviewSection />
      
    </div>
  );
}

export default App;
