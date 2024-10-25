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
import Button from "./LandingPage/Button";
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
                  <Link href="/">
                    <Image src={Logo} width={40} height={40} alt="logo" />
                  </Link>
                  <SheetTitle className="text-left pt-[10px] font-bold">
                    Horizon
                  </SheetTitle>
                  <p className="text-left pt-[10px] text-[18px] font-medium">
                    🏠 Home
                  </p>
                  <p className="text-left pt-[10px] text-[18px] font-medium">
                    🏦 My Banks
                  </p>
                  <p className="text-left pt-[10px] text-[18px] font-medium">
                    📚 Transaction History
                  </p>
                  <p className="text-left pt-[10px] text-[18px] font-medium">
                    📝 Transfer Funds
                  </p>

                  <Link href="/">
                    <Button
                      title="Login Out"
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
