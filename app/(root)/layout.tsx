import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import MobileNav from "@/components/ui/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar
        user={{
          email: "Example@gmail.com",
          firstName: "Mark",
          lastName: "",
          city: "",
          dateOfBirth: "",
          state: "",
        }}
      />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={logo} width={30} height={30} alt="logo" />
          <div>
            <MobileNav className={""} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
