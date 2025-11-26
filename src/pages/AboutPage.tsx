import { MdEmojiEvents, MdFitnessCenter, MdFlag, MdGroups, MdVisibility } from 'react-icons/md'
import AboutCard from '../components/AboutCard'
import TeamCard from '../components/TeamCard'
import { Link } from 'react-router'
import GetStarted from '../components/GetStarted'

const AboutPage = () => {
  return (
<main>
    <section className="pt-24 pb-16 bg-custom-darker">
        <div className="w-dvw px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                ABOUT <span className="text-custom-orange">PAM-FITNESS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                We are more than just a gym; we are a community dedicated to helping you achieve your fitness goals and live a healthier, happier life.
            </p>
        </div>
    </section>

    <section className="py-16 md:py-24 bg-custom-dark">
        <div className="w-dvw px-4 md:px-8 lg:px-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div id='history'>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        Founded in 2016, Pam-Fitness was born from a passion for fitness and a desire to create a supportive and motivating environment where individuals of all fitness levels can thrive. We envisioned a place where expert guidance, state-of-the-art facilities, and a strong sense of community come together to inspire personal transformation.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Over the years, we've grown from a small local gym into a recognized fitness hub, helping thousands of members achieve their health and wellness aspirations. Our commitment to excellence and innovation continues to drive us forward.
                    </p>
                </div>
                <div>
                    <img alt="Modern gym interior with various equipment" className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-video" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRytoKo1eIxHGj8Wcd-DtI_hFrHL15fdVdYjtndLQFomDpa_cv1GTbh1fhPi0pRHc-SkwGcpnuzNYFIlTllY4tCARxWP9b0Fy5AwIg8dyxh4a4MEEcyJLRFHBob8Nu_lp6zV74l_1BYy6nNFAmJNwHNbUIM3ubO2cJR6610043iDhXjvtP8emrU5ykxEV15J4MDYbEB1FyYKyDQMhKd6opxJyO88EsFUoLsxxFmbId2oV_1LUwbpz0TKM4FpgokzrYrsxbQtAC3PI"/>
                </div>
            </div>
        </div>
    </section>
    <section className="py-16 md:py-24 bg-custom-darker">
        <div className="w-dvw px-4 md:px-8 lg:px-16">
            <div className="grid md:grid-cols-2 gap-12">
                <AboutCard title='Our Mission' style='bg-custom-dark' desc="To empower individuals to lead healthier lives by providing exceptional fitness experiences, personalized guidance, and a supportive community. We strive to make fitness accessible, enjoyable, and an integral part of everyone's lifestyle.">
                    <MdFlag className="text-custom-orange text-5xl mb-4"/>
                </AboutCard>
                <AboutCard title='Our Vision' style='bg-custom-dark' desc="To be the leading fitness destination recognized for its innovative programs, outstanding results, and unwavering commitment to member success. We aim to inspire a global movement towards better health and well-being." >
                    <MdVisibility className='text-custom-orange text-5xl mb-4'/>
                </AboutCard>
            </div>
        </div>
    </section>
    <section className="py-16 md:py-24 bg-custom-dark">
        <div className="w-dvw px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Pam-Fitness?</h2>
            <div className="text-center grid md:grid-cols-3 gap-8">
                <AboutCard style='bg-custom-darker' title='Expert Trainers' desc="Our certified trainers are dedicated to helping you achieve your goals with personalized plans.">
                    <MdFitnessCenter className='mx-auto text-custom-orange text-5xl mb-4' />
                </AboutCard>

                <AboutCard style='bg-custom-darker' title='Supportive Community' desc="Join a motivating and friendly environment where everyone supports each other.">
                    <MdGroups className='mx-auto text-custom-orange text-5xl mb-4'/>
                </AboutCard>
                    
                <AboutCard style='bg-custom-darker' title='Proven Results' desc="We focus on delivering tangible results through effective training and guidance.">
                    <MdEmojiEvents className='mx-auto text-custom-orange text-5xl mb-4'/>
                </AboutCard>
            </div>
        </div>
    </section>
    <section className="py-16 md:py-24 bg-custom-darker">
        <div className="w-dvw px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <TeamCard name='John Doe' position='Lead Trainer' about="Passionate about functional fitness and helping clients discover their strength.">
                    <img alt="Fitness trainer John Doe" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-custom-orange" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTE9oMZI-pTLEHUisSzEMo0vJzE9WTE3ZPk4daK0jPW-GjWT4KCjXOph2zk8w8T-4sCfdhHoELroFPTVrHHLXod9lVr6rxyd58yDcwD4K-ZSga8ZrrDdYRMRWODdiC8PNcUARhwJp-TC0kTyXVs09ZEDcaEzsUIULlTCpbLC2v7ztQu4yApvvWf3px9FUgQpZ45AZk-uqdbzea5EB1vHf4nYqY5VP0w4xNKHjc1D79vmDhD3lqI_C2mzga_1XpcOgaxJuti9Er1_k"/>
                </TeamCard>

                <TeamCard name='Jane Smith' position='Nutritionist Specialist' about="Expert in crafting personalized nutrition plans for optimal performance.">
                    <img alt="Fitness trainer Jane Smith" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-custom-orange" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmepaTPnDpx-OgoNjFS-ayXvdKZfdaGWxO90r6m4EgfWissj5HqRq_oEz_fUSWT3KIJD3rBA-mqARVst4TL5FfT7XRyKgbil01FtMdzRmpt0diCZcdtXThoFEcCxrcNxDh-LFjkRz6ipbRX-8riVtFGc-86ehv2UBV3o5lfN5wGNo8L5-GgzJcb6pjGSdLZDgIe6VV_l_XdqzO1uWq7ggO3_2n-3MXokZDtgxHq6mntPw72Il6G_LNquVUjDccbRb0QONrX6kDDS8"/>
                </TeamCard>
                
                <TeamCard name='Mike Brown' position='Strength Coach' about="Focus on building strength and resilience through targeted training programs." >
                    <img alt="Fitness trainer Mike Brown" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-custom-orange" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgaEgGuH7kwsk9s6JUtgrE0fmSvFH1LEqa4fKUBU00Dfy4W8o4HX-sMdfq1wBM8g3uadHQyF-wMcR9twD63ZcS-gsWvJnvSwt54i7PAwc_4vuYQ8E5yK7za9-slU0Q4lVmFfFQzK3ZaD0JOQPSXOZgEBvOELZ8WdqphApTj2VBjceVRO1SXa1x2EihNU8d9YITzPNX4o1sr50vksFLvZJ5d2bZkBus732dNgWj1oeGdfHU_kTS1z9hVoWXshZNmZ6sYghNvw1HAQ4"/>
                </TeamCard>

                <TeamCard name='Sarah Wilson' position='Yoga &amp; Flexibility' about="Guides clients towards improved flexibility, balance, and mindfulness.">
                    <img alt="Fitness trainer Jane Smith" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-custom-orange" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmepaTPnDpx-OgoNjFS-ayXvdKZfdaGWxO90r6m4EgfWissj5HqRq_oEz_fUSWT3KIJD3rBA-mqARVst4TL5FfT7XRyKgbil01FtMdzRmpt0diCZcdtXThoFEcCxrcNxDh-LFjkRz6ipbRX-8riVtFGc-86ehv2UBV3o5lfN5wGNo8L5-GgzJcb6pjGSdLZDgIe6VV_l_XdqzO1uWq7ggO3_2n-3MXokZDtgxHq6mntPw72Il6G_LNquVUjDccbRb0QONrX6kDDS8"/>
                </TeamCard>
            </div>
        </div>
    </section>
    <section className="bg-custom-orange py-16 md:py-20">
        <GetStarted
            title="Ready to Transform Your Life?" 
            description="Join the Pam-Fitness family today and start your journey towards a stronger, healthier you." 
            btnText="GET STARTED NOW" 
        />
    </section>
</main>
  )
}

export default AboutPage