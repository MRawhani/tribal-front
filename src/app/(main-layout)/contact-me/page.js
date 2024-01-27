"use client";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "@/components/global/Breadcrumb";
import { fetchClientData, getConfigValue, submitContactUsForm } from "@/utils/globalStore";

function SuccessMessageAlert() {
  return (
    <section className="mt-4">
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              Successfully send the contact us message 🥳
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ErrorMessageAlert({ errorMessage }) {
  return (
    <section className="mt-4">
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm font-medium text-red-800">{errorMessage}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setLoading(true);
    setShowSuccessMessage(false);
    setErrorMessage("");

    submitContactUsForm({
      name: formData.get("name"),
      subject: formData.get("subject"),
      email: formData.get("email"),
      body: formData.get("body"),
    })
      .then(() => {
        e.target.reset();
        setShowSuccessMessage(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.error[0].message);
      })
      .finally(() => {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  };

  return (
    <div>
      {showSuccessMessage && <SuccessMessageAlert />}
      {errorMessage && <ErrorMessageAlert errorMessage={errorMessage} />}

      <form className="px-2 grid grid-cols-2 gap-6 mt-7" onSubmit={handleSubmit}>
        <div className="form-control col-span-2 sm:col-span-1">
          <label className="text-neutral-500">Name</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-control col-span-2 sm:col-span-1">
          <label className="text-neutral-500">Email</label>
          <input name="email" type="email" required />
        </div> 

        <div className="form-control col-span-2">
          <label className="text-neutral-500">Subject</label>
          <input name="subject" type="text" required />
        </div>

        <div className="form-control col-span-2">
          <label className="text-neutral-500">Message</label>
          <textarea name="body" required rows={6}></textarea>
        </div>

        <div className="col-span-2">
          <button className="btn btn-primary " disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function AboutPage() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const callData = async () => {
      const data = await fetchClientData();

      const configData = data?.portfolioData?.configData;
      setdata(configData)
    };
    callData()
  }, []);

  return (
    <div className="contact-me">
      <div className="container pb-16">
        <Breadcrumb
          links={[{ title: "contact me", href: "/contact-me" }]}
          title={getConfigValue(data, "contact_title")?.value || "contact me"}
        />
      </div>

      <section className="container">
        <h2 className="contact-me__title">
          {getConfigValue(data, "contact_page_heading")?.value || "Let's Talk"}
        </h2>

        <p className="contact-me__description">
          {getConfigValue(data, "contact_page_caption")?.value ||
            "Leave me a message in the contact form below"}
          , or contact me through my email
          <a
            className="ml-1 text-seconday_800"
            href={`mailto:${
              getConfigValue(data, "contact_email")?.value ||
              "info@yementribalvoices.com"
            }`}
          >
            {getConfigValue(data, "contact_email")?.value ||
              "info@yementribalvoices.com"}
          </a>
        </p>

        <FormSection />
      </section>
    </div>
  );
}
