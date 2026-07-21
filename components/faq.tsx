"use client";
import React from "react";
import { Reveal } from "@/components/reveal";

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState(-1);

  const faqs = [
    {
      question: "What services does Apex Developments provide?",
      answer:
        "Apex Developments specialises in property development, residential renovations, and serviced accommodation. We transform properties into high-quality living spaces while also providing modern, fully furnished accommodation for business and leisure travellers across the UK.",
    },
    {
      question: "What is serviced accommodation?",
      answer:
        "Serviced accommodation offers fully furnished properties available for short-term stays. Our apartments and homes provide more space, privacy, and flexibility than traditional hotels, making them ideal for business travellers, contractors, families, and holiday guests.",
    },
    {
      question: "What types of renovation projects do you undertake?",
      answer:
        "We carry out a wide range of residential renovation projects, from full property refurbishments to modern interior upgrades. Every project is completed with a focus on quality workmanship, attention to detail, and long-lasting value.",
    },
    {
      question: "Do you develop residential properties?",
      answer:
        "Yes. Apex Developments specialises in residential property development, creating high-quality homes and accommodation through thoughtful design, careful planning, and exceptional construction standards.",
    },
    {
      question: "Who is your serviced accommodation suitable for?",
      answer:
        "Our serviced accommodation is ideal for business professionals, contractors, families, tourists, and anyone looking for comfortable, fully furnished short-term accommodation with the convenience of a home-away-from-home.",
    },
    {
      question: "How can I enquire about a renovation or development project?",
      answer:
        "You can contact Apex Developments through our website contact form or by email. We'll discuss your requirements, answer any questions, and provide guidance on the best approach for your project.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Reveal>
    <section
      id="faqs"
      className="mt-10 py-16 md:py-24 bg-black w-full layout-container"
    >
      <div className="flex gap-5 w-fit bg-[#F6945C1A] rounded-full items-center px-5 py-2 mx-auto">
        <h1 className="text-[#F6945C] text-sm">FAQ's</h1>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8 mt-8 font-['Playfair_Display']">
        Got Questions? We've Got Answers
      </h2>
      <p className="text-center text-sm mb-15 md:w-[40%] mx-auto text-[#777777]">
        Here are some frequently asked questions about Apex Developments.
      </p>
      <div className="flex items-center rounded-xl justify-center max-w-[80%] mx-auto">
        <div className="w-full">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div className="border border-[#F6945C] py-3 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 text-left  transition-colors"
                  >
                    <span className="text-sm text-white pr-4">
                      {faq.question}
                    </span>
                    <span className="shrink-0">
                      {openIndex === index ? (
                        <div className="size-7 rounded-full bg-black/4 flex items-center justify-center cursor-pointer">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m8.348 8.348 6.874 6.874m.001-6.874-6.875 6.874"
                              stroke="#F6945C"
                              strokeOpacity="1"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="size-7 rounded-full flex items-center justify-center cursor-pointer">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.472 8.332h9.722M8.333 3.473v9.722"
                              stroke="#F6945C"
                              strokeOpacity="1"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-50 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-5 py-4">
                      <p className="text-sm font-light text-zinc-200 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default Faq;
