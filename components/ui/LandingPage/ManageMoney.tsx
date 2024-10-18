import Image from "next/image";
import React from "react";
import Money from "@/assets/icons/manage.jpg";
import Button from "./Button";
import Pay from "@/assets/icons/pay.jpg";

function ManageMoney() {
  return (
    <section className="pb-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 pt-[4rem] bg-no-repeat bg-contain">
            <div className="block ml-auto mr-auto w-full">
              <Image src={Pay} width={1500} height={1500} alt="paying" />
            </div>
          </div>
          <div className="col-span-12 ml-[0] md:ml-[80px] pt-[50px]">
            <h2 className="text-[46px] font-semibold leading-[57px]">
              You'r card that's always <br />
              got the best currency
            </h2>
            <p className="text-[20px] leading-[28px] font-normal text-[#444745] pt-[30px] pb-[20px]">
              Get a debit card or debit card to spend online, at the checkout,{" "}
              <br />
              and to withdraw cash in the currency you need right <br /> away.
            </p>
            <div className="flex flex-row">
              <Button
                title="Order you'r card"
                className="pt-[10px] md:pt-[13px] pb-[10px] md:pb-[13px] pl-[20px] md:pl-[40px] pr-[20px] md:pr-[40px] bg-[#9FE870] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] mr-[20px]"
              />
              <Button
                title="Learn more"
                className="pt-[10px] md:pt-[13px] pb-[10px] md:pb-[13px] pl-[20px] md:pl-[40px] pr-[20px] md:pr-[40px] bg-[#FFFFFF] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] border border-[#163300]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageMoney;
