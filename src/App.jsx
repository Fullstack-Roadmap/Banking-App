import Hero from "./Hero";
import Accolades from "./Accolades";
import Clients from "./Clients";
import Offers from "./Offer";
import PersonalisedCard from "./PersonalisedCard";
import PerfectCard from "./PerfectCard";
import FAQs from "./Faqs";

function App() {
  return (
    <div className="flex flex-col justify-center bg-my-dark-green overflow-hidden">
      <Hero />
      <Accolades />
      <Clients />
      <Offers />
      <PersonalisedCard />
      <PerfectCard />
      <FAQs />
    </div>
  );
}

export default App;
