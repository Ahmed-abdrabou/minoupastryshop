import React from "react";
import "./Slideshow.css";
import { SlideshowImages } from "../../constants/SlideshowImages";

const delay = 2500;

const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === SlideshowImages.length - 3 ||
          prevIndex > SlideshowImages.length - 3
            ? 0
            : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="app__content slideshow_section">
      <div className="slideshow_section_header">
        <h1>BestSeller</h1>
      </div>
      <div className=" slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {SlideshowImages.map((card, index) => (
            <div className="slide" key={index}>
              <img
                src={card.image}
                alt="slideshow_image"
                className="slideshow_image"
              />
              <h3 className="slideshow_image_Title">{card.title}</h3>
              <p className="slideshow_image_Price">{card.price} LE</p>
            </div>
          ))}
        </div>
        <div className="slideshowDots">
          {SlideshowImages.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
