import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        const {target} = e
        const inputType = target.name
        const inputValue = target.value
        if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(!validateEmail(email) || !name) {
            setErrorMessage('Please enter a valid email or enter a Name')
            return
        }
        if(!message) {
            setErrorMessage('Please enter a message')
            return
        }
        alert(`Hello ${name}`)
        setEmail('')
        setMessage('')
        setName('')
    }
    return (
        <div>
            <form>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="name"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder="message"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}