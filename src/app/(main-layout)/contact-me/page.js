import React from "react";
import { Breadcrumb } from "@/components/global/Breadcrumb";

export default function AboutPage() {
  return (
    <div className="contact-me">
      <div className="container pb-8 md:pb-40">
        <Breadcrumb
          links={[{ title: "contact me", href: "/contact-me" }]}
          title="contact me"
        />
      </div>

      <section className="container">
        <h2 className="contact-me__title">Let&apos;s Talk</h2>

        <p className="contact-me__description">
          Thank you to all the faithful portfolio lovers. You gave me motivation
          to keep my love for portfolios alive. Leave a mail & keep in touch
          with us.
        </p>

        <form className="mt-12 grid grid-cols-2 gap-6">
          <div className="form-control col-span-2 sm:col-span-1">
            <label>Name</label>
            <input type="text" />
          </div>

          <div className="form-control col-span-2 sm:col-span-1">
            <label>Email</label>
            <input type="email" />
          </div>

          <div className="form-control col-span-2">
            <label>Subject</label>
            <input type="text" />
          </div>

          <div className="form-control col-span-2">
            <label>Message</label>
            <textarea rows={6}></textarea>
          </div>

          <div className="col-span-2">
            <button className="btn btn-primary ">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
}
