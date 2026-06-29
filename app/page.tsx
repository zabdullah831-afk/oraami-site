import Navbar from "./components/navbar"
import Hero from "./components/herosection"
import TrustBar from "./components/trustbar"
import Heroimg from "./components/heroimg"
export default function Home() {
  return (
    <main>
    <Navbar/>
    <Hero/>
    <Heroimg/>
    <TrustBar/>
    </main>
  );
}
