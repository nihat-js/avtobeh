// pages/faq.tsx
import Layout from '@/components/Layout';
import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I list my car for sale?',
      answer: 'To list your car, click on the "Sell a Car" page, fill in the required details like car make, model, year, and upload images. Once submitted, your car will appear on the marketplace for potential buyers.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact customer support via the "Contact Us" page, where you can send us a message, or by emailing us at support@avtox.com.',
    },
    {
      question: 'Can I negotiate the price of a car?',
      answer: 'Yes, you can directly negotiate with the seller using the contact options provided on the car listing page.',
    },
    {
      question: 'Is there any fee to list a car for sale?',
      answer: 'No, it is free to list a car for sale on AvtoX. However, we may offer paid promotion options to increase visibility for your listing.',
    },
    {
      question: 'How do I edit my car listing?',
      answer: 'After posting your car, you can edit your listing by logging into your account, going to "My Listings," and selecting the "Edit" option.',
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 px-6 pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>

  );
};

export default FAQ;
