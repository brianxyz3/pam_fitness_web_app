import { MdBusinessCenter, MdFitnessCenter, MdGroups, MdMilitaryTech, MdRestaurantMenu, MdSpa } from 'react-icons/md';
import AboutCard from '../components/AboutCard';
import ClientReviewCard from '../components/ClientReviewCard';
import GetStarted from '../components/GetStarted';

const ServicePage = () => {
  return (
    <main>
        <section className="pt-24 pb-16 bg-custom-darker">
            <div className="w-dvw mx-auto px-4 md:px-8 lg:px-16 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    OUR <span className="text-custom-orange">SERVICES</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    Explore our comprehensive range of services designed to cater to all your fitness needs, from personalized training to group classes and specialized programs.
                </p>
            </div>
        </section>
        <section className="py-16 md:py-24 bg-custom-dark">
            <div className="w-dvw px-4 md:px-8 lg:px-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AboutCard style='bg-custom-darker' title='Personal Training' link='Learn More →' desc='Get one-on-one guidance from our certified trainers. We tailor workout plans to your specific goals, ensuring maximum results and personalized attention.'>
                        <MdFitnessCenter className="text-custom-orange text-5xl mb-6"/>
                    </AboutCard>
                    <AboutCard style='bg-custom-darker' title='Group Fitness Classes' link='View Schedule →' desc="Join our energetic group classes! From high-intensity interval training (HIIT) to Yoga and Zumba, there's something for everyone to enjoy and stay motivated.">
                        <MdGroups className="text-custom-orange text-5xl mb-6"/>
                    </AboutCard>
                    <AboutCard style='bg-custom-darker' title='Nutritional Guidance' link='Get Advice →' desc='Achieve your fitness goals faster with expert nutritional advice. Our specialists create personalized meal plans to complement your training regimen.'>
                        <MdRestaurantMenu className="text-custom-orange text-5xl mb-6"/>
                    </AboutCard>
                    <AboutCard style='bg-custom-darker' title='Wellness &amp; Recovery' link='Discover More →' desc='Enhance your recovery and overall well-being with services like sports massage, stretching sessions, and access to our sauna and relaxation zones.'>
                        <MdSpa className="text-custom-orange text-5xl mb-6"/>
                    </AboutCard>
                    <AboutCard style='bg-custom-darker' title='Specialized Programs' link='Explore Programs →' desc='We offer specialized training programs such as weight loss challenges, strength building bootcamps, and sport-specific conditioning.'>
                        <MdMilitaryTech className="text-custom-orange text-5xl mb-6"/>
                    </AboutCard>
                    <AboutCard style='bg-custom-darker' title='Corporate Wellness' link='Inquire Now →' desc='Promote health and productivity in your workplace with our tailored corporate wellness packages, including group memberships and on-site classes.'>
                        <MdBusinessCenter className="text-custom-orange text-5xl mb-6"/>
                    </AboutCard>
                </div>
            </div>
        </section>
        <section className="py-16 md:py-24 bg-custom-darker">
            <div className="w-dvw px-4 md:px-8 lg:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    What Our Clients Say
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ClientReviewCard clientName='Alex P.' serviceUsed='Personal Training Client' clientReview="Pam-Fitness has completely changed my approach to fitness. The trainers are incredible and the community is so supportive. I've never felt stronger or healthier!" >
                        <img alt="Client avatar" width='48px' height='48px' className="size-12 rounded-full mr-4 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ_i1tq3h1P-x6b9W3UvFm8V6V4kX3dG5s7yL7pX7rT-uJ0lH9xJ2kF6hS3wA-qN8tV7yR9zB6c1L0xK2dM7jS4uO5vE6wR-xP0oJ2sD1tF0qW4xJ6bZ7cV0oI8jA-sT1uP0qR7xV5gH1yB6aJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9q"/>
                    </ClientReviewCard>

                    <ClientReviewCard clientName='Maria G.' serviceUsed='Group Class Enthusiast' clientReview="The group classes are so much fun and a great workout. I always leave feeling energized. Pam-Fitness is more than a gym, it's a family." >
                        <img alt="Client avatar" className="w-12 h-12 rounded-full mr-4 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2n0pPqJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9qJ0cK9zS2lX3vW4uM5nN8oP9q"/>
                    </ClientReviewCard>
                </div>
            </div>
        </section>
        <section className="bg-custom-orange py-16 md:py-20">
            <GetStarted 
                title="Ready to Experience the Difference?" 
                description="Explore our services and find the perfect fit for your fitness journey. Let's achieve your goals together!"
                btnText="VIEW MEMBERSHIP OPTIONS"
            />
        </section>
    </main>
  )
}

export default ServicePage;