import CTOCard from './CTOCard';
import { BiTargetLock } from 'react-icons/bi'
import { LuBicepsFlexed } from 'react-icons/lu';
import { VscSettings } from 'react-icons/vsc';


const CallToAction = () => {
  return (
    <section className='mx-10 mb-24'>
        <div className='mt-8'>
            <h2 className='text-xl xl:text-4xl scale-y-150 sm:tracking-wide font-bold my-5'>Getting Started Is Simple</h2>
            <p className='xl:w-[33rem] text-gray-400 text-sm leading-5'>
                Since 2019, we've been dedicated to providing a dynamic and supportive environment where individuals of all fitness levels can thrive.
            </p>
        </div>

        <div className='flex flex-wrap justify-evenly xl:justify-between gap-4 gap-y-10 my-16'>
            <CTOCard style='cto_card_1' title='CHOOSE YOUR GOAL'>
                <BiTargetLock className='text-[#FF4A04] size-[4rem]'/>
            </CTOCard>
            <CTOCard style='cto_card_2' title='GET YOUR CUSTOM PLAN'>
                <VscSettings className='text-[#FF4A04] size-[4rem]'/>
            </CTOCard>
            <CTOCard style='cto_card_3' title='TRACK YOUR PROGRESS'>
                <LuBicepsFlexed className='text-[#FF4A04] size-[4rem]'/>
            </CTOCard>
        </div>
    </section>
  )
}

export default CallToAction;