import { useEffect, useState } from 'react';
import CoachesProfileCard from '../components/CoachesProfileCard';
import GetStarted from '../components/GetStarted';

const CoachesPage = () => {

    const [data, setData] = useState([{
        imageSrc: "",
        name: "",
        speciality: "",
        experience_years: 0,
        certification: undefined,
        bio: ""
    }]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/employees")
            const json = await res.json()
            setData(json)
        }

        fetchData()
    }, [])
console.log(data)
  return (
    <main className="container mx-auto px-6 py-14">
        <section className="text-center mb-16 mt-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                MEET <span className="text-custom-orange">OUR TEAM</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our dedicated team of certified professionals is here to guide and motivate you on your fitness journey. Get to know the experts who make our gym a leading fitness destination.
            </p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.map((coach, idx) => (
                <CoachesProfileCard key={idx} name={coach.name} speciality={coach.speciality} imageSrc={coach.imageSrc} bio={coach.bio} certification={coach.certification}/>
            ))}
        </section>
        <section className="mt-20 py-16 bg-gray-800 rounded-lg shadow-xl text-center">
            <GetStarted 
                title="Ready to Start Your Journey?"
                description="Our expert team is excited to help you achieve your fitness aspirations. Join us today and transform your life!"
                btnText="Get Started Now"
            />
        </section>
        
    </main>
  )
}

export default CoachesPage;