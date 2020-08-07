import React, { useState } from "react"
import style from "./contact.module.css"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [globalMessage, setGlobalMessage] = useState({
        message: "",
        green: false
    });
    const [nameMessage, setNameMessage] = useState({
        message: "",
        green: false
    });
    const [emailMessage, setEmailMessage] = useState({
        message: "",
        green: false
    });
    const [messageMessage, setMessageMessage] = useState({
        message: "",
        green: false
    });


    const validateName = () => {
        if(!name || name === "" || name === undefined || name === null) {
            setNameMessage({
                message: "Required",
                green: false
            });
        } else {
            setNameMessage({
                message: "Nice name",
                green: true
            });
        }
    }

    const validateEmail = () => {
        if(!email || email === "" || email === undefined || email === null) {
            setEmailMessage({
                message: "Required",
                green: false
            });
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false){
            setEmailMessage({
                message: "Invalid email",
                green: false
            });
        } else {
            setEmailMessage({
                message: "Thanks",
                green: true
            });
        }
    }

    const validateMessage = () => {
        if(!message || message === "" || message === undefined || message === null) {
            setMessageMessage({
                message: "Required",
                green: false
            });
        } else {
            setMessageMessage({
                message: "",
                green: true
            });
        }
    }

    const validate = () => {
        validateName();
        validateEmail();
        validateMessage();
        if(nameMessage.green === false || emailMessage.green === false || messageMessage.green === false) {
            return false;
        } 
        return true;
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const valid = validate();
        if(valid) {
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" }, 
                body: encode({
                    'form-name': form.getAttribute('name'),
                    name: name,
                    email: email,
                    message: message
                })
            })
            .then(() => {
                setGlobalMessage({
                    message: "Thanks for your mail!",
                    green: true
                });
                setTimeout(() => setGlobalMessage({
                    message: "",
                    green: false
                }), 6000)
                setName('');
                setEmail('');
                setMessage('');
                setNameMessage({
                    message: "",
                    green: false
                });
                setEmailMessage({
                    message: "",
                    green: false
                });
                setMessageMessage({
                    message: "",
                    green: false
                });
            })
            .catch((error) => {
                setGlobalMessage({
                    message: "Oops... Something went wrong.",
                    green: false
                });
                setTimeout(() => setGlobalMessage({
                    message: "",
                    green: false
                }), 6000)
                console.log(error)
            })
        }
    }

    return (
        <>
            {globalMessage.message ? 
            <div style={globalMessage.green ? {backgroundColor: "#00FFB2"} : {backgroundColor: "#2F2873", color: "#F24F5B"}} className={style.globalMessage}>
                <p>{globalMessage.message}</p>
            </div> : null}
            <form onSubmit={handleSubmit} className={style.form} name="contact" action="/" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                <div className="visually-hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </div>

                <label className={style.formLabel} htmlFor="name">Name</label>
                <div className={style.formInputWrapper}>
                    <p className={style.message} style={nameMessage.green ? {color: "#00FFB2"} : null}><span>{nameMessage.message}</span></p>
                    <input style={nameMessage.green ? {borderColor: "#00FFB2"} : null} className={style.formInput} id="name" type="text" name="name" value={name} onChange={e => setName(e.currentTarget.value)} onBlur={validateName}/>
                </div>

                <label className={style.formLabel} htmlFor="email">Email</label>
                <div className={style.formInputWrapper}>
                    <p className={style.message} style={emailMessage.green ? {color: "#00FFB2"} : null}><span>{emailMessage.message}</span></p>
                    <input style={emailMessage.green ? {borderColor: "#00FFB2"} : null} className={style.formInput}id="email" type="text" name="email" value={email} onChange={e => setEmail(e.currentTarget.value)} onBlur={validateEmail}/>
                </div>

                <label htmlFor="message" className={style.formLabel}>Message</label>
                <div className={style.formInputWrapper}>
                    <p className={style.message}><span>{messageMessage.message}</span></p>
                    <textarea style={messageMessage.green ? {borderColor: "#00FFB2"} : null} className={style.formInput} rows="8" id="message" name="message" value={message} onChange={e => setMessage(e.currentTarget.value)} onBlur={validateMessage}></textarea>
                </div>
                <button className={style.formSubmit} type="submit">Send message</button>
            </form>
        </>
    )
}

export default Contact
