import Image from "next/image";
import React from "react";
import Card from "@/assets/icons/card2.png";
import Button from "./Button";

function Trusted() {
  return (
    <section className="bg-[#9FE870] pb-[0px] md:pb-[0]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 pt-[50px]">
            <h2 className="text-[50px] md:text-[70px] leading-[60px] md:leading-[75px] font-black text-[#163300] uppercase ml-[0] md:ml-[90px]">
              Trusted by businesses <br /> small and large
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-none	">
            <Image
              src={Card}
              width={500}
              height={500}
              alt="cards"
              className="ml-[0] md:ml-[100px] pt-[10px]"
            />
          </div>
          <div className="col-span-12 md:col-span-6 pt-[20px] md:pt-[200px]">
            <p className="text-[20px] md:text-[25px] leading-[26px] md:leading-[38px] font-normal">
              Go global with the international business <br />
              account. Pay employees, get paid and <br />
              manage your cash flow in multiple <br />
              currencies. Join over 300,000 businesses <br />
              thriving with Horizon.
            </p>
            <div className="block md:flex flex-row">
              <Button
                title="Open a Business account"
                className="pt-[13px] pb-[13px] pl-[30px] pr-[30px] bg-[#163300] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#9FE870] mr-[20px]"
              />
              <Button
                title="Learn more"
                className="pt-[13px] pb-[13px] pl-[40px] pr-[40px] bg-[#9FE870] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] border border-[#163300]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
