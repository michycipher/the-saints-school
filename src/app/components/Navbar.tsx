
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className='flex justify-between item-center w-full px-5 lg:px-8 xl:px-[20%] py-6 z-50'>
      

      <div className='flex gap-20 items-center'>
      <div><Link href="/" className="font-bold text-2xl">The Saints</Link></div>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-400 font-bold">
        <Link className="hover:text-black " href="/">Home</Link>
        <Link className="hover:text-black" href="/">About</Link>
        <Link className="hover:text-black" href="/">Schools</Link>
        <Link className="hover:text-black" href="/">Enterprise</Link>
        </div>

      </div>

      <div className="gap-5 hidden lg:flex items-center ">
        <button className="bg-white min-w-[136px] px-6 py-4 rounded-lg font-[700] cursor-pointer" >Login</button>
        <button className="bg-[#ff7e3e] min-w-[136px] px-6 py-4  rounded-lg font-[700] cursor-pointer">Join now</button>
      </div>

    </nav>
  )
}

export default Navbar;