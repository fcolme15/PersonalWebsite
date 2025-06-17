import Nav from "@/components/Nav";
import Footer from "@/components/Footer"
import ButtonGradient from "@/assets/svg/ButtonGradient";
import About from "@/components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav/>
      <div className="min-h-100"/>
      <About/>
      <Contact/>
      <Footer/>
      <ButtonGradient/>
    </div>
  );
}


export const metadata = {
  title: "FranciscoJC"
};
