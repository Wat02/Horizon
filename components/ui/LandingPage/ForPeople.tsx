import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Button from "./Button";

function ForPeople() {
  return (
    <section className="pt-[50px] md:pt-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-7">
            <h2 className="pt-[50px] md:pt-[150px] text-[40px] md:text-[80px] leading-[50px] md:leading-[76px] font-extrabold uppercase">
              For people <br />
              going places
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 pt-[50px]">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="bg-[#163300] ">
                  <div className="pl-[50px]">
                    <p className="text-[100px] pt-[50px] pb-[30px]">🇺🇸</p>
                    <p className="text-[#9DE66F] text-[20px] md:text-[32px] leading-[38px] md:leading-[48px] font-bold pb-[30px]">
                      "Always fast transactions <br />
                      and good fees. An <br />
                      invaluable online bank for <br />
                      those who live outside <br />
                      their own country or <br />
                      are frequent travellers."
                    </p>
                    <div className="pb-[80px]">
                      <Button
                        title="Stuart on Trustpilot"
                        className="pt-[10px] md:pt-[13px] pb-[10px] md:pb-[13px] pl-[20px] md:pl-[40px] pr-[20px] md:pr-[40px] bg-[#9FE870] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] mr-[20px]"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="bg-[#9FE870] ">
                  <div className="pl-[50px]">
                    <p className="text-[100px] pt-[50px] pb-[30px]">🇮🇹</p>
                    <p className="text-[#163300]  text-[20px] md:text-[32px] leading-[38px] md:leading-[48px]  font-bold pb-[30px]">
                      "They make our life split <br />
                      between two continents <br />
                      possible. Transfers are <br />
                      simple and very, very fast."
                    </p>
                    <div className="pb-[80px]">
                      <Button
                        title="Stuart on Trustpilot"
                        className="pt-[10px] md:pt-[13px] pb-[10px] md:pb-[13px] pl-[20px] md:pl-[40px] pr-[20px] md:pr-[40px] bg-[#163300] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#9FE870] mr-[20px]"
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="bg-[#9FE870]">
                  <div className="pl-[50px]">
                    <p className="text-[100px] pt-[50px] pb-[30px]">🇷🇸</p>
                    <p className="text-[#163300] text-[20px] md:text-[32px] leading-[28px] md:leading-[48px] font-bold pb-[30px]">
                      "I use Horizon to pay a <br />
                      mortgage in a different <br />
                      country each month. <br />
                      Superb. That simple."
                    </p>
                    <div className="pb-[80px]">
                      <Button
                        title="Stuart on Trustpilot"
                        className="pt-[10px] md:pt-[13px] pb-[10px] md:pb-[13px] pl-[20px] md:pl-[40px] pr-[20px] md:pr-[40px] bg-[#163300] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#9FE870] mr-[20px]"
                      />
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex " />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForPeople;
