import "./intro.scss"
import { useEffect, useRef } from "react"
import React, { Component } from 'react'
import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        //console.log(textRef)
        init(textRef.current,
            {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ['Computational Natural Sciences', 'Web development', 'Databases', 'Maths', 'Designing', 'travelling']
            })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/photo.jpeg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Poorva Pisal</h1>
                    <h3>Interested in <span ref={textRef}></span></h3>

                    <div className="txt">
                        Currently a second year undergraduate student, I am pursuing B.tech in Computer Science and 
                        MS by Research in Computational Natural Sciences at the International Institute of Information Technology, Hyderabad. 
                        I am an avid reader with an inquisitive mind, interested to expand my knowledge in various fields in Computer Science.
                        <br></br>
                        Currently I am exploring the different applications of Computer Science in Natural Sciences.
                                                
                    </div>
                </div>
            </div>
        </div>
    )
}
