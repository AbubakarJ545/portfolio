import Image from "next/image";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import ExperienceCard from "./component/ExperienceCard";
import EducationCard from "./component/EducationCard";
import ConnectSection from "./component/ConnectSection";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <Projects />
      <Skills />
      <ExperienceCard />
      <EducationCard />
      <ConnectSection />
      <Footer />
    </>
  );
}
