import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import SEO from "../Components/SEO";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Strategic Marketing",
    message: "",
    allow_publish: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const servicesList = [
    "Strategic Marketing",
    "Branding",
    "Advertising",
    "Social Media",
    "Event Management",
    "Public Relations (PR)",
    "Consultation Services",
    "Full Growth Engagement / Other",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/feedback.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.status !== "error") {
        setStatusMessage({
          type: "success",
          text: data.message || "Thank you! Your feedback has been received.",
        });
        setFormData({
          name: "",
          email: "",
          service: "Strategic Marketing",
          message: "",
          allow_publish: true,
        });
      } else {
        setStatusMessage({
          type: "error",
          text: data.message || "Unable to send your feedback. Please try again.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error. Please try again or email info@zhmktg.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] text-white py-10 px-4 sm:px-6 md:px-8">
      <SEO
        title="Client Feedback & Testimonials | ZIH Marketing"
        description="Share your experience working with ZIH Marketing Consultancy."
      />

      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 inline-block rounded-full border border-white/10 bg-[#161618] px-3 py-1 text-[11px] tracking-wide text-[#fafafa]">
            Customer Success • Client Reviews
          </div>
          <h1 className="text-[32px] sm:text-[40px] font-semibold tracking-tight text-[#fafafa] leading-tight">
            Share Your Experience
          </h1>
          <p className="mt-2 text-[14px] leading-relaxed text-[#a1a1aa]">
            Your candid feedback directly shapes our strategy, execution standards,
            and client partnerships. Thank you for taking the time to share your perspective.
          </p>
        </div>

        {/* Form (no card wrapper, no shadow) */}
        <div>
          {statusMessage && (
            <div
              className={`mb-6 rounded-xl border p-4 text-[13.5px] font-medium ${statusMessage.type === "success"
                ? "border-green-500/30 bg-green-500/10 text-green-300"
                : "border-red-500/30 bg-red-500/10 text-red-300"
                }`}
            >
              {statusMessage.type === "success" ? "✓ " : "✕ "}
              {statusMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[12px] font-semibold uppercase tracking-wide text-[#fafafa]">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full rounded-xl border border-white/10 bg-[#18181b] px-4 py-3 text-[13.5px] text-white placeholder-[#71717a] outline-none focus:border-[#c4f82a]"
                />
              </div>
              <div>
                <label className="mb-2 block text-[12px] font-semibold uppercase tracking-wide text-[#fafafa]">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@company.com"
                  className="w-full rounded-xl border border-white/10 bg-[#18181b] px-4 py-3 text-[13.5px] text-white placeholder-[#71717a] outline-none focus:border-[#c4f82a]"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="mb-2 block text-[12px] font-semibold uppercase tracking-wide text-[#fafafa]">
                Practice Area / Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-white/10 bg-[#18181b] px-4 py-3 text-[13.5px] text-white outline-none focus:border-[#c4f82a]"
              >
                {servicesList.map((svc) => (
                  <option key={svc} value={svc} className="bg-[#141215] text-white">
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-[12px] font-semibold uppercase tracking-wide text-[#fafafa]">
                Your Feedback &amp; Testimonial *
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Describe your experience collaborating with ZIH..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#18181b] p-4 text-[13.5px] leading-relaxed text-white placeholder-[#71717a] outline-none focus:border-[#c4f82a]"
              />
            </div>



            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-[#c4f82a] py-3.5 text-[13.5px] font-semibold text-black hover:bg-[#b0f516] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Submitting Review...</span>
              ) : (
                <>
                  <FiSend size={15} />
                  <span>Submit Customer Feedback</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Feedback;