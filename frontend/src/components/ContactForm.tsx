import React, { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({name: "", email: "", phone: "", subject: "", message: ""})

    const formInputs = [
            {
                id: "name",
                label: "Full Name",
                type: "text",
                placeHolder: "John Doe",
            },
            {
                id: "email",
                label: "Email Address",
                type: "email",
                placeHolder: "you@example.com",
            },
            {
                id: "phone",
                label: "Phone Number (Optional)",
                type: "tel",
                placeHolder: "+1(555) 000-0000",
            },
            {
                id: "subject",
                label: "Subject",
                type: "text",
                placeHolder: "Regarding my fitness plan",
            },
        ]

        console.log(formData);

        const handleFormInput = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData(currValue => (
                {...currValue, [evt.target.name]: evt.target.value}
            ))
        }
        
  return (
    <>
        <form 
            onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
                evt.preventDefault();
                console.log(formData);
            }} 
            action="#" className="space-y-6  text-white contact-form">
                { formInputs.map((input, idx) => (
                    <label key={idx} className="block text-sm font-medium text-gray-300" htmlFor={input.id}>{input.label}
                        <input onChange={handleFormInput} className="w-full mt-2 p-2 rounded-md bg-[#FF4A04AA] tracking-wider focus:text-white" id={input.id} name={input.id} placeholder={input.placeHolder} type={input.type}/>
                    </label>
                ))}
                <label className="block text-sm font-medium text-gray-300" htmlFor="message">Message
                    <textarea onChange={handleFormInput} className="w-full mt-2 p-1.5 rounded-md bg-[#FF4A04AA] tracking-wider focus:text-white" id="message" name="message" placeholder="Your message here..." rows={5}></textarea>
                </label>
                <button className="bg-custom-orange hover:opacity-90 hover:bg-red-700 font-bold rounded-lg w-full py-3 duration-300" type="submit">Send Message</button>
        </form>
    </>
  )
}

export default ContactForm