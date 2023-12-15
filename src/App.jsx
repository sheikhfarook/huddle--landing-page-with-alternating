import "./App.css";
import Container from "./Container/container";
import Header from "./components/header/header";
import { TailwindIndicator } from "./components/tailwind/indicator";

function App() {
  return (
    <div>
      <Header />
      <Container />
      {/* <CardContectComponent /> */}
      <TailwindIndicator />
    </div>
  );
}
export default App;
