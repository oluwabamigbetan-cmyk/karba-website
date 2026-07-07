const faqs = [
  {
    question: "Why should I have life insurance?",
    answer:
      "Life insurance can provide financial support to your loved ones if the unexpected happens, helping them manage future financial responsibilities.",
  },
  {
    question: "Can I plan for my children's education?",
    answer:
      "Yes. Children's education planning helps parents prepare financially for future educational expenses through disciplined planning.",
  },
  {
    question: "What is an annuity?",
    answer:
      "An annuity is a financial product designed to provide income, often during retirement, based on the selected plan.",
  },
  {
    question: "How do I know which insurance is right for me?",
    answer:
      "We assess your goals and explain suitable options so you can make informed decisions based on your circumstances.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24">
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
              className="rounded-xl border p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}