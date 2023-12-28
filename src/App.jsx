import Hero from "./Hero";
import Accolades from "./Accolades";
import Clients from "./Clients";
import Offers from "./Offer";
import PersonalisedCard from "./PersonalisedCard";
import PerfectCard from "./PerfectCard";
import FAQs from "./Faqs";
import ManageFinance from "./ManageFinance";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";

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
      <FAQs />
      <ManageFinance />
      <Footer />
    </div>
  );
}

export default App;
