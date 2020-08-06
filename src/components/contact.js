import React, { useState } from "react"
import style from "./contact.module.css"

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
        let formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        console.log(new URLSearchParams(formData).toString())
        fetch(e.target.getAttribute('action'), {
            method: 'POST',
            headers: {
              'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams(formData).toString()
          })
          .then(res => {
            if (res) {
             console.log(res);
            }
          });
    }

    return (
        <form onSubmit={handleSubmit} className={style.form} name="contact" action="/pages/index" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <div className="visually-hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </div>

            <label className={style.formLabel} htmlFor="name">Name</label>
            <input className={style.formInput} id="name" type="text" name="name" value={name} onChange={e => setName(e.currentTarget.value)}/>

            <label className={style.formLabel} htmlFor="email">Email</label>
            <input className={style.formInput}id="email" type="text" name="email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>

            <label htmlFor="message" className={style.formLabel}>Message</label>
            <textarea className={style.formInput} rows="8" id="message" name="message" value={message} onChange={e => setMessage(e.currentTarget.value)}></textarea>

            <button className={style.formSubmit} type="submit">Send message</button>
        </form>
    )
}

export default Contact
