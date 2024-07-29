"use client"

import Image from "next/image";

import Plus from "@/app/assets/plus.svg";
import Dash from "@/app/assets/dash.svg";

import { useState } from "react";

export function Faq({ title, content }: { title: string; content: string}) {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <article className="flex flex-col gap-y-4">
            <section className="flex justify-between items-center gap-x-6 cursor-pointer"
             onClick={() => isOpened ? setIsOpened(false) : setIsOpened(true)}>
                <h1 className={`
                    text-neutral-600
                    text-h3-small lg:text-h3-medium leading-h3-small lg:leading-h3-medium tracking-h3-small lg:tracking-h3-medium
                `}>
                    { title }
                </h1>

                {!isOpened ?
                    <Image
                        src={Plus}
                        alt="plus icon"
                    />
                    :
                    <Image
                        src={Dash}
                        alt="dash icon"
                    />
                }
                
            </section>

            <p className={`
                ${!isOpened ? "h-0" : "h-fit"} text-neutral-500 pr-8 overflow-hidden
                text-body-small sm:text-body-medium leading-body-small sm:leading-body-medium tracking-body-small md:tracking-body-medium
            `}>
                { content }
            </p>
        </article>
    );
}