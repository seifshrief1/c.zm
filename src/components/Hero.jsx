import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="pt-24 pb-16 px-4 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <span className="inline-block bg-orange-500/20 text-orange-400 font-medium px-4 py-2 rounded-full mb-6 text-sm">
              You Not Fail Until You Stop Trying
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              اعمل <span className="text-orange-400">فورمة قوية</span> في أسرع
              وقت مع C.Ziad Magdy
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              أكثر من 5 سنوات من الخبرة في تدريب الأبطال. نحن نؤمن بأن كل شخص
              يستحق أن يشعر بالقوة والثقة في جسده.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/transformations"
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg text-lg transition"
              >
                شاهد التحولات
              </Link>
              <Link
                to="/inquiries"
                className="border border-orange-400 hover:bg-orange-500 hover:text-white text-orange-400 font-semibold py-3 px-8 rounded-xl text-lg transition"
              >
                ابدأ رحلتك الآن
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 justify-center text-2xl">
              <a
                href="https://www.instagram.com/c.ziad.magdy_?igsh=cXN0ZmlsNzVhM3l6&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#272727] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                4+
              </div>
              <div className="text-muted-foreground">سنوات خبرة</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                95%
              </div>
              <div className="text-muted-foreground">معدل النجاح</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">دعم مستمر</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
