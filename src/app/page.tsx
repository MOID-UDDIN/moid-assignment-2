import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}
