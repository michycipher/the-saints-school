import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center   bg-blue-100 h-screen">
        <Navbar />
        <Hero />
        {/* <h1 className="font-prata text-5xl">
          Education, reimagined for <span className="font-kaushan">young minds</span>
        </h1>

        <p className="font-manrope text-lg mt-4">
          This paragraph uses Manrope.
        </p> */}

      </main>
    </>
  )
}
