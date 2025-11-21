import { HiSparkles } from 'react-icons/hi';

const Banner = () => {
  const textArr: string[] = new Array(10).fill('FITNESS');
  
  return (
    <section className='slider text-black my-6 hover:cursor-default bg-[#FF4A04bb] flex items-center overflow-hidden h-20 mb-24'>
      <ul className='w-fit flex flex-nowrap gap-4'>
        {textArr.map((item, idx) => (
          <li key={idx}>
            <h1>{item}</h1> 
            <HiSparkles className='size-8'/>
           </li>
        ))}

        {textArr.map((item, idx) => (
          <li aria-hidden='true' key={idx + 10}>
            <h1>{item}</h1> 
            <HiSparkles className='size-8'/>
           </li>
        ))}
      </ul>
    </section>
  )
}

export default Banner