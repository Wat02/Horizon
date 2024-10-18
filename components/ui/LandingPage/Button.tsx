import React from "react";

function Button({ title, className }: { title: string; className: string }) {
  return (
    <div className="pt-[25px]">
      <button className={className}>{title}</button>
    </div>
  );
}

export default Button;
