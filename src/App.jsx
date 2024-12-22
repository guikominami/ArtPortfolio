import "./index.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { useState } from "react";
import { Drawings } from "./assets/data/ImagesData";

function App() {
  const [contentArea, setContentArea] = useState(Drawings);
  function handleContentChange(menu) {
    setContentArea(menu);
  }

  console.log(contentArea);

  return (
    <section className="main">
      <div className="main-test">
        <Header onMenuClicked={handleContentChange} />
        <Carousel contentArea={contentArea} />
        <Footer />
      </div>
    </section>
  );
}

export default App;
