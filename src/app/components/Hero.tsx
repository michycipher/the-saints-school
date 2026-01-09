import Image from "next/image"


const Hero = () => {
  return (
    <div className="">

      <div className='w-[calc(100%-90px)] max-w-[1100px] mx-auto mt-[40px]'>
        <div className='grid grid-cols-2 justify-items-center items-center'>
          <div>
            <h1 className="max-w-[400px] md:max-w-[500px] lg:max-w-none mx-auto lg:mx-0 lg:text-left lg:mt-[10px] lg:text-[5vw] xl:text-[70px] font-prata text-left leading-none ">
              Education, reimagined for <span className='font-kaushan'>young minds</span>
            </h1>
            <p className='font-[500] max-w-[400px] lg:max-w-[25vw] xl:max-w-[350px] mx-auto lg:mx-0 text-[18px] lg:text-[1.6vw] xl:text-[23px] leading-[1.29] my-[25px] lg:mt-[50px] lg:mb-[30px] text-center lg:text-left'>
              Helping your students succeed and thrive with the help of licensed therapists and a community of peers.
              When and where they need it most.
            </p>
            <button className="bg-[#ff7e3e] min-w-[136px] px-6 py-4  rounded-lg font-[700] cursor-pointer">Join now</button>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative w-full h-full polygon-clip">

               {/* Bottom Center */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[45%] h-[45%] p-2">
              <Image
                src="https://tbh.studiovoila.com/img/girl-0.jpg"
                alt="Girl Bottom"
                fill
                className=""
              />
            </div>
            {/* Top Left */}
            <div className="absolute bottom-0 left-0 w-[45%] h-[45%] p-2">
              <Image
                src="https://tbh.studiovoila.com/img/girl-0.jpg"
                alt="Girl Top Left"
                fill
                className=""
              />
            </div>

            {/* Top Right */}
            <div className="absolute bottom-0 right-0 w-[45%] h-[45%] p-2">
              <Image
                src="https://tbh.studiovoila.com/img/girl-0.jpg"
                alt="Girl Top Right"
                fill
                className=""
              />
            </div>

         
          </div>


        </div>
      </div>
    </div>
  )
}

export default Hero