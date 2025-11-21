import { useState } from 'react'
import NavPopUp from './NavPopUp';
import { BsArrowRight } from 'react-icons/bs';
import IconBtn from './IconBtn';
import Accordion from './Accordion';
import { CiMenuBurger, CiMenuFries } from 'react-icons/ci';
import { Link } from 'react-router';
import Logo from './Logo';

const NavBar = () => {
  const navLinks = [
    {
      title: "Services",
      items: ["Personalized workout Plans", "Nutritional guidance", "Progress tracking", "Motivational community"],
      links: "/services",
    },
    {
      title: "About",
      items: ["Our mission", "Our values", "Our history"],
      links: "/about",
    },
    {
      title: "Coaches",
      items: ["Certified personal trainer", "strength conditioning coach", "Nutrition expert", "Cardio specialist", "Yoga & mindfulness coach"],
      links: "/coaches",
    },
    {
      title: "Contact",
      links: "/contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <header className='w-dvw z-10 text-gray-300 py-5 px-10 fixed top-0 left-0 right-0 bg-[#1a1a1acc] backdrop-blur-md'>
      {/* logo */}
      <section className='w-dvh flex text-custom-orange justify-between items-center'>
      <Logo/>
        
        {/* nav items/ site links */}
        <nav className='hidden max-w-[40rem] text-white sm:flex w-3/5 justify-evenly'>
          {navLinks.map((navItem, idx) => (
            <NavPopUp key={idx} title={navItem.title} items={navItem.items} link={navItem.links} />
          ))} 
        </nav>

        <div>
          {/* Call to action */}
          <Link to={'/subscriptions'} className='hidden group hover:scale-110 hover:bg-[#FF4A04] hover:text-black hover:border-black duration-300 sm:flex items-center gap-1.5 border border-gray-400 text-xs p-1 rounded-3xl'>
            <p className='ms-2 truncate'>JOIN US</p>
            <IconBtn style='size-6 bg-[#FF4A04] group-hover:bg-black duration-300'>
              <BsArrowRight className='-rotate-45 text-white group-hover:text-red-700 group-hover:rotate-0 duration-300 size-3'/>
            </IconBtn>
          </Link>

          {/* mobile screen nav icon */}
          <div className='sm:hidden text-[#FF4A04] hover:scale-110 duration-200' onClick={handleMenuToggle}>
            <CiMenuBurger className='size-6'/>
          </div>
        </div>
      </section>

      {/* mobile screen nav link */}
      <section className={`${isMenuOpen ? "translate-y-0" : "-translate-y-full"}  pt-5 pb-14 text-[#FF4A04] bg-black/95 flex flex-col items-center w-dvw h-dvh overflow-auto fixed inset-0 sm:hidden duration-500`}>
        <div className="w-dvw flex justify-between bg-black px-10">
          <div className='size-fit' onClick={() => (setIsMenuOpen(false))}>
            <Logo/>
          </div>
          <div className='hover:scale-110 duration-200' onClick={handleMenuToggle}>
            <CiMenuFries className='size-6'/>
          </div>
        </div>
        <nav className='w-dvw mt-16 flex flex-col gap-7'>
          {
            navLinks.map((navItem, idx) => (
              <Accordion closeMenu={handleMenuToggle} key={idx} title={navItem.title} details={navItem.items} link={navItem.links}/>
            ))
          }  
          <Link onClick={handleMenuToggle} to={"/subscriptions"} className='mt-16 truncate px-5 text-xl w-fit mx-auto hover:bg-red-600 rounded-3xl py-1 border-2 hover:text-white hover:border-transparent bg-black border-[#FF4A04] duration-300'>Join Us</Link>
        </nav>
        
      </section>
    </header>
  )
}

export default NavBar;