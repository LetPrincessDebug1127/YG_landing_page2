import Navbar from "../components/Navbar";
import Slide2 from "../components/Slide2"
export default function LandingPage() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto scroll-snap-y snap-mandatory">
       <Navbar />
      <section id="slide1" className="w-full h-[100vh] bg-gray-800 flex justify-center items-center scroll-snap-start">
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

      <section id="slide2" className="w-full h-[100vh] bg-gray-100 flex justify-center items-center scroll-snap-start">
         <Slide2 />
      </section>

      <section id="slide3" className="w-full h-[100vh] bg-white flex justify-center items-center scroll-snap-start">
      </section>

      <section id="slide4" className="w-full h-[100vh] bg-blue-500 text-white flex justify-center items-center scroll-snap-start">
      </section>

      <section id="slide5" className="w-full h-[100vh] bg-purple-600 text-white flex justify-center items-center scroll-snap-start">
      </section>

      <section id="slide6" className="w-full h-[100vh] bg-indigo-700 text-white flex justify-center items-center scroll-snap-start">
      </section>

      <section id="slide7" className="w-full h-[100vh] bg-gray-900 text-white flex justify-center items-center scroll-snap-start">
      </section>
    </div>
  );
}
