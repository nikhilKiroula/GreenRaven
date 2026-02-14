import { useEffect, useState, useRef } from "react";

const ImageSlider = () => {
  let img1 =
    "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=1200&auto=format&fit=crop&q=60";
  let img2 =
    "https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?w=1200&auto=format&fit=crop&q=60";
  let img3 =
    "https://images.unsplash.com/photo-1698752821919-e9771f0b0bcb?w=1200&auto=format&fit=crop&q=60";
  let img4 =
    "https://images.unsplash.com/photo-1630608354129-6a7704150401?w=1200&auto=format&fit=crop&q=60";
  let img5 =
    "https://images.unsplash.com/photo-1698752822107-69f8973936e4?w=1200&auto=format&fit=crop&q=60";

  const images = [img2, img5, img1, img3, img4];
  const slides = [...images, images[0]];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [current]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (current === slides.length - 1) {
      setIsTransitioning(false);
      setCurrent(0);
    }
  };

  return (
    <div className="relative  w-full h-[500px] lg:h-[700px] overflow-hidden  shadow-2xl">

      {/* Slider Track */}
      <div
        className={`flex h-full ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((img, index) => (
          <div
            key={index}
            className="h-full flex-shrink-0 relative"
            style={{ width: `${100 / slides.length}%` }}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Caption */}
            <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl border border-white/30">
              <h3 className="text-white text-xl font-semibold">
                Sustainable Energy Solutions
              </h3>
              <p className="text-gray-200 text-sm mt-1">
                Delivering innovation with reliability.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 right-6 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              current % images.length === i
                ? "w-6 bg-green-500"
                : "w-2 bg-white/60"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
