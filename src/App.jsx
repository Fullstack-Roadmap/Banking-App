import Hero from "./Hero";
import Accolades from "./Accolades";
import Clients from "./Clients";

function App() {
  return (
    <div className="flex flex-col justify-center bg-my-dark-green overflow-hidden">
      <Hero />
      <Accolades />
      <Clients />
    </div>
  );
}

export default App;
