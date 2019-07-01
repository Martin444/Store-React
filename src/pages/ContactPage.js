import React from 'react'
import Hero from '../Components/Hero'
import contactImg from '../images/contactBcg.jpeg'
import Contact from '../Components/Contact/Contact'

export default function ContactPage() {
    return (
        <div>
            <Hero img={contactImg}/>
            <Contact/>
        </div>
    )
}
