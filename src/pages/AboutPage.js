import React from 'react'
import Info from '../Components/Info/info'
import Hero from '../Components/Hero'
import aboutBcg from '../images/aboutBcg.jpeg'


export default function AboutPage() {
    return (
        <>
            <Hero img={aboutBcg}/>
            
            <Info/>
        </>
    )
}
