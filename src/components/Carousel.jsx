import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";

export default function Carousel({ contentArea }) {
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
            behavior: "auto",
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
            <motion.li
              className="card"
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ type: "spring" }}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 1 }}
              open
            >
              <motion.img
                className="carousel-img"
                src={item.url}
                alt={""}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
