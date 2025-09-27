import React, { useState, useEffect } from "react";
import basel from "../assets/5a0d68bc-f958-4378-8783-93c7e1d99c41.jpg";
import basel2 from "../assets/819e1ac1-de85-4960-ac61-0ab37958a572.jpg";
import basel3 from "../assets/df0b0d3b-7a9c-4af8-81c9-68e1c05f8879.jpg";

const Transformations = () => {
  const transformations = [
    {
      id: 1,
      images: [basel, basel2, basel3],
      name: "باسل",
      age: 18,
      desc: "خس 15 كيلو في 3 شهور مع برنامج مخصص.",
    },
    {
      id: 2,
      images: [basel2, basel3, basel],
      name: "سارة علي",
      age: 25,
      desc: "بنت جسم قوي ومتناسق خلال 6 شهور.",
    },
    {
      id: 3,
      images: [basel3, basel, basel2],
      name: "محمود يوسف",
      age: 32,
      desc: "قدر يزيد عضل ويغير شكله تماماً.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]); // الصور اللي هتتعرض فالمودال
  const [currentIndex, setCurrentIndex] = useState(0);

  // افتح المودال مع مصفوفة الصور اللي جات من الكارد
  const openModal = (images, startIndex = 0) => {
    setActiveImages(images);
    setCurrentIndex(startIndex);
    setIsOpen(true);
    // منع الـ scroll الخلفي
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImages([]);
    setCurrentIndex(0);
    document.body.style.overflow = "";
  };

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + activeImages.length) % activeImages.length);
  const next = () => setCurrentIndex((i) => (i + 1) % activeImages.length);

  // التعامل مع keyboard (Esc + arrows)
  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, activeImages.length]);

  return (
    <section className="py-20 px-4 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          جميع التحولات
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((t) => (
            <div
              key={t.id}
              className="bg-[#2a2a2a] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openModal(t.images, 0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") openModal(t.images, 0);
              }}
            >
              {/* صور العميل */}
              <div className="grid grid-cols-3">
                {t.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${t.name} صورة ${index + 1}`}
                    className="w-full h-56 object-cover"
                  />
                ))}
              </div>

              {/* بيانات العميل */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  {t.name} ({t.age} سنة)
                </h3>
                <p className="text-gray-300 text-sm">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* modal content */}
          <div className="relative max-w-4xl w-full mx-auto">
            {/* close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 left-3 md:top-4 md:left-4 z-20 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
              aria-label="Close"
            >
              ✕
            </button>

            {/* image area */}
            <div className="bg-[#1f1f1f] rounded-lg overflow-hidden shadow-xl">
              <div className="relative">
                <img
                  src={activeImages[currentIndex]}
                  alt={`image ${currentIndex + 1}`}
                  className="w-full max-h-[70vh] object-contain bg-black"
                />

                {/* Prev / Next buttons */}
                {activeImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                      className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3"
                      aria-label="Previous"
                    >
                      ‹
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3"
                      aria-label="Next"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* thumbnails + info */}
              <div className="p-4 flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex gap-2 overflow-x-auto md:overflow-visible">
                  {activeImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                        idx === currentIndex
                          ? "border-orange-400"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`thumb ${idx + 1}`}
                        className="w-20 h-14 object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* caption / navigation on small screens */}
                <div className="flex-1 text-right">
                  <p className="text-sm text-gray-300">
                    الصورة {currentIndex + 1} من {activeImages.length}
                  </p>
                  <div className="mt-2 md:hidden flex gap-3 justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                      className="px-3 py-2 bg-gray-800 rounded-md"
                    >
                      السابق
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      className="px-3 py-2 bg-orange-500 rounded-md"
                    >
                      التالي
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Transformations;
