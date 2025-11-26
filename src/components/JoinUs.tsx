import { joinUsImg } from '../assets/images';
import IconBtn from './IconBtn';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router';

const JoinUs = () => {
  return (
    <section className='flex flex-wrap justify-evenly md:justify-between mx-10 mb-24 gap-y-10'>
        <div className='w-11/12 md:w-[40%] lg:w-[32%] p-7 text-center flex flex-col justify-between bg-zinc-900/80 rounded-3xl'>
            <div className='h-full flex flex-col justify-center mb-4 lg:mb-0'>
                <h4 className='text-lg lg:text-xl xl:text-2xl tracking-tight font-bold mb-3'>WE'RE ALWAYS LOOKING FOR PASSIONATE INDIVIDUALS</h4>
                <p className='text-gray-400 text-sm lg:text-base'>If you're dedicated to helping ipeople achieve their fitness goals and thrive in a supportive, dynamic environment, we want you!</p>
            </div>
            <Link to={'/'} className='w-11/12 group mx-auto hover:scale-105 duration-300 bg-custom-orange hover:bg-red-600 flex text-black justify-between items-center gap-1 sm:gap-2 text-nowrap text-sm p-1 rounded-3xl'>
                <p className='w-4/5 ms-auto font-bold block'>JOIN OUR TEAM</p>
                <IconBtn style='size-6 sm:size-8 bg-black'>
                    <BsArrowRight className='-rotate-45 group-hover:rotate-0 duration-300 size-3 sm:size-4 fill-red-600'/>
                </IconBtn>
            </Link>
        </div>
        <img src={joinUsImg} alt='' className='md:w-[55%] lg:w-[65%] rounded-3xl bg-red-800 object-cover object-center'/>
    </section>
  )
}

export default JoinUs;