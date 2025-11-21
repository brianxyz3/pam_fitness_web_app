import FeaturesCard from './FeaturesCard'
import IconBtn from './IconBtn'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router'

const Features = () => {
  return (
    <section className='mx-10 mb-24'>
        <h5 className='text-lg lg:text-xl my-4 tracking-tighter bg-[linear-gradient(#000000_10%,#dc2626_50%,#000000_90%)] bg-clip-text text-transparent'>Our Services</h5>
        <div className='flex justify-between items-center flex-wrap md:flex-nowrap gap-y-3 text-gray-400'>
          <h2 className='text-xl sm:text-3xl md:text-4xl scale-y-150 font-bold'>The Support You Deserve</h2>
          <p className='text-xs md:text-sm md:w-2/5'>Since 2019, we've been dedicated to providing a dynamic and supportive environment where levels can thrive.</p>
        </div>
        <div className='features_grid my-10'>
            <FeaturesCard style='img1' title='Motivation Tools' desc='Workouts built around your fitness level, schedule, and goals -- no guesswork, just progress'/>
            <FeaturesCard style='img2' title='Nutrition Guidance' desc='No downloads, no setup--just join instantly, editors now use for them. Make data-driven decicions.'/>
            <FeaturesCard style='img3' title='Progress Tracking' desc='No downloads, no setup--just join instantly, editors now use for them. Make data-driven decicions.'/>
            <FeaturesCard style='img4' title='Personalized Workout Plans' desc='Workouts built around your fitness level, schedule, and goals -- no guesswork, just progress'/>
        </div>

        <Link to={'/subscriptions'} className='w-fit mx-auto hover:scale-110 text-black font-semibold group duration-300 hover:bg-red-600 bg-custom-orange flex items-center gap-2 text-nowrap text-sm p-1 rounded-3xl'>
          <p className='ps-3'>JOIN OUR COMMUNITY</p>
          <IconBtn style='size-8 bg-black'>
            <BsArrowRight className='-rotate-45 group-hover:rotate-0 duration-300 size-4 fill-red-600'/>
          </IconBtn>
        </Link>
    </section>
  )
}

export default Features