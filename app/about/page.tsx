import Image from "next/image";

import Folds from "@/app/assets/folds.svg"

import User from "@/app/assets/User icon.svg";
import Bulb from "@/app/assets/Bulb icon.svg";
import Note from "@/app/assets/Note icon.svg";
import Birthday from "@/app/assets/Birthday icon.svg";

import Avatar_1 from "@/app/assets/team/Avatar 1.avif";
import Avatar_2 from "@/app/assets/team/Avatar 2.avif";
import Avatar_3 from "@/app/assets/team/Avatar 3.avif";
import Avatar_4 from "@/app/assets/team/Avatar 4.avif";

import Signature from "@/app/assets/Signature.avif";

import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <section className="py-24 px-4 flex flex-col gap-y-8 bg-primary-300">
      <h1 className={`
        dm-sans font-bold text-neutral-0 text-center text-wrap w-full
        text-display-small sm:text-display-medium lg:text-display-large leading-display-small sm:leading-display-medium lg:leading-display-large tracking-display-small sm:tracking-display-medium lg:tracking-display-large
      `}>/About</h1>
    </section>

    <main className={`
      py-14 px-4 sm:px-8 bg-neutral-0 rounded-tl-[60px] rounded-tr-[60px] rubik flex flex-col gap-y-36
    `}>
      <section className="flex flex-col gap-y-8 md:gap-y-12">
        <article className="py-4 flex flex-col sm:flex-row gap-4 sm:gap-x-6 sm:items-center justify-between border-b-[1.5px] border-solid border-neutral-white-100">
          <h1 className={`
            text-neutral-700 font-medium 
              text-h2-large sm:text-h2-xlarge lg:text-h1-xlarge leading-h2-large sm:leading-h2-xlarge lg:leading-h1-xlarge tracking-h2-large sm:tracking-h2-xlarge lg:tracking-h1-xlarge
            `}>
            About PowFoo
          </h1>
          <p className={`
            text-neutral-600 max-w-[400px]
            text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large  
          `}>
            Your Event Magic Makers
          </p>
        </article>

        <section className="flex flex-col lg:flex-row gap-12 justify-between">
            <article className={`
                flex flex-col gap-y-6 max-w-[600px] xl:max-w-[800px]
                *:text-neutral-600 
                *:text-body-small *:sm:text-body-medium *:lg:text-body-large *:leading-body-small *:sm:leading-body-medium *:lg:leading-body-large *:tracking-body-small *:sm:tracking-body-medium *:lg:tracking-body-large
            `}>
                <p>
                    PowFoo is more than just an event planner; we are your partners in creating unforgettable experiences.
                </p>

                <p>
                    With a passion for turning visions into reality, we specialize in crafting bespoke events that leave a lasting impression. Our dedicated team of experts brings together creativity, meticulous planning, and flawless execution to deliver extraordinary experiences for every occasion.
                </p>

                <Image
                    height={90}
                    width={100}
                    src={Signature}
                    alt="Signature"
                />

                <p>
                    John Doe 2013, PowFoo Founder
                </p>
            </article>

            <section className={`
                    flex flex-col sm:flex-row lg:flex-col gap-8
                    *:max-w-[400px] *:flex *:flex-col *:gap-y-5
                `}>
                <article>
                    <h1 className={`
                        text-neutral-700
                        text-h3-medium sm:text-h3-large leading-h2-medium sm:leading-h3-large tracking-h3-medium sm:tracking-h3-large
                    `}>
                        Mission
                    </h1>

                    <p className={`
                        text-neutral-600 
                        text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large    
                    `}>
                        To create extraordinary events that exceed expectations and leave a lasting impression on our clients and their guests.
                    </p>
                </article>

                <article>
                    <h1 className={`
                        text-neutral-700
                        text-h3-medium sm:text-h3-large leading-h2-medium sm:leading-h3-large tracking-h3-medium sm:tracking-h3-large
                    `}>
                        Vision
                    </h1>

                    <p className={`
                        text-neutral-600 
                        text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large    
                    `}>
                        To be the leading event planning company, renowned for our creativity, innovation, and exceptional service.
                    </p>
                </article>
            </section>
        </section>
      </section>

      <section className="flex flex-col gap-y-8 md:gap-y-12">
        <article className="py-4 flex flex-col sm:flex-row gap-4 sm:gap-x-6 sm:items-center justify-between border-b-[1.5px] border-solid border-neutral-white-100">
          <h1 className={`
            text-neutral-700 font-medium 
              text-h2-large sm:text-h2-xlarge lg:text-h1-xlarge leading-h2-large sm:leading-h2-xlarge lg:leading-h1-xlarge tracking-h2-large sm:tracking-h2-xlarge lg:tracking-h1-xlarge
            `}>
            What sets us apart?
          </h1>
          <p className={`
            text-neutral-600 max-w-[400px]
            text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large  
          `}>
            Let PowFoo be your trusted partner in creating unforgettable memories.
          </p>
        </article>

        <section className={`
            flex flex-col gap-8 justify-center md:flex-row flex-wrap
            *:max-w-[328px] lg:*:max-w-[380px] *:py-5 *:px-8 *:flex *:flex-col *:gap-y-6 *:bg-neutral-0 *:rounded-[20px]
            *:border-[1.5px] *:border-solid *:border-neutral-white-200
            drop-shadow-[-6px_6px_0px_#F0F0F0]
          `}>
          <article className="*:flex *:flex-col *:gap-y-3">
            <Image
              className="h-[80px] w-[80px]"
              src={Bulb}
              alt="Bulb icon"
            />

            <section>
              <h1 className={`
             text-neutral-700 font-medium 
                text-h3-small sm:text-h3-xlarge lg:text-h3-large leading-h3-small sm:leading-h3-xlarge lg:leading-h3-large tracking-h3-small sm:tracking-h3-medium lg:tracking-h3-large
            `}>
                Unparalleled Creativity
              </h1>

              <p className={`
                text-neutral-600 
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
              `}>
                Our innovative approach and fresh perspective bring a unique touch to every event
              </p>
            </section>
          </article>

          <article className="*:flex *:flex-col *:gap-y-3">
            <Image
              className="h-[80px] w-[80px]"
              src={Note}
              alt="Note icon"
            />

            <section>
              <h1 className={`
             text-neutral-700 font-medium 
                text-h3-small sm:text-h3-xlarge lg:text-h3-large leading-h3-small sm:leading-h3-xlarge lg:leading-h3-large tracking-h3-small sm:tracking-h3-medium lg:tracking-h3-large
            `}>
                Meticulous Planning
              </h1>

              <p className={`
                text-neutral-600 
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
              `}>
                We handle every detail, ensuring a seamless and stress-free experience
              </p>
            </section>
          </article>

          <article className="*:flex *:flex-col *:gap-y-3">
            <Image
              className="h-[80px] w-[80px]"
              src={User}
              alt="User icon"
            />

            <section>
              <h1 className={`
             text-neutral-700 font-medium 
                text-h3-small sm:text-h3-xlarge lg:text-h3-large leading-h3-small sm:leading-h3-xlarge lg:leading-h3-large tracking-h3-small sm:tracking-h3-medium lg:tracking-h3-large
            `}>
                Client-Centric Focus
              </h1>

              <p className={`
                text-neutral-600 
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
              `}>
                We collaborate closely to create events that align with your goals
              </p>
            </section>
          </article>

          <article className="*:flex *:flex-col *:gap-y-3">
            <Image
              className="h-[80px] w-[80px]"
              src={Birthday}
              alt="Birthday icon"
            />

            <section>
              <h1 className={`
             text-neutral-700 font-medium 
                text-h3-small sm:text-h3-xlarge lg:text-h3-large leading-h3-small sm:leading-h3-xlarge lg:leading-h3-large tracking-h3-small sm:tracking-h3-medium lg:tracking-h3-large
            `}>
                Exceptional Execution
              </h1>

              <p className={`
                text-neutral-600 
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
              `}>
                Our experienced team delivers flawless events, exceeding expectations at every turn
              </p>
            </section>
          </article>

        </section>
      </section>

      <section className="flex flex-col gap-y-8 md:gap-y-12">
        <article className="py-4 flex flex-col sm:flex-row gap-4 sm:gap-x-6 sm:items-center justify-between border-b-[1.5px] border-solid border-neutral-white-100">
          <h1 className={`
            text-neutral-700 font-medium 
              text-h2-large sm:text-h2-xlarge lg:text-h1-xlarge leading-h2-large sm:leading-h2-xlarge lg:leading-h1-xlarge tracking-h2-large sm:tracking-h2-xlarge lg:tracking-h1-xlarge
            `}>
            Our Team
          </h1>
          <p className={`
            text-neutral-600 max-w-[400px]
            text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large  
          `}>
            At PowFoo, our team is the heart of our success.
          </p>
        </article>

        <section className={`
          flex flex-col sm:flex-row flex-wrap gap-6 items-end justify-end
          *:max-w-[360px] *:py-5 *:px-6 *:flex *:flex-col *:gap-y-5
        `}>
            <article>
                <Image
                    src={Avatar_1}
                    alt="Team avatar 1"
                />

                <h1 className={`
                    px-6 rounded-[20px] h-[100px] w-full flex items-center justify-center text-center
                    bg-secondary-white-200 text-neutral-600
                    text-h3-small sm:text-h3-medium lg:text-h3-large
                `}>
                    Sarah Lee, Event Director
                </h1>

            </article>

            <article>
                <Image
                    src={Avatar_2}
                    alt="Team avatar 2"
                />

                <h1 className={`
                    px-6 rounded-[20px] h-[100px] w-full flex items-center justify-center text-center
                    bg-secondary-white-200 text-neutral-600
                    text-h3-small sm:text-h3-medium lg:text-h3-large
                `}>
                    David Kim, Creative Director
                </h1>

            </article>

            <article>
                <Image
                    src={Avatar_3}
                    alt="Team avatar 3"
                />

                <h1 className={`
                    px-6 rounded-[20px] h-[100px] w-full flex items-center justify-center text-center
                    bg-secondary-white-200 text-neutral-600
                    text-h3-small sm:text-h3-medium lg:text-h3-large
                `}>
                  Olivia Chen, Logistics Expert
                </h1>

            </article>

            <article>
                <Image
                    src={Avatar_4}
                    alt="Team avatar 4"
                />

                <h1 className={`
                    px-6 rounded-[20px] h-[100px] w-full flex items-center justify-center text-center
                    bg-secondary-white-200 text-neutral-600
                    text-h3-small sm:text-h3-medium lg:text-h3-large
                `}>
                  Ethan Brown, Client Relations Manager
                </h1>

            </article>
        </section>
      </section>

    </main>

    <article className="py-8 px-6 bg-neutral-white-100">
      <section className="min-h-[436px] p-6 flex items-center justify-center bg-neutral-0 rounded-2xl">
        
        <section className="max-w-[480px] flex flex-col gap-y-6 justify-center relative">
          <h1 className={`
              text-neutral-700 font-medium rubik
                text-h2-medium sm:text-h1-small lg:text-h1-medium leading-h2-medium sm:leading-h1-small lg:leading-h1-medium tracking-h2-medium sm:tracking-h1-small lg:tracking-h1-medium
              `}>
            Ready To Create Unforgettable Experiences?
          </h1>

          <h2 className={`
              text-neutral-600 rubik
              text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large  
            `}>
            Contact PowFoo today and let's discuss your next event
          </h2>

          <button className={`
            absolute top-16 bottom-6 right-[-48px] rotate-[-24deg]
            h-[50px] flex items-center justify-center py-4 px-6 bg-neutral-0 border-[3px] border-dashed border-primary-400 rounded-full text-primary-400 font-medium rubik
            text-body-small sm:text-body-medium lg:text-body-large
          `}>
            Plan your next event
          </button>
        </section>
      </section>
    </article>

    <Footer />
    </>
  );
}
