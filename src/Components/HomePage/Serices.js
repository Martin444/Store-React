import React, { Component } from 'react'
import styled from 'styled-components'
import {FaDolly, FaRedo, FaDollarSign} from 'react-icons/fa'

export default class Serices extends Component {

    state ={
        services: [
            {
                id:1,
                icon:<FaDolly/>,
                title: "Todo lo que buscas",
                text:"En un solo lugar bla bla bla"
            },
            {
                id:2,
                icon:<FaRedo/>,
                title: "Todo lo que buscas",
                text:"En un solo lugar bla bla bla"
            },
            {
                id:3,
                icon:<FaDollarSign/>,
                title: "Todo lo que buscas",
                text:"En un solo lugar bla bla bla"
            }
        ]
    }


    render() {
        return (
            <ServivesWrapper>
                <div className="container">
                    <div className="row">
                        {this.state.services.map(item =>{
                            return(
                                <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
                                    <div className="service-icon">{item.icon}</div>
                                    <div className="mt-3 text-capitalize">
                                        {item.title}
                                    </div>
                                    <div className="mt-3">{item.text}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ServivesWrapper>
        )
    }
}

const ServivesWrapper = styled.section`
background: rgba(95,183,234,0.5);
.service-icon{
    font-size: 2.5rem;
    color:var(--primaryColor);
}

p{
    color: var(--darkGrey);
}
`