import Image from "next/image";
import React from "react";
import Logo from "@/assets/icons/logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNavLan from "./MobileNavLan";
import Button from "./Button";
import Link from "next/link";

function NavBar() {
  return (
    <section>
      <div className="bg-[#ECEFEC]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 text-center pt-[20px] pb-[20px] bg-[#ECEFEC]">
              <p className="text-[16px] leading-[24px] tracking-[.005em] text-[#444745]">
                Big news, it now costs even less to send large amounts with
                Horizon.
                <span className="text-[#163300] underline underline-offset-4">
                  {" "}
                  See what's changed
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto ml-[80px]">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 hidden md:block md:col-span-6">
            <div className="flex flex-row pt-[30px]">
              <Image src={Logo} width={40} height={40} alt="logo" />
              <div className="pl-[70px]"></div>
              <p className="pt-[8px] pb-[5px] pl-[15px] pr-[15px] text-[15px] text-[#163300] bg-[#9FE870] rounded-[10px] font-semibold">
                Personal
              </p>
              <p className="pr-[30px]  pt-[10px]  text-[15px] text-[#163300] ml-[15px] font-semibold">
                Bussines
              </p>
              <p className=" pt-[10px]  text-[15px] text-[#163300] mr-[10px] font-semibold">
                Platform
              </p>
            </div>
          </div>
          <div className="col-span-12 hidden md:block md:col-span-6">
            <div className="flex flex-row pt-[30px]">
              <div className="font-semibold">
                <DropdownMenu>
                  <DropdownMenuTrigger className="rounded-[30px] pt-[1.5px]">
                    Features
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#ECEFEC]">
                    <DropdownMenuLabel className="text-[50px]">
                      🏡
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />{" "}
                    <DropdownMenuItem>
                      <div>
                        <p className="text-[16px] leading-[26px] font-semibold text-[#0d1f00] pt-[50x] pb-[10px]">
                          Multi-currency account
                        </p>
                        <p className="text-[15px] leading-[26px] font-normal text-[#454745] pb-[20px]">
                          Explore the account used by 16 million people to{" "}
                          <br />
                          live, work, travel and transfer money worldwide.
                        </p>
                      </div>
                    </DropdownMenuItem>
                    <div className="bg-[#163300] rounded-[10px]">
                      <DropdownMenuItem className="text-[15px] leading-[26px] font-semibold text-[#9DE66F] pt-[30px]">
                        Send money
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[15px] leading-[26px] font-semibold text-[#9DE66F] pt-[10px]">
                        Send Large Amount
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[15px] leading-[26px] font-semibold text-[#9DE66F] pt-[10px]">
                        Wise card
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[15px] leading-[26px] font-semibold text-[#9DE66F] pt-[10px] pb-[30px]">
                        Manage you'r money
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="pl-[20px] pr-[20px] font-semibold pt-[3px]">
                Pricing
              </p>
              <p className=" font-semibold pt-[4px]">Help</p>

              <Sheet>
                <SheetTrigger className="pl-[20px] font-semibold">
                  🇨🇿 EN
                </SheetTrigger>
                <SheetContent className="bg-[#FFFFFF]">
                  <SheetHeader>
                    <SheetTitle className="text-[18px] leading-[24px] font-semibold">
                      Select location and language
                    </SheetTitle>
                    <SheetDescription>
                      <p className="text-[20px] leading-[28px] pt-[100px] pl-[30px] text-[#444747]">
                        Select your language
                      </p>
                      <div className="pl-[30px] pt-[20px]">
                        <DropdownMenu>
                          <DropdownMenuTrigger>English</DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-[#FFFFFF]">
                            <div className="flex flex-row">
                              <p className="text-[30px]">🇪🇺</p>
                              <p className="pt-[10px] ml-[10px] text-[14px] leading-[24px]">
                                EURO
                              </p>
                            </div>
                            <div className="flex flex-row">
                              <p className="text-[30px]">🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
                              <p className="pt-[10px] ml-[10px] text-[14px] leading-[24px]">
                                GBP -
                              </p>
                              <p className="pt-[11px] ml-[4px] text-[14px] leading-[22px] text-[#454745]">
                                British pound
                              </p>
                            </div>
                            <div className="flex flex-row">
                              <p className="text-[30px]">🇮🇳</p>
                              <p className="pt-[10px] ml-[10px] text-[14px] leading-[24px]">
                                INR -
                              </p>
                              <p className="pt-[11px] ml-[4px] text-[14px] leading-[22px] text-[#454745]">
                                indian rupee
                              </p>
                            </div>
                            <div className="flex flex-row">
                              <p className="text-[30px]">🇺🇸</p>
                              <p className="pt-[10px] ml-[10px] text-[14px] leading-[24px]">
                                USD -
                              </p>
                              <p className="pt-[11px] ml-[4px] text-[14px] leading-[22px] text-[#454745]">
                                United States Dollar
                              </p>
                            </div>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </SheetDescription>
                    <SheetDescription>
                      <p className="text-[20px] leading-[28px] pt-[40px] pl-[30px] text-[#444747]">
                        Select your location
                      </p>
                      <div className="pl-[30px] pt-[20px]">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            Czech Republic
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <div className="flex flex-row">
                              <p className="text-[30px]">🇪🇺</p>
                              <p className="pt-[10px] ml-[10px] text-[14px] leading-[24px]">
                                EURO
                              </p>
                            </div>
                            <div className="flex flex-row">
                              <p className="text-[30px]">🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
                              <p className="pt-[10px] ml-[10px] text-[14px] leading-[24px]">
                                GBP -
                              </p>
                              <p className="pt-[11px] ml-[4px] text-[14px] leading-[22px] text-[#454745]">
                                British pound
                              </p>
                            </div>
                            <div className="flex flex-row">
                              <p className="text-[30px]">🇮🇳</p>
                              <p className="pt-[10px] ml-[10px] text-[14px] leading-[24px]">
                                INR -
                              </p>
                              <p className="pt-[11px] ml-[4px] text-[14px] leading-[22px] text-[#454745]">
                                indian rupee
                              </p>
                            </div>
                            <div className="flex flex-row">
                              <p className="text-[30px]">🇺🇸</p>
                              <p className="pt-[10px] ml-[10px] text-[14px] leading-[24px]">
                                USD -
                              </p>
                              <p className="pt-[11px] ml-[4px] text-[14px] leading-[22px] text-[#454745]">
                                United States Dollar
                              </p>
                            </div>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </SheetDescription>
                    <div className="pt-[200px]">
                      <Button
                        title="Confirm Changes"
                        className="pt-[13px] pb-[13px] pl-[40px] pr-[40px] bg-[#9FE870] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300]  w-full"
                      />
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Link href="/sign-in">
                {" "}
                <p className="pl-[20px] pr-[20px] font-semibold pt-[5px]">
                  Log in
                </p>
              </Link>
              <Link href="/sign-up">
                <p className="pt-[5px] pb-[5px] pl-[15px] pr-[15px] text-[15px] text-[#163300] bg-[#9FE870] rounded-[10px] font-semibold">
                  Register
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MobileNavLan className="block md:hidden justify-end text-right pt-[20px]" />
    </section>
  );
}

export default NavBar;
