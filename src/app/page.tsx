import Navbar from "../components/Navbar";
import Slide2 from "../components/Slide2";
import { LanguageProvider } from "../context/LanguageContext"
import Slide3 from "../components/Slide3";
import Slide4 from "../components/Slide4";
import Slide7 from "../components/Slide7";
import Slide6 from "../components/Slide6";
export default function LandingPage() {
  return (
    <LanguageProvider>
    <div id="container" className="w-full h-full flex flex-col overflow-y-auto snap-y snap-mandatory">
       <Navbar />
      <section id="slide1" className="w-full h-[100vh] bg-black flex justify-center items-center snap-start">
          <div className="relative w-full h-full overflow-hidden scroll-snap-align-end">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
          <source src="/media/logo-fix-5.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section id="slide2" className="w-full h-[100vh] bg-gray-800 flex justify-center items-center snap-start">
         <Slide2 />
      </section>

      <section id="slide3" className="w-full h-[100vh] bg-white flex justify-center items-center snap-start">
         <Slide3/>
      </section>

      <section id="slide4" className="w-full h-[100vh] bg-blue-500 text-white flex justify-center items-center snap-start">
         <Slide4/>
      </section>

      <section id="slide5" className="w-full h-[100vh] bg-purple-600 text-white flex justify-center items-center snap-start">
      </section>

      <section id="slide6" className="w-full h-[100vh] bg-gray-900 text-white flex justify-center items-center snap-start">
        <Slide6/>
      </section>

      <section id="slide7" className="w-full h-[100vh] bg-gray-900 text-white flex justify-center items-center snap-start">
         <Slide7/>
      </section>
    </div>
    </LanguageProvider>
  );
}
