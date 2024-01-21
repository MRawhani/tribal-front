import React from "react";
import { Breadcrumb } from "@/components/global/Breadcrumb";

export default function AboutPage() {
  return (
    <div className="contact-me">
      <div className="container pb-16">
        <Breadcrumb
          links={[{ title: "contact me", href: "/contact-me" }]}
          title="contact me"
        />
      </div>

      <section className="container">
        <h2 className="contact-me__title">Let&apos;s Talk</h2>

        <p className="contact-me__description">
          Leave me a message in the contact form below, or contact me through my
          email
          <a
            className="ml-1 text-seconday_800"
            href="mailto:info@yementribalvoices.com"
          >
            info@yementribalvoices.com
          </a>
        </p>

        <form
          className="mt-12 grid grid-cols-2 gap-6"
          action="mailto:info@yementribalvoices.com"
          method="POST"
        >
          <div className="form-control col-span-2 sm:col-span-1">
            <label>Name</label>
            <input type="text" name="name" />
          </div>

          <div className="form-control col-span-2 sm:col-span-1">
            <label>Email</label>
            <input name="mail" type="email" />
          </div>

          <div className="form-control col-span-2">
            <label>Subject</label>
            <input name="subject" type="text" />
          </div>

          <div className="form-control col-span-2">
            <label >Message</label>
            <textarea name="message" rows={6}></textarea>
          </div>

          <div className="col-span-2">
            <button className="btn btn-primary ">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
}
