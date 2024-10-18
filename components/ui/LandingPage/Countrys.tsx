import React from "react";

function Countrys({
  flag,
  name,
  code,
  account,
}: {
  flag: string;
  name: string;
  code: string;
  account: string;
}) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12 md:col-span-12">
          <p className="text-[60px]">{flag}</p>
          <p className="text-[16px] font-semibold leading-[24px] pt-[10px]">
            {name}
          </p>
          <p className="text-[16px] leading-[24px] font-normal text-[#646764] pt-[5px] pb-[5px]">
            {code}
          </p>
          <p className="text-[16px] leading-[24px] font-semibold text-[#163300] underline underline-offset-4">
            {account}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Countrys;
