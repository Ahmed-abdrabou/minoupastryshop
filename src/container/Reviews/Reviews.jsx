import React from "react";
import "./Reviews.css";
import { ReviewsData } from "../../constants/ReviewsData";

const delay = 4500;

const Reviews = () => {
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
          prevIndex === ReviewsData.length - 1 ||
          prevIndex > ReviewsData.length - 1
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
    <div className="app__content Reviews_section">
      <div className="Reviews_section_header">
        <h1>Minou's Friends Review</h1>
      </div>
      <div className="Reviews">
        <div
          className="ReviewsSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {ReviewsData.map((card, index) => (
            <div className="ReviewsSlide" key={index}>
              <img src={card.image} alt="ReviewsImage" />
            </div>
          ))}
        </div>
        <div className="ReviewsDots">
          {ReviewsData.map((_, idx) => (
            <div
              key={idx}
              className={`ReviewsDot${index === idx ? " active" : ""}`}
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

export default Reviews;
