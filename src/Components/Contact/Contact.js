import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="Contactanos"/>
                    <form className="mt-5" action="https://formspree.io/alejandrofarel62@gmail.com" method="POST">
                        {/* Nombre */}
                        <div className="form-group">
                            <input type="text" name="Nombre" className="form-control" placeholder="Nombre"/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="Email" className="form-control" placeholder="ejemplo@email.com"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="Motivo" className="form-control" placeholder="Motivo"/>
                        </div>
                        <div className="form-group">
                            <textarea type="text" name="Mensaje" className="form-control" rows="10" placeholder="Mensaje"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="form-control btn-primary"  value="Enviar"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
