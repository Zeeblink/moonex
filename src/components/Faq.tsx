import { Accordion } from "flowbite-react";

export default function Faq() {
  const faqs = [
    {
      question: "How do I get a Referral Code?",
      answer: "",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer: "",
    },
  ];

  return (
    <section className="min-h-screen p-6 sm:p-8">
      <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8 rounded-lg bg-[#0D1B28] p-6 sm:p-8 shadow-lg backdrop-blur-md">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">
          <span className="text-[#ffc107]">FAQs</span>
        </h2>

        <Accordion className="divide-y divide-gray-700 border-none">
          {faqs.map((faq, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title className="bg-transparent text-white hover:bg-[#1a3655] focus:ring-0">
                {faq.question}
              </Accordion.Title>
              <Accordion.Content className="bg-transparent text-gray-400">
                <p>{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>

      <div className="absolute h-20 w-28 top-[145rem] left-0 blur-[120px] bg-[#EDD955] rounded-full"></div>  
      <div className="absolute h-20 w-32 top-[132rem] right-0 blur-[140px] bg-[#EDD955] rounded-full"></div>  
    </section>
  );
}
