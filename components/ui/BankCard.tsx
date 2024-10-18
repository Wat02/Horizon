import { formatAmount } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import mastercard from "@/assets/icons/mastercard.svg";
import lines from "@/assets/icons/lines.png";
import Paypass from "@/assets/icons/Paypass.svg";

function BankCard() {
  return (
    <div className="flex flex-col">
      <div className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">Mark</h1>
            <p className="font-ibm-plex-serif font-black text-white">100000$</p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">Jovan</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">235</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image src={Paypass} width={20} height={24} alt="pay" />
          <Image
            src={mastercard}
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        <Image
          src={lines}
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </div>
    </div>
  );
}

export default BankCard;
