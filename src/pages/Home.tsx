import Hero from "../components/home/Hero";
import Recap from "../components/home/Recap";
import Mission from "../components/home/Mission";
import Vision from "../components/home/Vision";
import Team from "../components/home/Team";
import Sponsors from "../components/home/Sponsors";
import CallToAction from "../components/home/CallToAction";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Recap />
      <Mission />
      <Vision />
      <Team />
      <Sponsors />
      <CallToAction />
      <Contact />
    </>
  );
}
