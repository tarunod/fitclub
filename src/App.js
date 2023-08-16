import "./App.css";
import Hero from "./components/hero";
import Plans from "./components/plans";
import Programs from "./components/programs";
import Reasons from "./components/reasons";
import Testimonial from "./components/testimonial";
import Join from "./components/Join";
import Footer from "./components/footer";
// import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
