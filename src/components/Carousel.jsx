import { useRef, useEffect } from "react";
import "./Carousel.css";

export default function Carousel({ contentArea }) {
  console.log("carousel", contentArea);

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  const scrollRef = useHorizontalScroll();

  return (
    <section className="content">
      <div className="gallery-container">
        <ul ref={scrollRef}>
          {contentArea.map((item, index) => (
            <li className="card" key={index}>
              <img className="carousel-img" src={item.url} alt={""} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
