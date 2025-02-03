import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: "What Services Does Your Agency Offer?",
      answer:
        "Our agency provides a range of services to meet your business needs, including custom software solutions, graphic design, web development, and digital marketing.",
    },
    {
      question: "How Do You Ensure The Quality Of Your Work?",
      answer:
        "We have a rigorous quality assurance process that involves multiple testing stages and client reviews to ensure the highest standards.",
    },
    {
      question: "What If I'm Not Satisfied With The Final Result?",
      answer:
        "We offer revisions based on your feedback and ensure the project meets your expectations before completion.",
    },
    {
      question: "How Do You Ensure The Quality Of Your Work?",
      answer:
        "We have a rigorous quality assurance process that involves multiple testing stages and client reviews to ensure the highest standards.",
    },
    {
      question: "What If I'm Not Satisfied With The Final Result?",
      answer:
        "We offer revisions based on your feedback and ensure the project meets your expectations before completion.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" overflow-hidden sm:pt-[100px] pt-[30px]">
        <div className="container-fluid ">
            <div className="row justify-center" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <div className="col-md-8 mb-4">
    <div className="bg-black text-white flex items-center justify-center">
      <div className=" w-full p-4">
        <h2 className="text-white sm:text-[40px] text-[25px]  font-[cd-m] pb-5 text-center">
          Curious? Check Out the Scoop! (FAQs)
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#5E5E5E] to-[#000000] rounded-lg p-3 mb-4 transition-all border border-[#fff] w-full "
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-[cd-m] sm:text-[20px] text-[18px] text-[#C5C5C5]" >{faq.question}</h3>
              <span>
                {activeIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-orange-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-[#C5C5C5] text-[16px]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>

                </div>
            </div>
        </div>

    </section>
  );
};

export default FAQ;
