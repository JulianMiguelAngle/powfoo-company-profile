import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Faq } from "@/app/components/Faq";

import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar />
    <section className="py-24 px-4 flex flex-col gap-y-8 bg-primary-300">
      <h1 className={`
        dm-sans font-bold text-neutral-0 text-center text-wrap w-full
        text-display-small sm:text-display-medium lg:text-display-large leading-display-small sm:leading-display-medium lg:leading-display-large tracking-display-small sm:tracking-display-medium lg:tracking-display-large
      `}>/Contact</h1>
    </section>

    <main className={`
      py-14 px-4 sm:px-8 bg-neutral-0 rounded-tl-[60px] rounded-tr-[60px] rubik flex flex-col gap-y-36
    `}>
      <section className="flex flex-col gap-y-8 md:gap-y-12">
        <article className="py-4 flex flex-col sm:flex-row gap-4 sm:gap-x-6 sm:items-center justify-between border-b-[1.5px] border-solid border-neutral-white-100">
          <Link href={"mailto:hello@powfoo.com"}
             className={`
            text-neutral-700 font-medium 
              text-h2-large sm:text-h2-xlarge lg:text-h1-xlarge leading-h2-large sm:leading-h2-xlarge lg:leading-h1-xlarge tracking-h2-large sm:tracking-h2-xlarge lg:tracking-h1-xlarge
            `}>
            Say hello to hello@powfoo.com
          </Link>
        </article>

        <section className={`
            flex flex-wrap gap-12 text-neutral-600
            *:text-body-medium *:lg:text-body-large *:leading-body-medium *:md:leading-body-large *:tracking-body-medium *:md:tracking-body-large
          `}>
            <Link href={""}>Twitter</Link>
            <Link href={""}>Instagram</Link>
            <Link href={""}>Facebook</Link>
            <Link href={""}>Medium</Link>
            <Link href={""}>LinkedIn</Link>
        </section>
      </section>

      <section className="flex flex-col gap-y-8 md:gap-y-12">
        <article className="py-4 flex flex-col sm:flex-row gap-4 sm:gap-x-6 sm:items-center justify-between border-b-[1.5px] border-solid border-neutral-white-100">
          <h1 className={`
            text-neutral-700 font-medium 
              text-h2-large sm:text-h2-xlarge lg:text-h1-xlarge leading-h2-large sm:leading-h2-xlarge lg:leading-h1-xlarge tracking-h2-large sm:tracking-h2-xlarge lg:tracking-h1-xlarge
            `}>
            Frequently Asked Questions (FAQs)
          </h1>
        </article>

        <section className="flex flex-col lg:flex-row flex-wrap gap-12">
          <article className="flex flex-col gap-y-6 lg:max-w-[600px]">
            <h1 className={`
              text-neutral-700 font-medium
                text-h3-medium lg:text-h3-xlarge leading-h3-medium lg:leading-h3-xlarge tracking-h3-medium lg:tracking-h3-xlarge
              `}>
              General Questions
            </h1>

            <Faq 
              title="What services do you offer?"
              content="PowFoo offers a wide range of event planning services, including corporate events, social gatherings, and private celebrations. Our expertise covers everything from conceptualization and design to planning, logistics, and execution."
            />

            <Faq 
              title="How do I book PowFoo for my event?"
              content="To book PowFoo, please contact us through our contact form or by phone. We will schedule a consultation to discuss your event vision and provide a customized proposal."
            />

            <Faq 
              title="What is your service area?"
              content="We proudly serve the Texas area. Our expertise is readily available to bring your event vision to life within this region. While we primarily focus on Texas, we're open to discussing events in other locations."
            />

            <Faq 
              title="Do you offer destination event planning?"
              content="To book PowFoo, please contact us through our contact form or by phone. We will schedule a consultation to discuss your event vision and provide a customized proposal."
            />

            <Faq 
              title="How much does it cost to hire PowFoo?"
              content="Event pricing varies depending on the size, scope, and complexity of the event. We offer customized quotes based on your specific needs and requirements."
            />
          </article>

          <article className="flex flex-col gap-y-6 lg:max-w-[600px]">
            <h1 className={`
              text-neutral-700 font-medium
                text-h3-medium lg:text-h3-xlarge leading-h3-medium lg:leading-h3-xlarge tracking-h3-medium lg:tracking-h3-xlarge
              `}>
              Event Planning Questions
            </h1>

            <Faq 
              title="Do you handle event decor and theming? "
              content="Yes, we specialize in creating stunning event decor and theming that aligns with your vision."
            />

            <Faq 
              title="Can you recommend vendors for specific services? "
              content="Absolutely! We have a network of trusted vendors for various services such as catering, photography, florists, and entertainment."
            />

            <Faq 
              title="What is your process for planning an event? "
              content="Our event planning process involves a detailed consultation, concept development, planning and logistics, vendor management, and on-site execution."
            />

            <Faq 
              title="Do you offer event management on the day of the event?"
              content="Yes, our dedicated team provides full event management services to ensure a seamless and stress-free experience."
            />

            <Faq 
              title="Can you provide examples of previous events? "
              content="Certainly! We have a portfolio of past events that showcase our work. Please visit our portfolio page or request a personalized presentation."
            />
          </article>

          <article className="flex flex-col gap-y-6 lg:max-w-[600px]">
            <h1 className={`
              text-neutral-700 font-medium
                text-h3-medium lg:text-h3-xlarge leading-h3-medium lg:leading-h3-xlarge tracking-h3-medium lg:tracking-h3-xlarge
              `}>
              Payment and Contracts
            </h1>

            <Faq 
              title="What payment methods do you accept?"
              content="To make your experience as convenient as possible, we accept Debit, Credit Cards, Bank Transfers, Echecks, and Cash"
            />

            <Faq 
              title="Do you require a deposit?"
              content="To secure your event date, we require a 10% deposit of the total estimated cost. This deposit is non-refundable but can be applied towards your final balance."
            />

            <Faq 
              title="What is your cancellation policy?"
              content="We understand that unforeseen circumstances may arise. If you need to cancel your event, please notify us as soon as possible. 5 days or more before the event: 10% Cancellation fee"
            />
          </article>
            
        </section>

      </section>
    </main>

    <article className="py-8 px-6 bg-neutral-white-100">
      <section className="min-h-[436px] p-6 flex items-center justify-center bg-neutral-0 rounded-2xl">
        
        <section className="max-w-[558px] flex flex-col gap-y-6 justify-center relative">
          <h1 className={`
              text-neutral-700 font-medium rubik
                text-h2-medium sm:text-h1-small lg:text-h1-medium leading-h2-medium sm:leading-h1-small lg:leading-h1-medium tracking-h2-medium sm:tracking-h1-small lg:tracking-h1-medium
              `}>
            If you have any other questions, please don't hesitate to contact us.
          </h1>
        </section>
      </section>
    </article>

    <Footer />
    </>
  );
}
