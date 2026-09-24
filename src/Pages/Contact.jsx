import SEO from "../Components/SEO";
import { useState } from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const faqs = [
    {
      question: "Do you only work with certain industries?",
      answer:
        "No. We work with businesses across different industries, including real estate, construction, home services, technology, professional services, and more. We take the time to understand your market, audience, and business goals before creating a strategy.",
    },
    {
      question: "What's the minimum budget?",
      answer:
        "Every business has different goals and requirements, so there isn't a one-size-fits-all budget. After understanding your business and objectives, we'll recommend a suitable approach based on the scope of work and expected outcomes.",
    },
    {
      question: "Can I just hire you for one service?",
      answer:
        "Absolutely. You can work with us for a specific service such as branding, SEO, paid advertising, social media, or content marketing. If needed, we can also combine multiple services into one complete growth strategy.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "The timeline depends on the service, industry, competition, and your current marketing setup. Some campaigns can generate early results within weeks, while organic strategies such as SEO and content marketing generally require more time to build momentum.",
    },
    {
      question: "Do you create a strategy before starting?",
      answer:
        "Yes. We first understand your business, target audience, competitors, and current marketing efforts. Based on that information, we create a strategy that aligns with your goals before moving into execution.",
    },
    {
      question: "Can you work with our existing marketing team?",
      answer:
        "Yes. We can work alongside your existing team and support specific areas where you need additional expertise, resources, or strategic direction.",
    },
    {
      question: "How do we get started?",
      answer:
        "Simply get in touch with us through our contact form or email. We'll have an initial conversation about your business, understand your goals, and discuss the next steps.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setStatusMessage({ type: 'success', text: result.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage({ type: 'error', text: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-surface-muted px-5 py-10 text-text-main md:px-8 lg:px-10">
      <SEO title="Contact" description="Get in touch with us." />


      <div className="mx-auto w-full max-w-[1250px]">

        {/* =========================
            CONTACT SECTION
        ========================== */}
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="w-full pt-2">

            {/* Heading */}
            <h1 className="font-sans text-[52px] font-medium leading-[0.95] tracking-[-2px] text-text-main sm:text-[58px] md:text-[64px]">
              Let's Talk
              <br />
              Growth
            </h1>

            {/* Description */}
            <p className="mt-8 w-full max-w-[430px] font-sans text-[14px] leading-6 text-text-main">
              Whether you're looking to boost conversions, cut CAC, or launch
              something new—were here to help.
            </p>

            {/* Information */}
            <div className="mt-9 w-full max-w-[450px]">

              {/* Phone */}
              <div className="border-t border-border py-4">
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[1px]">
                  Phone
                </p>

                <p className="mt-1 font-sans text-[12px] text-[#444]">
                  +1 (555) 123-4567
                </p>
              </div>

              {/* Email */}
              <div className="border-t border-border py-4">
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[1px]">
                  Email
                </p>

                <p className="mt-1 font-sans text-[12px] text-[#444]">
                  hello@growth.com
                </p>
              </div>

              {/* Office Hours */}
              <div className="border-t border-border py-4">
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[1px]">
                  Office Hours
                </p>

                <p className="mt-1 font-sans text-[12px] text-[#444]">
                  Monday - Friday, 9:00 AM - 6:00 PM
                </p>
              </div>

              {/* Visit Us */}
              <div className="border-t border-border py-4">
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[1px]">
                  Visit Us
                </p>

                <p className="mt-1 w-full max-w-[280px] font-sans text-[12px] leading-5 text-[#444]">
                  123 Growth Marketing Services
                  <br />
                  123 Growth Avenue, Suite 400
                  <br />
                  New York, NY 10001
                </p>
              </div>

              {/* Social */}
              <div className="border-y border-border py-4">
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[1px]">
                  Connect With Us
                </p>

                <div className="mt-3 flex gap-3">
                  <a
                    href="#" onClick={(e) => { e.preventDefault(); alert("Redirecting to social profile!"); }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-brand font-sans text-[15px] transition hover:bg-brand hover:text-surface"
                  >
                    f
                  </a>

                  <a
                    href="#" onClick={(e) => { e.preventDefault(); alert("Redirecting to social profile!"); }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-brand font-sans text-[15px] transition hover:bg-brand hover:text-surface"
                  >
                    ◎
                  </a>

                  <a
                    href="#" onClick={(e) => { e.preventDefault(); alert("Redirecting to social profile!"); }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-brand font-sans text-[15px] transition hover:bg-brand hover:text-surface"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              CONTACT FORM
          ========================== */}
          <div className="w-full border border-brand bg-surface p-6 sm:p-8 lg:p-10">

            <h2 className="font-sans text-[34px] font-medium leading-tight tracking-[-1px] text-text-main sm:text-[38px] md:text-[42px]">
              Send Us a Message
            </h2>

            <p className="mt-4 w-full max-w-[430px] font-sans text-[13px] leading-5 text-[#444]">
              Have a question or need more information? Fill out the form
              below, and we'll get back to you as soon as possible.
            </p>

            <form className="mt-8 w-full" onSubmit={handleContactSubmit}>

              {/* Name */}
              <div className="mb-5 w-full">
                <label className="mb-2 block font-sans text-[12px] font-semibold uppercase tracking-[1px]">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className="w-full border-b border-[#777] bg-transparent px-0 py-3 font-sans text-[14px] text-[#111] outline-none placeholder:text-[#888] focus:border-[#111]"
                />
              </div>

              {/* Email */}
              <div className="mb-5 w-full">
                <label className="mb-2 block font-sans text-[12px] font-semibold uppercase tracking-[1px]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Email Address"
                  className="w-full border-b border-[#777] bg-transparent px-0 py-3 font-sans text-[14px] text-[#111] outline-none placeholder:text-[#888] focus:border-[#111]"
                />
              </div>

              {/* Message */}
              <div className="mb-7 w-full">
                <label className="mb-2 block font-sans text-[12px] font-semibold uppercase tracking-[1px]">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full resize-none border-b border-[#777] bg-transparent px-0 py-3 font-sans text-[14px] text-[#111] outline-none placeholder:text-[#888] focus:border-[#111]"
                />
              </div>

              {statusMessage && (
                <p className={`mb-4 font-sans text-[13px] ${statusMessage.type === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                  {statusMessage.text}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer border border-brand bg-brand py-3.5 font-sans text-[13px] font-semibold uppercase tracking-[1px] text-surface transition-all duration-300 hover:bg-surface hover:text-text-main disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

            </form>
          </div>
        </div>

        {/* =========================
            FAQ SECTION
        ========================== */}
        <div className="mt-24 w-full">

          {/* FAQ Heading */}
          <h2 className="text-center font-sans text-[32px] font-medium tracking-[-1px] text-text-main sm:text-[48px] md:text-[42px]">
            FAQs
          </h2>

          <p className="mx-auto mt-3 w-full max-w-[550px] text-center font-sans text-[12px] leading-5 text-[#444]">
            How We Helped a Local Home Service Brand Double Their Bookings in
            60 Days
          </p>

          {/* FAQ Items */}
          <div className="mx-auto mt-10 w-full max-w-[900px]">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-t border-border last:border-b"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left"
                >
                  <span className="font-sans text-[14px] font-semibold text-text-main">
                    {faq.question}
                  </span>

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center font-sans text-[18px] font-normal">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="w-full pb-5 pr-10">
                    <p className="font-sans text-[13px] leading-6 text-text-muted">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;