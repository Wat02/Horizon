import React from "react";
import Link from "next/link";
import Image from "next/image";
import Plus from "@/assets/icons/plus.svg";
import BankCard from "./BankCard";
import { Progress } from "@/components/ui/progress";

function RightSidebar({ user, transactions, banks }: RightSidebarProps) {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-[100px]">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-[#1C80FD]">
              {user.firstName[0]}
            </span>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">Details card</h2>
          <Link href="/" className="flex gap-2">
            <Image src={Plus} width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text-gray-600">add Bank</h2>
          </Link>
        </div>

        <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
          <div className="relative z-10">
            <BankCard />
          </div>
        </div>
        <div className="pt-[20px]">
          <p className="uppercase pb-[5px] text-[15px]">Card number</p>
          <p className="text-extrabold text-[20px]">8465 3481 4985 4080</p>
        </div>
        <div className="flex flex-row gap-[40px]">
          <div className="uppercase">
            <p className="text-[#242732] text-[16px]">expire date</p>
            <p className="font-bold">08/28</p>
          </div>
          <div className="uppercase  text-[16px]">
            <p>cvv</p>
            <p className="font-bold">848</p>
          </div>
          <div className="uppercase  text-[16px]">
            <p>level</p>
            <p className="font-bold">02</p>
          </div>
        </div>
        <div className="pt-[20px]">
          <p className="uppercase pb-[5px] text-[15px] font-bold">
            Spending limits
          </p>
          <p className="text-[15px] font-medium">Daily transactions limit</p>
          <div className="pb-[10px] pt-[10px]">
            {" "}
            <Progress value={70} />
          </div>
          <p className="text-[15px] font-semibold">400$ spent on $2.500.000</p>
        </div>
      </section>
    </aside>
  );
}

export default RightSidebar;
