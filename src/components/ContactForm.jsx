"use client"
import { useState } from 'react'

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            email,
            subject,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            try {
                if (res.status === 200) {
                    console.log('Response succeeded!')
                    setSubmitted(true)
                    setName('')
                    setEmail('')
                    setBody('')
                }
            } catch (err) {
                console.log(err)
            }
        })
    }

    return (
        <div className="flex justify-center items-center border-white">
            <form className="sm:w-3/6 border-white">
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="example@gmail.com"
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        required
                        className="bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Hello"
                        onChange={(e) => { setSubject(e.target.value) }}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        className="bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let&apos;s talk"
                        onChange={(e) => { setMessage(e.target.value) }}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary hover:bg-secondary text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    onClick={(e) => { handleSubmit(e) }}
                >
                    Send message
                </button>
            </form>
        </div>
    )
}

export default ContactForm