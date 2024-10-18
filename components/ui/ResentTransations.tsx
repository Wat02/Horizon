import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankInfo from "./BankInfo";
import mastercard from "@/assets/icons/mastercard.svg";
import Image from "next/image";
import ChartSec from "@/components/ui/ChartSec";

function ResentTransations() {
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Resent Transations</h2>
        <Link href="/" className="view-all-btn">
          View all
        </Link>
      </header>
      <Tabs className="container mx-auto w-full">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6 w-[80%]">
            <ChartSec accounts={[]} />{" "}
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="pl-[15px]">Resent Transactions</p>
            <div className="flex flex-row gap-36">
              <div className="pt-[10px]">
                <p className="text-[15px] font-semibold flex flex-row ">
                  <Image
                    src={mastercard}
                    width={70}
                    height={70}
                    alt="mastercard"
                  />{" "}
                  International <br />
                  Payment
                </p>
              </div>
              <div className="pt-[20px]">
                <p className="text-[18px] text-[#1455FB] font-bolds">$400</p>
              </div>
            </div>
            <div className="flex flex-row gap-36">
              <div className="pt-[10px]">
                <p className="text-[15px] font-semibold flex flex-row ">
                  <Image
                    src={mastercard}
                    width={70}
                    height={70}
                    alt="mastercard"
                  />{" "}
                  International <br />
                  Payment
                </p>
              </div>
              <div className="pt-[20px]">
                <p className="text-[18px] text-[#EC0106] font-bolds">$400</p>
              </div>
            </div>
            <div className="flex flex-row gap-36">
              <div className="pt-[10px]">
                <p className="text-[15px] font-semibold flex flex-row ">
                  <Image
                    src={mastercard}
                    width={70}
                    height={70}
                    alt="mastercard"
                  />{" "}
                  International <br />
                  Payment
                </p>
              </div>
              <div className="pt-[20px]">
                <p className="text-[18px] text-[#1455FB] font-bolds">$400</p>
              </div>
            </div>
            <div className="flex flex-row gap-36">
              <div className="pt-[10px]">
                <p className="text-[15px] font-semibold flex flex-row ">
                  <Image
                    src={mastercard}
                    width={70}
                    height={70}
                    alt="mastercard"
                  />{" "}
                  International <br />
                  Payment
                </p>
              </div>
              <div className="pt-[20px]">
                <p className="text-[18px] text-[#EC0106] font-bolds">$900</p>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

export default ResentTransations;
