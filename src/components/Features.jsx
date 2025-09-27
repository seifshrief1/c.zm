import React from "react";
import {
  FaCalendarAlt,
  FaUtensils,
  FaBullseye,
  FaUsers,
  FaTrophy,
  FaCheckCircle,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaCalendarAlt className="h-6 w-6 text-orange-500" />,
      title: "متابعة مستمرة",
      description:
        "متابعة يومية لتقدمك مع تعديل البرنامج حسب احتياجاتك وتطور مستواك",
    },
    {
      icon: <FaUtensils className="h-6 w-6 text-orange-500" />,
      title: "نظام غذائي مخصص",
      description:
        "خطة غذائية مصممة خصيصاً لك تناسب نمط حياتك وتفضيلاتك الغذائية",
    },
    {
      icon: <FaBullseye className="h-6 w-6 text-orange-500" />,
      title: "برامج مخصصة",
      description:
        "برامج تدريبية مصممة حسب مستواك وأهدافك سواء كانت خسارة وزن أو بناء عضلات",
    },
    {
      icon: <FaUsers className="h-6 w-6 text-orange-500" />,
      title: "مجتمع داعم",
      description:
        "انضم لمجتمع من الأشخاص المتحفزين الذين يشاركونك نفس الأهداف والطموحات",
    },
    {
      icon: <FaTrophy className="h-6 w-6 text-orange-500" />,
      title: "نتائج مضمونة",
      description:
        "التزم بالبرنامج وستحصل على النتائج المطلوبة خلال الفترة المحددة",
    },
    {
      icon: <FaCheckCircle className="h-6 w-6 text-orange-500" />,
      title: "مرونة في المواعيد",
      description:
        "جدولة مرنة تناسب وقتك مع إمكانية التدريب أونلاين أو في الجيم",
    },
  ];

  return (
    <section className="py-20 px-4 text-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            مميزاتي الخاصة
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            أقدم لك خدمات شاملة ومتكاملة لضمان وصولك لأهدافك بأسرع وقت ممكن
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#232323] rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
