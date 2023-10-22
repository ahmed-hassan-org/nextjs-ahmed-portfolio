import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactCard from "@/components/shared/ContactCard";
import ExperinceCard from "@/components/shared/ExperinceCard/ExperinceCard";
import ProfileHeader from "@/components/shared/ProfileHeader";
import TechSkillCard from "@/components/shared/TechSkillCard";
import TestimonialCard from "@/components/shared/TestimonialCard/TestimonialCard";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <ProfileHeader />
      <TechSkillCard />
      <ExperinceCard />
      <TestimonialCard />
      <ContactCard />
      <Footer />
    </main>
  );
}
