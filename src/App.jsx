import Hero from "./Hero";
import Accolades from "./Accolades";
import Clients from "./Clients";
import Offers from "./Offer";
import PersonalisedCard from "./PersonalisedCard";
import PerfectCard from "./PerfectCard";
import FAQs from "./Faqs";
import ManageFInance from "./ManageFinance";

function App() {
  return (
    <div className="flex flex-col justify-center bg-my-dark-green overflow-hidden gap-2">
      <Hero />
      <Accolades />
      <Clients />
      <Offers />
      <PersonalisedCard />
      <PerfectCard />
      <FAQs />
      <ManageFInance />
    </div>
  );
}

export default App;
