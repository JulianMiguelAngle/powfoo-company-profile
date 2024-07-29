'use client'

import Logoblue from "@/app/assets/Logo blue.svg";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export function Navbar() {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <header className="h-[90px] py-3 px-4 sm:px-6 lg:px-[60px] flex items-center justify-between bg-primary-300 rubik sticky">
            <Image 
                className="h-[60px] w-[120px] md:w-[150px] object-cover"
                alt="PowFoo Logo"
                src={Logoblue}
            />

            <button className={`
                    py-4 px-6 border-[1.5px] border-solid border-primary-200 rounded-[50px] hover:bg-primary-200
                    flex lg:hidden items-center justify-center 
                    text-neutral-0 text-body-small leading-label-small tracking-label-small text-center
                `}
                onClick={() => setIsOpened(true)}>
                    MENU
            </button>

            <nav className="hidden lg:flex gap-x-10">
                <section className={`
                        flex items-center gap-x-6 text-neutral-0
                        *:py-1.5 *:px-3 *:h-fit *:w-fit *:flex *:items-center*: justify-center 
                        *:border-[1px] *:border-solid *:border-primary-200 *:rounded-[32px]
                    `}>
                    <Link href={"/"} className="hover:bg-primary-200">Home</Link>
                    <Link href={"/"} className="hover:bg-primary-200">Services</Link>
                    <Link href={"/"} className="hover:bg-primary-200">About</Link>
                    <Link href={"/"} className="hover:bg-primary-200">Contact</Link>
                </section>

                <Link href={"/"}
                    className="py-4 px-6 flex items-center justify-center rounded-full bg-secondary-400 text-neutral-700 font-medium">
                    Get A Consultation
                </Link>
            </nav>

            <aside className={`max-w-[250px] py-12 px-4  text-body-small bg-primary-300 transition-all duration-300 flex md:opacity-0 flex-col gap-y-4 justify-between fixed top-0 bottom-0 ${isOpened ? "right-0 " : "right-[-100vw] "}`}>
                <button className={`
                        w-fit py-4 px-6 border-[1.5px] border-solid border-primary-200 rounded-[50px] hover:bg-primary-200
                        flex items-center justify-center 
                        rubik text-neutral-0 text-body-small leading-label-small tracking-label-small text-center
                    `}
                    onClick={() => setIsOpened(false)}>
                        CLOSE
                    </button>

                    <nav className="flex flex-col gap-y-10">
                        <section className={`
                            flex flex-col gap-y-6 text-neutral-0
                            *:py-1.5 *:px-3 *:h-fit *:w-fit *:flex *:items-center*: justify-center 
                            *:border-[1px] *:border-solid *:border-primary-200 *:rounded-[32px]    
                        `}>
                            <Link href={"/"} className="hover:bg-primary-200">Home</Link>
                            <Link href={"/"} className="hover:bg-primary-200">Services</Link>
                            <Link href={"/"} className="hover:bg-primary-200">About</Link>
                            <Link href={"/"} className="hover:bg-primary-200">Contact</Link>
                        </section>

                        <Link href={"/"}
                            className="py-4 px-6 flex items-center justify-center rounded-full bg-secondary-400 text-neutral-700 font-medium">
                            Get A Consultation
                        </Link>
                    </nav>

                    <Image 
                        className="h-[60px] w-[100px] self-center"
                        alt="PowFoo Logo"
                        src={Logoblue}
                    />
                </aside>
            

        </header>
    );
}