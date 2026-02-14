import { useEffect, useState, useRef } from "react";

const ImageSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=1200&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?w=1200&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1698752821919-e9771f0b0bcb?w=1200&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1630608354129-6a7704150401?w=1200&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1698752822107-69f8973936e4?w=1200&auto=format&fit=crop&q=60",
  ];

  // clone first slide for smooth infinite effect
  const slides = [...images, images[0]];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleTransitionEnd = () => {
    if (current === slides.length - 1) {
      setIsTransitioning(false);
      setCurrent(0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  return (
    <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden shadow-2xl">

      {/* TRACK */}
      <div
        className={`flex h-full ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((img, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
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

      {/* Dots */}
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
