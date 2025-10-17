import { useState } from 'react'
import { Element} from 'react-scroll';
import PageHeaders from '../components/PageHeaders'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Contact = () => { 
    const [result, setResult] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
        setResult("Sending...")

        const formData = new FormData(e.target)
        formData.append("access_key", "ac6c0fc1-6ab9-49d0-b336-3f574739398e")

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then(r => r.json())

        if (res.success) {
            setResult(res.message)
            e.target.reset()
        } else {
            setResult('Submission failed. Try again later')
            console.error('web3forms:', res)
        }
    }

  return (
    <Element  name='contact'>
        <section className='mt-5 shadow-[0_0_20px_rgba(0,0,0,0.05)] py-4'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <PageHeaders 
                        header1='Contact Us'
                        header2= 'Get in Touch'
                    />
                </div>
                <div className='lg:flex gap-x-6 lg:items-center'>
                    <div className='flex-1'>
                        <h4 className='text-blue-900 text-2xl my-4'>Send us a message <span className='text-amber-800/85'><FontAwesomeIcon icon="fa-solid fa-inbox" /></span></h4>
                        <p className='mb-4 font-thin'>
                            We are always delighted to hear from you. Your insights, questions, and ideas are invaluable as we continually strive to enrich the experience of our entire college community. Please do not hesitate to reach out using the contact form below, or connect with us directly through the details provided.
                        </p>
                        <div className='text-lg flex flex-col gap-5 bg-amber-50 p-4'>
                            <p>Email: nymdcollege.gmail.com</p>
                            <p>Phone: +263 777 979 235</p>
                            <address>
                                Harare, Zimbabwe
                            </address>
                        </div>
                    </div>
                    <form className='mt-8 flex flex-col gap-y-4 flex-2' onSubmit={onSubmit}>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor="name">Name<span aria-hidden>*</span></label>
                            <input 
                                className='bg-blue-400/20 rounded-sm p-3 outline-0 border-2 border-transparent focus-within:border-blue-700'
                                id='name'
                                placeholder='John Kind'
                                type='text'
                                name='name'
                            />
                        </div>
                        <div className='flex flex-col  gap-y-2'>
                            <label htmlFor='email'>Email<span aria-hidden>*</span></label>
                            <input 
                            className='bg-blue-400/20 p-3 outline-0 border-2 border-transparent focus-within:border-blue-700'
                                id='email'
                                placeholder='johnkind@company.gmail'
                                type='email'
                                name='email'
                            />
                        </div>
                        <div className='flex flex-col  gap-y-2'>
                            <label htmlFor="message">Message<span aria-hidden>*</span></label>
                            <textarea 
                                className='bg-blue-400/20 p-3 resize-none outline-0 border-2 border-transparent focus-within:border-blue-700'
                                id='message' 
                                name='message' 
                                rows='5' cols='40'
                                placeholder='Tell us your message'
                            ></textarea>
                        </div>
                            <button className='bg-black text-white p-3 text-3xl rounded-lg mb-4 active:bg-slate-50 active:text-slate-950'>Send</button>
                            <span>{result}</span>
                    </form>
                </div>
            </div>
        </section>
    </Element>
  )
}

export default Contact