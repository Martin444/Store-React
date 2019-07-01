import React from 'react'
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'
import Services from '../Components/HomePage/Serices'
import Featured from '../Components/HomePage/Featured'


export default function Home() {
    return (
        <>
            <Hero title="Bienvenido" max="true">
                <Link to="/productos" className="main-link"
                style={{margin: "2rem"}}
                >productos</Link>
            </Hero>
            <Services/>
            <Featured/>
        </>
    )
}
