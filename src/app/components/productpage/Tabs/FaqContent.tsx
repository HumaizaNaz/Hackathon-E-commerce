import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app//ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: "What is the fabric of the dress?",
    answer:
      "This dress is made from high-quality fabric, such as cotton, linen, or a soft polyester blend, perfect for both comfort and style.",
  },
  {
    question: "How should I care for the dress?",
    answer:
      "We recommend gentle machine washing or hand washing in cold water, followed by air drying. Iron on low heat if needed to maintain its pristine appearance.",
  },
  {
    question: "What kind of print or embroidery does the dress feature?",
    answer:
      "This dress showcases intricate embroidery or a vibrant print made with long-lasting ink or thread that will not fade easily.",
  },
  {
    question: "Is this dress suitable for all body types?",
    answer:
      "Yes, this dress is designed to flatter all body shapes, with a variety of sizes available to ensure a comfortable and stylish fit.",
  },
  {
    question: "What are the available shipping methods and costs?",
    answer:
      "We offer several shipping options, including standard and expedited shipping. Shipping costs will vary based on location and delivery speed.",
  },
  {
    question: "What is the return policy for this dress?",
    answer:
      "You can return the dress within 30 days of purchase, provided it is in original condition. Refunds or exchanges will be processed as per our return policy.",
  },
];

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Frequently Asked Questions About This Dress
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;
