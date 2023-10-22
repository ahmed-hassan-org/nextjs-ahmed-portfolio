import Footer from "@/components/layout/Footer";
import ContactCard from "@/components/shared/ContactCard";
import ExperinceCard from "@/components/shared/ExperinceCard/ExperinceCard";
import ProfileHeader from "@/components/shared/ProfileHeader";
import TechSkillCard from "@/components/shared/TechSkillCard";
import TestimonialCard from "@/components/shared/TestimonialCard/TestimonialCard";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/layout/Navbar"), {
  loading: () => <p>Loading...</p>,
});

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
// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   const { locale } = context;
//   return {
//     props: {
//       ...(await serverSideTranslations((locale as string) ?? "en")),
//     },
//   };
// };
