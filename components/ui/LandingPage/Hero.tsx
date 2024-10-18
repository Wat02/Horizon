import React from "react";
import Button from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

function Hero() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6 pt-[50px] md:pt-[150px]">
            <h1 className="text-[60px] md:text-[75px] leading-[57px] md:leading-[65px] font-extrabold uppercase text-[#0E0F0C]">
              Send money <br />
              to anyone
              <br />
              for less
            </h1>
            <p className="pt-[20px] leading-[26px] tracking-[.01em] text-[18px] font-semibold text-[#444745]">
              Move your money where it matters. Save on <br />
              international transfers and spend money worldwide, <br />
              without any hidden fees.
            </p>
            <Button
              title="Open an Account"
              className="pt-[15px] pb-[15px] pl-[30px] pr-[30px] bg-[#9FE870] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] "
            />
          </div>
          <div className="col-span-12 md:col-span-6 bg-[#FFFFFF] pt-[90px] ml-[0] md:ml-[100px] ">
            <p className="pb-[10px] text-[14px] font-normal leading-[20px] text-[#444745]">
              You send exactly
            </p>
            <div className="flex flex-rows">
              <Input
                className="w-[400px] text-[20px] pt-[30px] pb-[30px] rounded-[10px] border border-[#868685]"
                placeholder="10,000"
              />
              <div className="ml-[20px] pt-[10px] md:pt-[20px]">
                <DropdownMenu>
                  <DropdownMenuTrigger>🇨🇿 CZK</DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#FFFFFF]">
                    <DropdownMenuLabel>
                      {" "}
                      <Input
                        className="w-[300px] text-[18px] pt-[20px] pb-[20px] rounded-[10px] border border-[#868685]"
                        placeholder="type a currency / country"
                      />
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Popular currencies</DropdownMenuItem>
                    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                      <div className="flex flex-row">
                        <p className="text-[30px]">🇨🇿</p>
                        <p className="pt-[10px] ml-[10px] text-[14px] leading-[24px]">
                          CZK -
                        </p>
                        <p className="pt-[11px] ml-[4px] text-[14px] leading-[22px] text-[#454745]">
                          Czech koruna
                        </p>
                      </div>
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
                    </ScrollArea>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="pt-[20px] pb-[20px]">
                <p className=" pb-[10px] md:pb-[5px] text-[16px] leading-[26px] font-semibold">
                  0 CZK
                </p>
                <p className=" pb-[10px] md:pb-[5px] text-[16px] leading-[26px] font-semibold">
                  55 CZK
                </p>
                <p className="pb-[10px] md:pb-[0] text-[16px] leading-[26px] font-semibold">
                  55.39
                </p>

                <div className="pt-[20px]">
                  {" "}
                  <p className=" pb-[35px] md:pb-[5px] text-[16px] leading-[26px] font-semibold">
                    9,9 CZK
                  </p>
                  <p className="text-[16px] leading-[26px] font-semibold">
                    25.0605
                  </p>
                </div>
              </div>
              <div className="ml-[100px] md:ml-[280px]">
                <DropdownMenu>
                  <DropdownMenuTrigger className="pt-[20px] underline underline-offset-4 font-semibold pb-[10px] md:pb-[5px]">
                    Bank transfer fee
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#FFFFFF] pt-[20px] pb-[20px] pr-[100px] pl-[10px]">
                    <DropdownMenuLabel className="text-[14px] leading-[20px] font-medium text-[#444745] ">
                      Payment methods
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-[16px] leading-[24px] font-normal">
                      Bank transfer -{" "}
                      <span className="text-[14px] leading-[22px] text-[#454745] pl-[2px]">
                        no extra fees
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-[16px] leading-[24px] font-normal">
                      Debit card -{" "}
                      <span className="text-[14px] leading-[22px] text-[#454745] pl-[2px]">
                        94.11 CZK fee
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-[16px] leading-[24px] font-normal">
                      Credit card -{" "}
                      <span className="text-[14px] leading-[22px] text-[#454745] pl-[2px]">
                        156.44 CZK fee
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div>
                  {" "}
                  <p className=" pb-[10px] md:pb-[5px] text-[16px] leading-[26px] font-normal text-[#515653]">
                    Our fee
                  </p>
                  <p className="pb-[10px] md:pb-[0] text-[16px] leading-[26px] font-normal text-[#515653]">
                    Total fees
                  </p>
                </div>
                <div className="pt-[20px]">
                  <p className=" pb-[10px] text-[16px] leading-[26px] font-normal text-[#515653]">
                    Total amount we’ll convert
                  </p>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-[16px] leading-[26px] font-semibold">
                      Guaranteed rate
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#FFFFFF]">
                      <DropdownMenuLabel className="text-[18px] leading-[24px] font-semibold text-[#444745] ">
                        Guaranteed rate
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-[14px] leading-[26px] text-[#515653]">
                        You’ll get this rate as long as we <br />
                        receive your 10,000 CZK within the <br />
                        next 70 hours.
                      </DropdownMenuItem>
                      <DropdownMenuItem>Learn more</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            <div>
              <p className="pb-[10px] text-[14px] font-normal leading-[20px] text-[#444745]">
                Recipient gets
              </p>
              <div className="flex flex-row">
                <Input
                  className="w-[400px] text-[20px] pt-[30px] pb-[30px] rounded-[10px] border border-[#868685]"
                  placeholder="389.82"
                />
                <div className="ml-[20px] pt-[10px] md:pt-[20px]">
                  <DropdownMenu>
                    <DropdownMenuTrigger>🇪🇺 EURO</DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#FFFFFF]">
                      <DropdownMenuLabel>
                        {" "}
                        <Input
                          className="w-[300px] text-[18px] pt-[20px] pb-[20px] rounded-[10px] border border-[#868685]"
                          placeholder="type a currency / country"
                        />
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Popular currencies</DropdownMenuItem>
                      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                        <div className="flex flex-row">
                          <p className="text-[30px]">🇨🇿</p>
                          <p className="pt-[10px] ml-[10px] text-[14px] leading-[24px]">
                            CZK -
                          </p>
                          <p className="pt-[11px] ml-[4px] text-[14px] leading-[22px] text-[#454745]">
                            Czech koruna
                          </p>
                        </div>
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
                      </ScrollArea>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <p className="pt-[20px] text-[19px] font-semibold leading-[24px] pb-[5px]">
                <span className="text-[18px] font-normal leading-[24px] text-[#444745]">
                  You could save up to
                </span>{" "}
                410.51 CZK
              </p>
              <p className=" text-[19px] font-semibold leading-[24px] pb-[5px]">
                {" "}
                <span className="text-[18px] font-normal leading-[24px] text-[#444745] mr-[5px]">
                  Should arrive
                </span>
                by Monday
              </p>
              <div className="flex flex-row">
                <Button
                  title="Compare fees"
                  className="pt-[10px] md:pt-[13px] pb-[10px] md:pb-[13px] pl-[20px] md:pl-[40px] pr-[20px] md:pr-[40px] bg-[#FFFFFF] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] border border-[#163300]
"
                />
                <Button
                  title="Send money"
                  className="pt-[10px] md:pt-[13px] pb-[10px] md:pb-[13px] pl-[20px] md:pl-[40px] pr-[20px] md:pr-[40px] bg-[#9FE870] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] ml-[20px]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-wrap-row pt-[80px] text-center justify-center">
            <span className="mr-[20px] text-[50px]">🏡</span>
            <p className="text-start text-[16px] font-semibold leading-[24px] pt-[13px]">
              Horizon is regulated by the{" "}
              <span className="text-[#163300] underline underline-offset-4">
                National Bank <br />
                of Serbia
              </span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-wrap-row pt-[80px] text-center justify-center">
            <span className="mr-[20px] text-[50px]">👨‍👩‍👧‍👦</span>
            <p className="text-start text-[16px] font-semibold leading-[24px] pt-[13px]">
              10m customers move £30bn with Horizon <br />
              every quarter
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-wrap-row pt-[80px] text-center justify-center">
            <span className="mr-[20px] text-[50px]">⭐️</span>
            <p className="text-start text-[16px] font-semibold leading-[24px] pt-[13px]">
              Our average score on{" "}
              <span className="text-[#163300] underline underline-offset-4">
                {" "}
                Trustpilot
              </span>{" "}
              is 4.3 <br />
              out of 5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
