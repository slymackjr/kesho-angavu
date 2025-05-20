import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setLoading(false);
        setSent(true);
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="rounded-xl border p-4 sm:p-6 bg-white/60 shadow-lg border-gray-200">
      <h3 className="text-lg sm:text-xl font-bold mb-4">Send Us a Message</h3>
      {sent ? (
        <p className="text-green-600 font-medium">Thanks! We'll be in touch shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-xs sm:text-sm font-medium">First name</label>
              <input
                id="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-xs sm:text-sm font-medium">Last name</label>
              <input
                id="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                placeholder="Smith"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs sm:text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="john.smith@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs sm:text-sm font-medium">Message</label>
            <textarea
              id="message"
              value={form.message}
              onChange={handleChange}
              className="min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us how we can help..."
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-sm"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      )}
    </div>
  );
};
export default ContactForm;
