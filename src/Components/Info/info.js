import React from 'react'
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'

export default function info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" 
                        alt="Foto info"
                        style={{background: "var(--darkGrey)"}}
                        />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="Info"/>
                        <p className="text-lead text-muted my-3">Informacion del local empresa o lo que sea</p>
                        <button className="main-link"
                        type="button"
                        style={{marginTop:"2rem"}}
                        >Más Info</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
