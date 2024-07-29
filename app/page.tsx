import Image from "next/image";

import Folds from "@/app/assets/Folds.svg"

import Users from "@/app/assets/Users icon.svg";
import RulerCrossPen from "@/app/assets/Ruler cross pen icon.svg";
import Pallete from "@/app/assets/Pallete icon.svg";
import Pin from "@/app/assets/Pin icon.svg";

import socialEvent from "@/app/assets/services/social event.avif";
import corporateEvent from "@/app/assets/services/corporate event.avif";
import privateEvent from "@/app/assets/services/private event.avif";

import Image_1 from "@/app/assets/projects/Image 1.avif";
import Image_2 from "@/app/assets/projects/Image 2.avif";
import Image_3 from "@/app/assets/projects/Image 3.avif";
import Image_4 from "@/app/assets/projects/Image 4.avif";
import Image_5 from "@/app/assets/projects/Image 5.avif";
import Image_6 from "@/app/assets/projects/Image 6.avif";

import Avatar_1 from "@/app/assets/avatars/Avatar 1.avif";
import Avatar_2 from "@/app/assets/avatars/Avatar 2.avif";
import Avatar_3 from "@/app/assets/avatars/Avatar 3.avif";
import Avatar_4 from "@/app/assets/avatars/Avatar 4.avif";
import Avatar_5 from "@/app/assets/avatars/Avatar 5.avif";
import Avatar_6 from "@/app/assets/avatars/Avatar 6.avif";
import Avatar_7 from "@/app/assets/avatars/Avatar 7.avif";
import Avatar_8 from "@/app/assets/avatars/Avatar 8.avif";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <section className="py-24 px-4 flex flex-col gap-y-8 bg-primary-300">
      <h1 className={`
        dm-sans font-bold text-neutral-0 text-center text-wrap w-full
        text-display-small sm:text-display-medium lg:text-display-large leading-display-small sm:leading-display-medium lg:leading-display-large tracking-display-small sm:tracking-display-medium lg:tracking-display-large
      `}>Unforgettable Moments Seamless Execution</h1>
      
      <section className={`
          flex flex-wrap gap-4 items-center justify-center
          *:w-fit *:p-4 sm:*:p-6 *:bg-secondary-400 *:text-neutral-700 *:rounded-[20px] rubik
          *:font-medium *:text-h3-small sm:*:text-h3-medium lg:*:text-h3-large *:leading-h3-small sm:*:leading-h3-medium lg:*:leading-h3-large *:tracking-h3-small sm:*:tracking-h3-medium lg:*:tracking-h3-large
        `}>
        <p className="rotate-2">142+ Client</p>
        <p className="rotate-[-2deg]">8+ years Experience</p>
        <p className="rotate-3">Expert team</p>
        <p className="rotate-[-2deg]">1.000+ Event Success</p>
      </section>
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
            Our Service
          </h1>
          <p className={`
            text-neutral-600 max-w-[400px]
            text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large  
          `}>
            We specialize in crafting unforgettable experiences across a wide range of events
          </p>
        </article>

        <section id="services"
           className={`
            flex flex-col md:flex-row flex-wrap gap-6 lg:gap-12 relative
            *:relative *:max-w-[328px] *:min-h-[380px] *:lg:max-w-[420px] *:overflow-hidden
          `}>
            <article>
              <section className="h-full p-6 flex flex-col gap-y-8 border border-solid border-neutral-white-100 bg-neutral-0 rounded-3xl overflow-hidden">
                <section className="h-full flex flex-col gap-y-4">
                  <h1 className={`
                text-neutral-600 font-medium 
                    text-h2-small sm:text-h2-medium lg:text-h1-small leading-h2-small sm:leading-h2-medium lg:leading-h1-small tracking-h2-small sm:tracking-h2-medium lg:tracking-h1-small
                  `}>
                    Corporate Event
                  </h1>

                  <p className={`
                    text-neutral-600
                    text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large  
                  `}>
                    Flawless conferences, launches, team building, and galas that drive results and culture.
                  </p>

                  <div aria-label="folds-wrapper" 
                  className={`
                    h-[60px] w-[60px] bg-neutral-0 absolute top-0 right-0 z-[1] rounded-bl-xl overflow-hidden
                    border-b border-l border-b-neutral-white-100 border-l-neutral-white-100 border-solid
                    drop-shadow-[-8px_8px_20px_rgba(178,178,178,0.10)]
                  `}>
                    <Image
                      src={Folds}
                      alt="Folds SVG"
                    />
                  </div>
                </section>

                <Image
                  className="h-[300] rounded-xl"
                  src={socialEvent}
                  alt="Social Event"
                />
              </section>
            </article>

            <article>
              <section className="h-full p-6 flex flex-col gap-y-8 border border-solid border-neutral-white-100 bg-neutral-0 rounded-3xl overflow-hidden">
                <section className="h-full flex flex-col gap-y-4">
                  <h1 className={`
                text-neutral-600 font-medium 
                    text-h2-small sm:text-h2-medium lg:text-h1-small leading-h2-small sm:leading-h2-medium lg:leading-h1-small tracking-h2-small sm:tracking-h2-medium lg:tracking-h1-small
                  `}>
                    Social Event
                  </h1>

                  <p className={`
                    text-neutral-600
                    text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large  
                  `}>
                    Unforgettable weddings, birthdays, and galas - life's milestones perfected.
                  </p>

                  <div aria-label="folds-wrapper" 
                  className={`
                    h-[60px] w-[60px] bg-neutral-0 absolute top-0 right-0 z-[1] rounded-bl-xl overflow-hidden
                    border-b border-l border-b-neutral-white-100 border-l-neutral-white-100 border-solid
                    drop-shadow-[-8px_8px_20px_rgba(178,178,178,0.10)]
                  `}>
                    <Image
                      src={Folds}
                      alt="Folds SVG"
                    />
                  </div>
                </section>

                <Image
                  className="h-[300] rounded-xl"
                  src={corporateEvent}
                  alt="Social Event"
                />
              </section>
            </article>

            <article>
              <section className="h-full p-6 flex flex-col gap-y-8 border border-solid border-neutral-white-100 bg-neutral-0 rounded-3xl overflow-hidden">
                <section className="h-full flex flex-col gap-y-4">
                  <h1 className={`
                text-neutral-600 font-medium 
                    text-h2-small sm:text-h2-medium lg:text-h1-small leading-h2-small sm:leading-h2-medium lg:leading-h1-small tracking-h2-small sm:tracking-h2-medium lg:tracking-h1-small
                  `}>
                    Private Event
                  </h1>

                  <p className={`
                    text-neutral-600
                    text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large  
                  `}>
                    Meticulous planning & personalization for baby showers and all your intimate gatherings.
                  </p>

                  <div aria-label="folds-wrapper" 
                  className={`
                    h-[60px] w-[60px] bg-neutral-0 absolute top-0 right-0 z-[1] rounded-bl-xl overflow-hidden
                    border-b border-l border-b-neutral-white-100 border-l-neutral-white-100 border-solid
                    drop-shadow-[-8px_8px_20px_rgba(178,178,178,0.10)]
                  `}>
                    <Image
                      src={Folds}
                      alt="Folds SVG"
                    />
                  </div>
                </section>

                <Image
                  className="h-[300] rounded-xl"
                  src={privateEvent}
                  alt="Social Event"
                />
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
            More Than Just Event Planning
          </h1>
          <p className={`
            text-neutral-600 max-w-[400px]
            text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large  
          `}>
            PowFoo goes beyond logistics. We are passionate about
          </p>
        </article>

        <section className={`
            flex flex-col gap-8 md:flex-row flex-wrap
            *:max-w-[328px] lg:*:max-w-[380px] *:py-5 *:px-8 *:flex *:flex-col *:gap-y-6 *:bg-neutral-0 *:rounded-[20px]
            *:border-[1.5px] *:border-solid *:border-neutral-white-200
            drop-shadow-[-6px_6px_0px_#F0F0F0]
          `}>
          <article className="*:flex *:flex-col *:gap-y-3">
            <Image
              className="h-[80px] w-[80px]"
              src={Users}
              alt="Users icon"
            />

            <section>
              <h1 className={`
             text-neutral-700 font-medium 
                text-h3-small sm:text-h3-xlarge lg:text-h3-large leading-h3-small sm:leading-h3-xlarge lg:leading-h3-large tracking-h3-small sm:tracking-h3-medium lg:tracking-h3-large
            `}>
                Collaboration
              </h1>

              <p className={`
                text-neutral-600 
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
              `}>
                We work closely with you to understand your vision and translate it into reality 
              </p>
            </section>
          </article>

          <article className="*:flex *:flex-col *:gap-y-3">
            <Image
              className="h-[80px] w-[80px]"
              src={RulerCrossPen}
              alt="Ruler Cross Pen icon"
            />

            <section>
              <h1 className={`
             text-neutral-700 font-medium 
                text-h3-small sm:text-h3-xlarge lg:text-h3-large leading-h3-small sm:leading-h3-xlarge lg:leading-h3-large tracking-h3-small sm:tracking-h3-medium lg:tracking-h3-large
            `}>
                Attention to Detail
              </h1>

              <p className={`
                text-neutral-600 
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
              `}>
                We meticulously plan every aspect to ensure a seamless execution
              </p>
            </section>
          </article>

          <article className="*:flex *:flex-col *:gap-y-3">
            <Image
              className="h-[80px] w-[80px]"
              src={Pallete}
              alt="Pallete icon"
            />

            <section>
              <h1 className={`
             text-neutral-700 font-medium 
                text-h3-small sm:text-h3-xlarge lg:text-h3-large leading-h3-small sm:leading-h3-xlarge lg:leading-h3-large tracking-h3-small sm:tracking-h3-medium lg:tracking-h3-large
            `}>
                Creativity
              </h1>

              <p className={`
                text-neutral-600 
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
              `}>
                We bring fresh ideas and innovative solutions to every event
              </p>
            </section>
          </article>

          <article className="*:flex *:flex-col *:gap-y-3">
            <Image
              className="h-[80px] w-[80px]"
              src={Pin}
              alt="Pin icon"
            />

            <section>
              <h1 className={`
             text-neutral-700 font-medium 
                text-h3-small sm:text-h3-xlarge lg:text-h3-large leading-h3-small sm:leading-h3-xlarge lg:leading-h3-large tracking-h3-small sm:tracking-h3-medium lg:tracking-h3-large
            `}>
                Unwavering Commitment
              </h1>

              <p className={`
                text-neutral-600 
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
              `}>
                Your satisfaction is our priority. We are dedicated to exceeding your expectations
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
            Most&nbsp;impressive projects
          </h1>
          <p className={`
            text-neutral-600 max-w-[400px]
            text-body-small sm:text-body-medium lg:text-body-large leading-body-small sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large  
          `}>
            High-quality images that capture event and its unique atmosphere
          </p>
        </article>

        <section className="flex flex-col sm:flex-row flex-wrap gap-6 lg:gap-8 justify-center items-center *:rounded-xl *:object-cover">
          <Image
            className="max-w-[280px] lg:max-w-[380px] h-[250px] lg:h-[300px]"
            src={Image_1}
            alt="Project 1"
          />
           
          <Image
            className="max-w-[360px] lg:max-w-[480px] h-[250px] lg:h-[300px]"
            src={Image_2}
            alt="Project 2"
          />

          <Image
            className="max-w-[280px] lg:max-w-[380px] h-[250px] lg:h-[300px]"
            src={Image_3}
            alt="Project 3"
          />

          <Image
            className="max-w-[360px] lg:max-w-[480px] h-[250px] lg:h-[300px]"
            src={Image_4}
            alt="Project 4"
          />

          <Image
            className="max-w-[280px] lg:max-w-[380px] h-[250px] lg:h-[300px] hidden sm:block"
            src={Image_5}
            alt="Project 5"
          />

          <Image
            className="max-w-[280px] lg:max-w-[380px] sm:max-w-[360px] h-[250px] lg:h-[300px] hidden sm:block"
            src={Image_6}
            alt="Project 6"
          />

        </section>
      </section>

      <section className="flex flex-col gap-y-8 md:gap-y-12">
        <article className="py-4 flex flex-col sm:flex-row gap-4 sm:gap-x-6 sm:items-center justify-between border-b-[1.5px] border-solid border-neutral-white-100">
          <h1 className={`
            text-neutral-700 font-medium 
              text-h2-large sm:text-h2-xlarge lg:text-h1-xlarge leading-h2-large sm:leading-h2-xlarge lg:leading-h1-xlarge tracking-h2-large sm:tracking-h2-xlarge lg:tracking-h1-xlarge
            `}>
            PowFoo's satisfied clients
          </h1>
        </article>

        <section className="flex flex-row flex-wrap justify-center gap-8 overflow-scroll">
          <section className={`
            flex flex-row sm:flex-col gap-8 before:h-6 before:hidden before:sm:block
            *:min-w-[300px] *:max-w-[250px] *:py-8 *:px-6 *:flex *:flex-col *:gap-y-8 *:rounded-2xl *:bg-neutral-white-0
          `}>
            <article>
              <Image
                height={64}
                width={64}
                src={Avatar_1}
                alt="Avatar 1 Sarah Lee, Marketing Director"
              />

              <section className="rubik flex flex-col gap-y-6">
                <p className={`
                text-neutral-600
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-medium sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
                `}>
                  PowFoo's creativity and meticulous planning made our annual conference a huge success. We saw a significant increase in attendee engagement, and everyone is already looking forward to next year!
                </p>
                
                <h1 className={`
                text-neutral-700
                  text-body-small sm:text-body-medium lg:text-body-large leading-label-medium sm:leading-label-medium lg:leading-label-large tracking-label-small sm:tracking-label-medium lg:tracking-label-large
                `}>
                  Sarah Lee, Marketing Director
                </h1>
              </section>
            </article>

            <article>
              <Image
                height={64}
                width={64}
                src={Avatar_2}
                alt="Avatar 2 Sarah Lee, Marketing Director"
              />

              <section className="rubik flex flex-col gap-y-6">
                <p className={`
                text-neutral-600
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-medium sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
                `}>
                  Our team-building event planned by PowFoo was a game-changer. It was both fun and effective in fostering collaboration and communication among our employees. Thanks, PowFoo!
                </p>
                
                <h1 className={`
                text-neutral-700
                  text-body-small sm:text-body-medium lg:text-body-large leading-label-medium sm:leading-label-medium lg:leading-label-large tracking-label-small sm:tracking-label-medium lg:tracking-label-large
                `}>
                  Emily Garcia, HR Manager
                </h1>
              </section>
            </article>
          </section>

          <section className={`
            flex flex-row sm:flex-col gap-8
            *:min-w-[300px] *:max-w-[250px] *:py-8 *:px-6 *:flex *:flex-col *:gap-y-8 *:rounded-2xl *:bg-neutral-white-0
          `}>
            <article>
              <Image
                height={64}
                width={64}
                src={Avatar_3}
                alt="Avatar 1 Sarah Lee, Marketing Director"
              />

              <section className="rubik flex flex-col gap-y-6">
                <p className={`
                text-neutral-600
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-medium sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
                `}>
                  PowFoo made our dream wedding a reality. They listened to our vision and brought it to life flawlessly. The entire day was magical, and we'll cherish those memories forever.
                </p>
                
                <h1 className={`
                text-neutral-700
                  text-body-small sm:text-body-medium lg:text-body-large leading-label-medium sm:leading-label-medium lg:leading-label-large tracking-label-small sm:tracking-label-medium lg:tracking-label-large
                `}>
                  David and Jane Miller, Wedding Clients
                </h1>
              </section>
            </article>

            <article>
              <Image
                height={64}
                width={64}
                src={Avatar_4}
                alt="Avatar 2 Sarah Lee, Marketing Director"
              />

              <section className="rubik flex flex-col gap-y-6">
                <p className={`
                text-neutral-600
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-medium sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
                `}>
                  PowFoo transformed our baby shower into a truly special occasion. Their personalized touches and meticulous planning made it a memorable event for everyone who attended.
                </p>
                
                <h1 className={`
                text-neutral-700
                  text-body-small sm:text-body-medium lg:text-body-large leading-label-medium sm:leading-label-medium lg:leading-label-large tracking-label-small sm:tracking-label-medium lg:tracking-label-large
                `}>
                  Katherine Brown, Mom-to-be
                </h1>
              </section>
            </article>
          </section>

          <section className={`
            flex flex-row sm:flex-col gap-8 before:h-6 before:hidden before:sm:block
            *:min-w-[300px] *:max-w-[250px] *:py-8 *:px-6 *:flex *:flex-col *:gap-y-8 *:rounded-2xl *:bg-neutral-white-0
          `}>
            <article>
              <Image
                height={64}
                width={64}
                src={Avatar_5}
                alt="Avatar 1 Sarah Lee, Marketing Director"
              />

              <section className="rubik flex flex-col gap-y-6">
                <p className={`
                text-neutral-600
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-medium sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
                `}>
                  We entrusted PowFoo with planning our son's graduation party, and they did not disappoint. The event was beautifully designed and perfectly executed. It was a celebration we'll never forget.
                </p>
                
                <h1 className={`
                text-neutral-700
                  text-body-small sm:text-body-medium lg:text-body-large leading-label-medium sm:leading-label-medium lg:leading-label-large tracking-label-small sm:tracking-label-medium lg:tracking-label-large
                `}>
                  John and Alice Williams, Happy Parents
                </h1>
              </section>
            </article>

            <article>
              <Image
                height={64}
                width={64}
                src={Avatar_6}
                alt="Avatar 2 Sarah Lee, Marketing Director"
              />

              <section className="rubik flex flex-col gap-y-6">
                <p className={`
                text-neutral-600
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-medium sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
                `}>
                  We were hesitant about planning a large family reunion, but PowFoo made the process stress-free. They handled all the logistics and ensured everyone had a wonderful time.
                </p>
                
                <h1 className={`
                text-neutral-700
                  text-body-small sm:text-body-medium lg:text-body-large leading-label-medium sm:leading-label-medium lg:leading-label-large tracking-label-small sm:tracking-label-medium lg:tracking-label-large
                `}>
                  Charles Johnson, Family Reunion Organizer
                </h1>
              </section>
            </article>
          </section>

          <section className={`
            flex flex-row sm:flex-col gap-8
            *:min-w-[300px] *:max-w-[250px] *:py-8 *:px-6 *:flex *:flex-col *:gap-y-8 *:rounded-2xl *:bg-neutral-white-0
          `}>
            <article>
              <Image
                height={64}
                width={64}
                src={Avatar_7}
                alt="Avatar 1 Sarah Lee, Marketing Director"
              />

              <section className="rubik flex flex-col gap-y-6">
                <p className={`
                text-neutral-600
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-medium sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
                `}>
                  PowFoo's expertise was invaluable in planning our annual industry gala. They managed everything seamlessly, allowing us to focus on connecting with guests. The event was a huge success, and we received rave reviews.
                </p>
                
                <h1 className={`
                text-neutral-700
                  text-body-small sm:text-body-medium lg:text-body-large leading-label-medium sm:leading-label-medium lg:leading-label-large tracking-label-small sm:tracking-label-medium lg:tracking-label-large
                `}>
                  Michael Anderson
                </h1>
              </section>
            </article>

            <article>
              <Image
                height={64}
                width={64}
                src={Avatar_8}
                alt="Avatar 2 Sarah Lee, Marketing Director"
              />

              <section className="rubik flex flex-col gap-y-6">
                <p className={`
                text-neutral-600
                  text-body-small sm:text-body-medium lg:text-body-large leading-body-medium sm:leading-body-medium lg:leading-body-large tracking-body-small sm:tracking-body-medium lg:tracking-body-large
                `}>
                  PowFoo exceeded our expectations for our product launch event. The venue was stunning, the presentation was flawless, and the overall atmosphere was electric. We couldn't have asked for more.
                </p>
                
                <h1 className={`
                text-neutral-700
                  text-body-small sm:text-body-medium lg:text-body-large leading-label-medium sm:leading-label-medium lg:leading-label-large tracking-label-small sm:tracking-label-medium lg:tracking-label-large
                `}>
                  Lisa Jones, Marketing Manager
                </h1>
              </section>
            </article>
          </section>

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
