import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import basel from "../assets/5a0d68bc-f958-4378-8783-93c7e1d99c41.jpg";
import basel2 from "../assets/819e1ac1-de85-4960-ac61-0ab37958a572.jpg";
import basel3 from "../assets/df0b0d3b-7a9c-4af8-81c9-68e1c05f8879.jpg";

const SomeTransformations = () => {
  const transformations = [
    {
      id: 1,
      image1: basel,
      image2: basel2,
      image3: basel3,
      name: "باسل",
      age: 18,
    },
    {
      id: 2,
      image1: basel,
      image2: basel2,
      image3: basel3,
      name: "سارة علي",
      age: 24,
    },
    {
      id: 3,
      image1: basel,
      image2: basel2,
      image3: basel3,
      name: "محمد سعيد",
      age: 32,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-16 px-4 bg-[#232323] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">بعض التحولات المذهلة</h2>

        <Slider {...settings}>
          {transformations.map((item) => (
            <div key={item.id} className="px-3">
              <div className="bg-[#2e2e2e] rounded-xl overflow-hidden shadow-lg p-6">
                {/* صور التحول */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  <img
                    src={item.image1}
                    alt="before"
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <img
                    src={item.image2}
                    alt="progress"
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <img
                    src={item.image3}
                    alt="after"
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>

                {/* بيانات الشخص */}
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-2">العمر: {item.age}</p>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SomeTransformations;
