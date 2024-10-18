"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/icons/logo.svg";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src={logo}
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        <div className="flex flex-col">
          <Link
            className="text-[#111828] text-[20px] leading-[30px] font-normal pb-[20px]"
            href="/"
          >
            🏠 Home
          </Link>
          <Link
            className="text-[#111828] text-[20px] leading-[30px] font-normal pb-[20px]"
            href="/"
          >
            🏦 My Banks
          </Link>
          <Link
            className="text-[#111828] text-[20px] leading-[30px] font-normal pb-[20px]"
            href="/"
          >
            📚 Transaction History
          </Link>
          <Link
            className="text-[#111828] text-[20px] leading-[30px] font-normal pb-[20px]"
            href="/"
          >
            📝 Transfer Funds
          </Link>
        </div>
      </nav>
      <div>
        <p className="text-[#111828] text-[20px] leading-[30px] font-bold">
          {user.firstName}
        </p>
        <p className="text-[#5A5A5A] text-[18px] leading-[24px] font-normals">
          {user.email}
        </p>
        <div className="pt-[10px]">
          <Link href="/">
            <button className="pt-[5px] pb-[5px] pl-[30px] pr-[30px] bg-[#9FE870] rounded-[10px] text-[16ox] leading-[24px] font-semibold text-[#163300]">
              ⏎
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
