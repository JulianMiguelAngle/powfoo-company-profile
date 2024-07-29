import LogoWhite from "@/app/assets/Logo white.svg";

import Image from "next/image";

export function Footer() {
    return (
        <footer className="rubik text-neutral-700 text-center py-3 px-8 md:px-[60px] bg-neutral-0 flex flex-col md:flex-row gap-8 items-center justify-between">
            <Image 
                className="h-[60px] w-[120px] md:w-[150px] object-cover"
                alt="PowFoo Logo"
                src={LogoWhite}
            />

            <p className="text-body-small sm:text-body-medium lg:text-body-large leading-label-small sm:leading-label-medium lg:leading-label-large tracking-label-small">
                Copyright © PowFoo 2013
            </p>
        </footer>
    );
}