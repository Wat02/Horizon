import React from "react";
import Countrys from "./Countrys";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";

function Fotter() {
  return (
    <section className="bg-[#ECEFEC]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <h2 className="pt-[50px] text-[46px] leading-[57px] font-semibold pb-[30px]">
              Wise works nearly everywhere
            </h2>
            <button className="bg-[#9FE870] pt-[5px] pb-[5px] pr-[20px] pl-[20px] rounded-[10px] font-medium">
              Account details
            </button>
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🏴󠁧󠁢󠁥󠁮󠁧󠁿"
              name="British pound"
              code="Swift/BIC, UK sort code, Account number and IBAN"
              account="Get GBP account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇪🇺"
              name="Euro"
              code="Swift/BIC and IBAN"
              account="Get EURO account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇦🇺"
              name="Australian dollar"
              code="BSB code and Account number"
              account="Get AUD account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇵🇱"
              name="Polish złoty"
              code="Swift/BIC and IBAN"
              account="Get POL account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇨🇳"
              name="Chinese yuan"
              code="Swift/BIC, UK sort code, Account number and IBAN"
              account="Get GPN account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇩🇰"
              name="Danish krone"
              code="Registration number, Swift/BIC, Account number and IBAN"
              account="Get DKK account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇭🇺"
              name="Hungarian forint"
              code="BSB code and Account number"
              account="Get HUF account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇨🇿"
              name="Czech koruna"
              code="Swift/BIC and IBAN"
              account="Get CZK account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇦🇪"
              name="UAE dirham"
              code="Swift/BIC and IBAN"
              account="Get AED account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇧🇬"
              name="Bulgarian lev"
              code="Swift/BIC and IBAN"
              account="Get BGN account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇨🇦"
              name="Canadian dollar"
              code="Institution number, Transit number, Swift/BIC and Account number"
              account="Get CAN account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇨🇭"
              name="Swiss franc"
              code="Swift/BIC and IBAN"
              account="Get CHF account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇮🇱"
              name="Israeli shekel"
              code="Swift/BIC and IBAN"
              account="Get ILS account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇯🇵"
              name="Japanese yen"
              code="Swift/BIC and IBAN"
              account="Get JPY account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇳🇴"
              name="Norwegian krone"
              code="Swift/BIC, Account number and IBAN"
              account="Get NOK account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇸🇪"
              name="Swedish krona"
              code="Swift/BIC, Clearing number, Account number and IBAN"
              account="Get POL account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇹🇷"
              name="Turkish lira"
              code="Swift/BIC and IBAN"
              account="Get TRY account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇷🇺"
              name="Russian rubl"
              code="Swift/BIC, Account number and IBAN"
              account="Get RUB account details"
            />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <Countrys
              flag="🇷🇸"
              name="Serbian dinar"
              code="Swift/BIC, Clearing number, Account number and IBAN"
              account="Get RSD account details"
            />
          </div>

          <div className="col-span-12 pt-[40px] pb-[40px] pr-[30px] pl-[30px] mt-[100px] rounded-[30px]"></div>
          <div className="col-span-12 md:col-span-3 block mx-auto pt-[50px] pb-[50px]">
            <Image src={Logo} width={50} height={50} alt="logo" />
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px] text-center ">
            <p className="text-[14px] leading-[20px] font-medium text-[#444745] underline underline-offset-4 pb-[5px]">
              Legal
            </p>
            <p className="text-[14px] leading-[20px] font-medium text-[#444745] underline underline-offset-4 pb-[5px]">
              Complains
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px] text-center">
            <p className="text-[14px] leading-[20px] font-medium text-[#444745] underline underline-offset-4 pb-[5px]">
              Privacy Policy
            </p>
            <p className="text-[14px] leading-[20px] font-medium text-[#444745] underline underline-offset-4 pb-[5px]">
              Country side map
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px] text-center">
            <p className="text-[14px] leading-[20px] font-medium text-[#444745] underline underline-offset-4 pb-[5px]">
              Cookie policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fotter;
