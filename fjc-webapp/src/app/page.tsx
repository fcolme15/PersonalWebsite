import Nav from "@/components/Nav";
import Footer from "@/components/Footer"
import ButtonGradient from "@/assets/svg/ButtonGradient";
import About from "@/components/About";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav/>
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ButtonGradient/>
    </div>
  );
}


export const metadata = {
  title: "FranciscoJC"
};
