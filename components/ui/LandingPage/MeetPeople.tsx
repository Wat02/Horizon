import React from "react";
import planet2 from "@/assets/icons/planet2.png";
import Image from "next/image";
import Button from "./Button";
import hat from "@/assets/icons/hat.png";

function MeetPeople() {
  return (
    <section className="pt-[100px]  pb-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12 bg-[#163300] rounded-[30px]">
            <div className="pb-[30px]">
              <Image
                src={planet2}
                width={500}
                height={500}
                alt="planet"
                className="justify-center text-center block m-auto z-50"
              />
            </div>
            <h2 className="text-[30px] md:text-[70px] leading-[40px] md:leading-[76px] font-extrabold text-[#9FE870] text-center uppercase">
              Meet money <br />
              without borders
            </h2>
            <p className="text-center pt-[20px] text-[20px] leading-[28px] font-semibold text-[#E8EBE5]">
              We’re building the best way to move and manage the world’s money.
              Min fees. <br />
              Max ease. Full speed.
            </p>
            <div className="pb-[80px] pt-[30px] justify-center text-center">
              <Button
                title="Learn about our mission"
                className="pt-[10px] md:pt-[13px] pb-[10px] md:pb-[13px] pl-[20px] md:pl-[40px] pr-[20px] md:pr-[40px] bg-[#9FE870] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] "
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 pl-[0] md:pl-[50px]">
            <h2 className="text-[62px] leading-[68px] font-semibold pt-[100px] pb-[30px]">
              Disappoint thieves
            </h2>
            <p className="text-[20px] leading-[28px] font-normal text-[#454745]">
              Every quarter, our customers trust us to move over <br />
              £30 billion of their money. Here are some of the <br />
              important ways we protect them.
            </p>
            <div className="pt-[10px]">
              <Button
                title="How we keep you'r money safe"
                className="pt-[10px] md:pt-[13px] pb-[10px] md:pb-[13px] pl-[20px] md:pl-[40px] pr-[20px] md:pr-[40px] bg-[#9FE870] rounded-[20px] text-[16ox] leading-[24px] font-semibold text-[#163300] mr-[20px]"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 mx-auto hidden md:block pt-[30px] ">
            <Image src={hat} width={500} height={500} alt="card" />
          </div>
          <div className="col-span-12 md:col-span-4 pt-[50px] md:pt-[0]">
            <p className="text-[50px]">🔒</p>
            <p className="text-[18px] leading-[26px] font-semibold text-[#444745] pt-[5px]">
              Our dedicated fraud and security teams <br />
              work to keep your money safe
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 pt-[50px] md:pt-[0]">
            <p className="text-[50px]">📱</p>
            <p className="text-[18px] leading-[26px] font-semibold text-[#444745] pt-[5px]">
              We use 2-factor authentication to protect <br />
              your account
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 pt-[50px] md:pt-[0]">
            <p className="text-[50px]">🏫</p>
            <p className="text-[18px] leading-[26px] font-semibold text-[#444745] pt-[5px]">
              We hold your money with established <br />
              financial institutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetPeople;
