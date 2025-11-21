import FeaturesCard from './FeaturesCard'
import { Link } from 'react-router'

const Coaches = () => {
  return (
    <section className='mx-10 mb-24'>
        <h3 className="text-3xl mb-5 scale-y-125 font-bold">Workout Coaches</h3>
        <div className="staff_container text-center">
            <FeaturesCard style='profile_img1' title='Yoga & Mindfulness Coach' />
            <FeaturesCard style='profile_img2' title='Certified Personal Trainer' />
            <FeaturesCard style='profile_img3' title='Hit & Cardio Specialist' />
            <FeaturesCard style='profile_img4' title='Strength Conditioning Coach' />
            <div className="bg-black grid_text m-3">
                <div className="h-4/5 flex flex-col justify-center gap-y-2">
                  <h4 className='text-2xl scale-y-110 text-red-600 font-bold'>WE HAVE 300+</h4>
                  <p className='font-[600]'>Professional Trainer And Types Of Excercises</p>
                </div>
                <Link to={'/'} className="border block w-fit mx-auto py-1.5 px-3 rounded-3xl text-xs hover:scale-110 hover:text-red-600 hover:border-red-600 duration-300">SEE MORE</Link>
            </div>
            <FeaturesCard style='profile_img5' title='Nutritionist Expert & Coach' />
        </div>
    </section>
  )
}

export default Coaches