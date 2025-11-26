import { BiDumbbell, BiTargetLock } from 'react-icons/bi';
import AboutCard from './AboutCard';
import { PiEyeFill } from 'react-icons/pi';
import { communityImg } from '../assets/images';
import { Link } from 'react-router';

const About = () => {
  return (
    <section className='mx-10 mb-24'>
        <h5 className='text-lg lg:text-xl tracking-tighter bg-[linear-gradient(#000000_10%,#dc2626_50%,#000000_90%)] bg-clip-text text-transparent'>ABOUT US</h5>
        <h2 className='text-2xl lg:text-4xl scale-y-150 my-5 font-bold'>DISCOVER THE <br />DIFFERENCE</h2>
        <div className='flex justify-between gap-5 xl:gap-0  items-center flex-wrap lg:flex-nowrap mb-6'>
            <div className='about_img relative'>
                <img src={communityImg} alt='3 female members having a chat after a workout session' width='600px' height='400px' className='w-full sm:h-96  h-fit'/>
            </div>
            <div className='sm:w-4/5 lg:w-1/2'>
                <h3 className="text-xl xl:text-3xl font-bold scale-y-125 xl:scale-y-150 mb-4">EXPERIENCE FITNESS LIKE NEVER BEFORE- WHERE <span className="text-red-600">PASSION, POWER, AND COMMUNITY UNITE</span></h3>
                <p className="text-gray-400 pt-5 pb-8 tracking-wide leading-8 text-lg">We're passionate about transforming lives through fitness. Since 2019, we've been dedicated to providing a dynamic and supportive environment where individuals of all fitness levels can thrive</p>
                <Link to="/about" className="border border-gray-400 hover:border-red-600 hover:text-red-600 hover:scale-105 block w-fit duration-300 tracking-tight rounded-3xl px-4 py-2 font-bold">LEARN MORE ABOUT US</Link>
            </div>
        </div>
        <div className='flex justify-between flex-wrap gap-y-5 mt-14'>
            <AboutCard 
                style='bg-custom-darker md:w-[30%]'
                title='OUR MISSION'
                desc='Our mission is clear: empower to reach their fitness goals, unlock their potential, and lead happier lives.'
                >
                <BiTargetLock className='text-[#FF4A04] size-[4rem] mt-4 mb-5'/>
            </AboutCard>
            
            <AboutCard
                style='bg-custom-darker md:w-[30%]'
                title='OUR VALUES'
                desc='Driven by upassion, fueled by results. Unleash your strength, embrace your potential. Together, we lift each other higher.'
                >
                <PiEyeFill className='text-[#FF4A04] size-[4rem] mt-4 mb-5'/>
            </AboutCard>
            
            <AboutCard
                style='bg-custom-darker md:w-[30%]'
                title='OUR HISTORY'
                desc="We've helped countless individuals transform their lives through fitness, and our commitment to empowering others remains as strong as ever."
                >                    
                <BiDumbbell className='text-[#FF4A04] size-[4rem] mt-4 mb-5'/>
            </AboutCard>
        </div>
    </section>
  )
}

export default About;