"use client";
import { useState, FormEvent } from "react";
import Button from "../ui/Button2";
import emailjs from "@emailjs/browser";

type Tab = "general" | "pitch";

const inputClass =
  "w-full bg-transparent border-b border-genesis-navy/20 py-3 text-sm text-genesis-navy font-montserrat placeholder:text-genesis-navy/40 focus:outline-none focus:border-genesis-navy/60 transition-colors";

const labelClass =
  "text-[11px] uppercase tracking-widest text-genesis-navy/80 font-montserrat";

export default function Connect() {
  const [tab, setTab] = useState<Tab>("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({
    type: "success" as "success" | "error",
    message: "",
  });

  // General Inquiry Form State
  const [generalForm, setGeneralForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Pitch Form State
  const [pitchForm, setPitchForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  });

  const handleGeneralSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get current date and time
      const now = new Date();
      const time = now.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const templateParams = {
        firstName: generalForm.firstName,
        lastName: generalForm.lastName,
        email: generalForm.email,
        message: generalForm.message,
        time: time,
      };

      await emailjs.send(
        "service_fcva6pb",
        "template_ucq5ww1",
        templateParams,
        "4mQttgecqdy_Sk_6q"
      );

      setPopupMessage({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setShowPopup(true);
      
      // Reset form
      setGeneralForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      // Auto hide popup after 5 seconds
      setTimeout(() => setShowPopup(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setPopupMessage({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
      setShowPopup(true);
      
      // Auto hide popup after 5 seconds
      setTimeout(() => setShowPopup(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePitchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get current date and time
      const now = new Date();
      const time = now.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const templateParams = {
        firstName: pitchForm.firstName,
        lastName: pitchForm.lastName,
        email: pitchForm.email,
        phone: pitchForm.phone,
        company: pitchForm.company,
        description: pitchForm.description,
        time: time,
      };

      await emailjs.send(
        "service_fcva6pb",
        "template_3zr853l",
        templateParams,
        "4mQttgecqdy_Sk_6q"
      );

      setPopupMessage({
        type: "success",
        message: "Pitch submitted successfully! We'll review it and get back to you.",
      });
      setShowPopup(true);
      
      // Reset form
      setPitchForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        description: "",
      });

      // Auto hide popup after 5 seconds
      setTimeout(() => setShowPopup(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setPopupMessage({
        type: "error",
        message: "Failed to submit pitch. Please try again.",
      });
      setShowPopup(true);
      
      // Auto hide popup after 5 seconds
      setTimeout(() => setShowPopup(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className={`relative mx-4 max-w-md rounded-lg p-6 shadow-2xl ${
              popupMessage.type === "success"
                ? "bg-white border-2 border-green-500"
                : "bg-white border-2 border-red-500"
            }`}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  popupMessage.type === "success"
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                {popupMessage.type === "success" ? (
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1 pt-1">
                <h3
                  className={`mb-1 font-montserrat text-lg font-semibold ${
                    popupMessage.type === "success"
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {popupMessage.type === "success" ? "Success!" : "Error"}
                </h3>
                <p className="font-montserrat text-sm text-gray-600">
                  {popupMessage.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="contact-section relative z-20 mt-[4vh] w-full bg-transparent pb-24 sm:-mt-[4vh] md:-mt-[10vh]">
        <div className="mx-auto w-full max-w-5xl border border-genesis-navy/15 bg-white px-6 py-8 shadow-[0_20px_55px_rgba(22,46,84,0.14)] sm:px-8 sm:py-10 md:px-10">
        <div className="flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-3">
              <h1 className="contact-heading text-[clamp(1.75rem,5vw,3.4rem)] text-genesis-navy font-agatho leading-[1.05]">
                Let&apos;s start a conversation.
              </h1>
            </div>

            <div className="flex w-full overflow-hidden border border-genesis-navy/35 sm:w-fit sm:min-w-[18rem]">
              <button
                onClick={() => setTab("general")}
                className={`flex-1 px-4 py-3 text-[11px] uppercase tracking-[0.22em] font-montserrat transition-colors duration-200 sm:px-6 ${
                  tab === "general"
                    ? "bg-genesis-navy text-white"
                    : "bg-transparent text-genesis-navy/80 hover:text-genesis-navy"
                }`}
              >
                General
              </button>
              <button
                onClick={() => setTab("pitch")}
                className={`flex-1 px-4 py-3 text-[11px] uppercase tracking-[0.22em] font-montserrat transition-colors duration-200 sm:px-6 ${
                  tab === "pitch"
                    ? "bg-genesis-navy text-white"
                    : "bg-transparent text-genesis-navy/80 hover:text-genesis-navy"
                }`}
              >
                Pitch Us
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="min-w-0">
              {tab === "general" ? (
                <form
                  className="flex flex-col gap-6 sm:gap-8"
                  onSubmit={handleGeneralSubmit}
                >
                  <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>First Name</label>
                      <input
                        type="text"
                        placeholder="Jane"
                        className={inputClass}
                        value={generalForm.firstName}
                        onChange={(e) =>
                          setGeneralForm({ ...generalForm, firstName: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>Last Name</label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className={inputClass}
                        value={generalForm.lastName}
                        onChange={(e) =>
                          setGeneralForm({ ...generalForm, lastName: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      className={inputClass}
                      value={generalForm.email}
                      onChange={(e) =>
                        setGeneralForm({ ...generalForm, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Message</label>
                    <textarea
                      rows={5}
                      placeholder="How can we help?"
                      className={`${inputClass} resize-none`}
                      value={generalForm.message}
                      onChange={(e) =>
                        setGeneralForm({ ...generalForm, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-12 w-45 bg-genesis-navy px-8 py-4 font-montserrat text-[11px] font-semibold uppercase text-white transition-colors hover:bg-[#8D1E39] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="inline-flex items-center gap-3">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </Button>
                </form>
              ) : (
                <form
                  className="flex flex-col gap-6 sm:gap-8"
                  onSubmit={handlePitchSubmit}
                >
                  <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>First Name</label>
                      <input
                        type="text"
                        placeholder="Jane"
                        className={inputClass}
                        value={pitchForm.firstName}
                        onChange={(e) =>
                          setPitchForm({ ...pitchForm, firstName: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>Last Name</label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className={inputClass}
                        value={pitchForm.lastName}
                        onChange={(e) =>
                          setPitchForm({ ...pitchForm, lastName: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>Email</label>
                      <input
                        type="email"
                        placeholder="jane@genesisventures.com"
                        className={inputClass}
                        value={pitchForm.email}
                        onChange={(e) =>
                          setPitchForm({ ...pitchForm, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>Phone</label>
                      <input
                        type="tel"
                        placeholder="+977 980 000-0000"
                        className={inputClass}
                        value={pitchForm.phone}
                        onChange={(e) =>
                          setPitchForm({ ...pitchForm, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Company / Startup Name</label>
                    <input
                      type="text"
                      placeholder="Genesis Ventures Ltd."
                      className={inputClass}
                      value={pitchForm.company}
                      onChange={(e) =>
                        setPitchForm({ ...pitchForm, company: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Brief Description</label>
                    <textarea
                      rows={5}
                      placeholder="What are you building and what stage are you at?"
                      className={`${inputClass} resize-none`}
                      value={pitchForm.description}
                      onChange={(e) =>
                        setPitchForm({ ...pitchForm, description: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-12 w-45 bg-genesis-navy px-8 py-4 font-montserrat text-[11px] font-semibold uppercase text-white transition-colors hover:bg-[#8D1E39] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="inline-flex items-center gap-3">
                      {isSubmitting ? "Submitting..." : "Submit Pitch"}
                    </span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
