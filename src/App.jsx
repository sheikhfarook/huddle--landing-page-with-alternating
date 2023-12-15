import "./App.css";
import Container from "./Container/container";
import ContactDetails from "./components/footer/contactdetails";
import OfferingCard from "./components/footer/offering-card";
import Header from "./components/header/header";
import { TailwindIndicator } from "./components/tailwind/indicator";

function App() {
  return (
    <div>
      <Header />
      <Container />
      <OfferingCard />
      <ContactDetails />
      <TailwindIndicator />
    </div>
  );
}
export default App;
