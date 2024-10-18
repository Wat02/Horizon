import HeaderBox from "@/components/ui/HeaderBox";
import ResentTransations from "@/components/ui/ResentTransations";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

function Home() {
  const loggedIn = {
    firstName: "Mark",
    lastName: "Markovic",
    email: "Example@gmail.com",
    city: "New York",
    state: "🇷🇸",
    dateOfBirth: "20.3.1999",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user="Mark"
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox />
        </header>
        <ResentTransations />
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[]} />
    </section>
  );
}

export default Home;
