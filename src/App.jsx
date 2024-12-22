import "./index.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="main">
      <div className="main-test">
        <Header />
        <Carousel />
        <Footer />
      </div>
    </section>
  );
}

export default App;
