import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md'
import ContactForm from '../components/ContactForm'
import GetStarted from '../components/GetStarted'

const ContactUsPage = () => {
  return (
    <main>
        <section className="bg-custom-darker pt-24 pb-16 px-4 md:px-8 lg:px-16" >
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    CONTACT <span className="text-custom-orange">US</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
            </div>
        </section>
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                <div id='contactUs' className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-custom-darker p-8 md:p-12 rounded-xl">
                        <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>
                        <ContactForm/>
                    </div>
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <MdLocationOn className="text-red-500 text-2xl"/>
                                    <div>
                                        <h4 className="font-semibold text-lg">Our Location</h4>
                                        <p className="text-gray-400">123 Fitness Street, Workout City, ST 90210</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MdEmail className="text-red-500 text-2xl"/>
                                    <div>
                                        <h4 className="font-semibold text-lg">Email Us</h4>
                                        <p className="text-gray-400 hover:text-red-400 transition-colors"><a href="mailto:info@pamfitness.com">info@pamfitness.com</a></p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MdCall className="text-red-500 text-2xl"/>
                                    <div>
                                        <h4 className="font-semibold text-lg">Call Us</h4>
                                        <p className="text-gray-400 hover:text-red-400 transition-colors"><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
                            <div className="space-y-2 text-gray-300">
                                <div className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span>9:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span>10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Find Us On Map</h3>
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                <iframe allowFullScreen={false} className="rounded-lg max-h-72 border-none" height="250" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086018651165!2d-122.419415584681!3d37.77492927975909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2b58207%3A0x4cb7c8a882b80301!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1609890590000!5m2!1sen!2sus" width="100%"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 text-center">
            <GetStarted title="LET'S TALK"
                description="Ready to start your fitness journey or have more questions? Reach out and let's discuss how we can help you achieve your goals."
                btnText="Schedule a Consultation"
            />
        </section>
    </main>
  )
}

export default ContactUsPage