import "./contact.scss"
import React, {useState } from "react";

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">

            <div className="txt">
                <h1>Contact</h1>
                Feel free to contact me if you have any ideas or suggestions
            </div>
            <div className="center">


                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you, I'll reply soon:)</span>}
                </form>
            </div>
        </div>
    )
}
