import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "@/assets/icons/hamburger.svg";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import Button from "./Button";
import Link from "next/link";

function MobileNavLan({ className }: { className: string }) {
  return (
    <section className={className}>
      <div className="mx-auto container">
        <div className="">
          <div className="col-span-12">
            <Sheet>
              <SheetTrigger>
                <Image
                  src={Hamburger}
                  width={30}
                  height={30}
                  alt="hamburger menu"
                />
              </SheetTrigger>
              <SheetContent className="bg-[#FFFFFF]">
                <SheetHeader>
                  <Image src={Logo} width={40} height={40} alt="logo" />
                  <SheetTitle className="text-left pt-[10px]">
                    Horizon
                  </SheetTitle>
                  <p className="text-left pt-[10px] text-[18px] font-medium">
                    Features
                  </p>
                  <p className="text-left pt-[10px] text-[18px] font-medium">
                    Pricing
                  </p>
                  <p className="text-left pt-[10px] text-[18px] font-medium">
                    Help
                  </p>
                  <div className="flex flex-row gap-40 pt-[20px]">
                    {" "}
                    <p>🇨🇿</p>
                    <p>EN</p>
                  </div>
                  <Link href="/sign-up">
                    <Button
                      title="Register"
                      className="pt-[10px] pb-[10px] pl-[30px] pr-[30px] bg-[#9FE870] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] w-full"
                    />
                  </Link>
                  <Link href="/sign-in">
                    <Button
                      title="Login"
                      className="pt-[10px] pb-[10px] pl-[30px] pr-[30px] bg-[#9FE870] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] w-full"
                    />
                  </Link>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileNavLan;
