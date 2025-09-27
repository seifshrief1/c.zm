import React, { useState } from "react";

const Inquiries = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("تم إرسال استفسارك بنجاح ✅");
    setFormData({ name: "", message: "" });
  };

  return (
    <section className="py-16 px-4 text-white">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">ارسال استفسار</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#2e2e2e] p-6 rounded-xl shadow-lg space-y-4"
        >
          {/* الاسم */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              الاسم
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#3a3a3a] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="اكتب اسمك هنا"
            />
          </div>

          {/* الرسالة */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              الرسالة
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-[#3a3a3a] text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="اكتب رسالتك هنا..."
            ></textarea>
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-lg transition duration-300"
          >
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
};

export default Inquiries;
