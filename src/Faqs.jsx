import { useState } from "react";
import PropTypes from "prop-types";

const FAQs = () => {
  const [openFAQIdx, setOpenFAQIndex] = useState(null);

  const faqList = [
    {
      question: "What credit score do I need to apply for a credit card?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "How can I apply for a credit card online?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "Are there any annual fees associated with the credit card?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question:
        "How long does it take to receive the credit card once approved?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "How can I check my credit card balance and transactions?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "What should I do if my credit card is lost or stolen?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "Is my credit card information secure?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
  ];
  return (
    <div className="flex flex-col justify-center text-white px-[2rem] ipad:px-[4rem] md:px-[10rem] py-[3rem]">
      <h1 className="text-2xl md:text-3xl font-semibold text-center md:pb-[1rem]">
        FAQs
      </h1>
      {faqList.map((faq, index) => (
        <FAQItem
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
          currentIdx={openFAQIdx}
          onTap={() => setOpenFAQIndex(index === openFAQIdx ? null : index)}
        />
      ))}
    </div>
  );
};

const FAQItem = ({ index, question, answer, onTap, currentIdx }) => {
  return (
    <div key={index}>
      <div
        onClick={onTap}
        className="flex justify-between items-start pt-[1.5rem]"
      >
        <h1 className="text-[1rem] md:text-lg font-medium pr-[0.5rem]">
          {question}
        </h1>
        <button className="text-[1.2rem]">
          {currentIdx === index ? "-" : "+"}
        </button>
      </div>
      {currentIdx === index && (
        <p className="text-[0.7rem] md:text-[0.75rem] text-gray-400 font-light pt-[0.3rem]">
          {answer}
        </p>
      )}
      <div className="w-full border-b border-1.5 pt-[0.8rem] border-gray-600"></div>
    </div>
  );
};

FAQItem.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onTap: PropTypes.func.isRequired,
  currentIdx: PropTypes.any.isRequired,
};

export default FAQs;
