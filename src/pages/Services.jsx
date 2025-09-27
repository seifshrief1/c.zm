import React from "react";
import {
  FaCalendarAlt,
  FaUtensils,
  FaBullseye,
  FaUsers,
  FaTrophy,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCalendarAlt className="w-7 h-7 text-orange-400" />,
      title: "متابعة مستمرة",
      short: "دعم يومي وتعديل دائم للبرنامج حسب التقدم.",
      details: [
        "متابعـة أسبوعية بالصور والقياسات لتقييم التقدّم.",
        "تعديلات دورية في التمرين والغذاء بناءً على استجابتك.",
        "تواصل سريع (واتساب/تليجرام) للأسئلة اليومية أو لتصحيح الأداء.",
        "فيديوهات تصحيح الحركة عند الحاجة (Form checks).",
      ],
    },
    {
      id: 2,
      icon: <FaUtensils className="w-7 h-7 text-orange-400" />,
      title: "نظام غذائي مخصص",
      short: "خطة أكل عملية تناسب روتينك وتساعدك توصل لهدفك.",
      details: [
        "تحديد سعرات مكافئة لهدفك (نقص/زيادة/استقرار) مع توزيع ماكرونتس مناسب.",
        "قائمة وجبات يومية مع بدائل لو عندك حساسية أو أكل مفضل.",
        "نصائح للتسوق والتحضيرات الأسبوعية (Meal prep) لتسهيل الالتزام.",
        "استراتيجيات لإدخال وجبات حرّة (cheat meals) بدون هدم التقدّم.",
      ],
    },
    {
      id: 3,
      icon: <FaBullseye className="w-7 h-7 text-orange-400" />,
      title: "برامج تدريبية مخصصة",
      short: "برامج مبنية على مستواك، معدّلة حسب المعدات والأهداف.",
      details: [
        "تصميم برنامج حسب هدفك: بناء عضلات / خسارة دهون / تحسين قوة.",
        "توزيع الجلسات (Split/Full body) مع تدرُّج حمولة منهجي (progressive overload).",
        "شرح مفصّل لكل تمرين (تكرارات، مجموعات، فترات راحة) وفيديوهات توضيحية عند الحاجة.",
        "بدائل للتمارين في حالة وجود قيود أو نقص أدوات (Home / Gym options).",
      ],
    },
    {
      id: 4,
      icon: <FaUsers className="w-7 h-7 text-orange-400" />,
      title: "مجتمع داعم",
      short: "مجموعة متحفزة تخلق بيئة استمرار وتحفيز يومي.",
      details: [
        "مجموعة خاصة للتشجيع، مشاركة النتائج، ونصائح عملية من الأعضاء.",
        "تحديات شهرية ومسابقات بسيطة لرفع الحماس والالتزام.",
        "جلسات Q&A جماعية للتعامل مع المشكلات الشائعة ومشاركة الخبرات.",
      ],
    },
    {
      id: 5,
      icon: <FaTrophy className="w-7 h-7 text-orange-400" />,
      title: "نتائج ملموسة مع التزام",
      short: "خطة عملية واقعية تضمن تقدّم ثابت عند الالتزام.",
      details: [
        "نتائج ملموسة تظهر عادةً مع الالتزام خلال 4–12 أسبوع حسب الحالة والهدف.",
        "متابعة مستمرة وتقارير تقدم لتعديل المسار لو احتاج الأمر.",
        "تركيز على عادات تدوم (sleep, nutrition, consistency) مش حلول مؤقتة.",
      ],
    },
    {
      id: 6,
      icon: <FaCheckCircle className="w-7 h-7 text-orange-400" />,
      title: "مرونة في المواعيد والتنسيق",
      short: "تدريب أونلاين أو في الجيم مع مرونة في الجدولة.",
      details: [
        "حجوزات مرنة وإمكانية تعديل المواعيد مع إشعار مسبق.",
        "جلسات أونلاين مناسبة للمسافرين أو من يفضّل التدريب من البيت.",
        "خطة بديلة في حالة انقطاع مؤقت (سفر/عمل) للحفاظ على الاستمرارية.",
      ],
    },
  ];

  return (
    <section dir="rtl" className="py-20 px-4 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          خدماتي بالتفصيل
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-[#2a2a2a] p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#1f1f1f] p-3 rounded-lg">
                  {s.icon}
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                  <p className="text-gray-300 mb-3">{s.short}</p>

                  <ul className="text-sm text-gray-400 space-y-2">
                    {s.details.map((d, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="mt-1 inline-block w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
