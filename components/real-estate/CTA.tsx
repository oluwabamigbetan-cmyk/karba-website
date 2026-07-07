const faqs = [
  {
    question: "Do you sell properties directly?",
    answer:
      "Our primary role is to provide professional real estate advisory and consultancy services. Where appropriate, we may introduce clients to trusted professionals while maintaining our advisory role.",
  },
  {
    question: "Can you help first-time property buyers?",
    answer:
      "Yes. We guide first-time buyers through the decision-making process, helping them understand key considerations before making a purchase.",
  },
  {
    question: "Do you guarantee investment returns?",
    answer:
      "No. We provide professional guidance to support informed decisions. Property values and investment performance depend on market conditions and other factors.",
  },
  {
    question: "Can I book a consultation before making any decision?",
    answer:
      "Absolutely. Our consultation service is designed to help you evaluate your options before committing to a property transaction.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-yellow-600 font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl shadow p-6"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}