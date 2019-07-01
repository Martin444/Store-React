import React from 'react'
import Hero from '../Components/Hero'
import defaultBcg from '../images/defaultBcg.jpeg'

import {Link} from 'react-router-dom'

export default function Default() {
    return (
        <div>
            <Hero img={defaultBcg} title="404" max="true">
                <h2 className="text-uppercase">Not found</h2>
                <Link to="/" className="main-link">Volver al inicio</Link>
            </Hero>
        </div>
    )
}
