import ForPeople from "@/components/ui/LandingPage/ForPeople";
import Fotter from "@/components/ui/LandingPage/footer";
import Hero from "@/components/ui/LandingPage/Hero";
import ManageMoney from "@/components/ui/LandingPage/ManageMoney";
import MeetPeople from "@/components/ui/LandingPage/MeetPeople";
import NavBar from "@/components/ui/LandingPage/NavBar";
import Trusted from "@/components/ui/LandingPage/Trusted ";

function page() {
  return (
    <section className="bg-[#FFFFFF]">
      <div>
        <NavBar />
        <Hero />
        <ManageMoney />
        <Trusted />
        <ForPeople />
        <MeetPeople />
        <Fotter />
      </div>
    </section>
  );
}

export default page;
