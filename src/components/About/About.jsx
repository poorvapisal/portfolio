import "./about.scss"
import { useEffect, useRef } from "react"
import React, { Component } from 'react'
import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/photo.jpeg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    Hi! I am Mallika, a final year BTech. in Computer Science undergraduate student at the International Institute of Information Technology, Hyderabad. I am an inquisitive student and am always eager to explore new concepts in the realm of computer science. Deeply passionate about the field of Natural Language Processing and linguistics, I enjoy reading about exciting research in this domain.

                    I am an undergraduate research student at Precog IIITH advised by Prof. Ponnurangam Kumaraguru. My work revolves around Social Computing and NLP for social good.

                    I have previously interned with Google and have also been a part of the Microsoft Engage 2020 program.
                </div>
            </div>
        </div>
    )
}
