import React, { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle input changes
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    // Form validation function
    const validateForm = () => {
        // Reset the error message
        setErrorMessage('');

        // Validate name: Ensure it's not empty and contains only letters and spaces
        if (name.trim() === '' || !/^[a-zA-Z\s]+$/.test(name)) {
            setErrorMessage('Please enter a valid name (letters only).');
            return false;
        }

        // Validate email format using regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|io|co|us|ca|uk|de|fr|jp|ru|in)$/;
        if (email.trim() === '' || !emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address (e.g., user@example.com).');
            return false;
        }

        // Validate message: Ensure it's not empty
        if (message.trim() === '') {
            setErrorMessage('Please enter a message.');
            return false;
        }

        // If all fields are valid
        return true;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page

        const formData = {
            name: name,
            email: email,
            message: message
        };

        if (validateForm()) {
            // If validation is successful, submit form (for now, just alert)
            // alert("Thankyou for Contacting me! I'll reply soon");

            //making a post request to server
            fetch('http://localhost/API/MyPortfolio/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === 'sucess') {
                        alert("Thankyou for Contacting me! I'll reply soon");
                        setName('');
                        setEmail('');
                        setMessage('');
                    } else {
                        alert(data.message);
                    }
                })
                .catch((error) => {
                    console.log('Server Error:', error);
                    alert("We are facing same technical error, Please try again later")
                })

            // // Reset form fields (optional)
            // setName('');
            // setEmail('');
            // setMessage('');
        }
    };

    return (
        <div className='page contact' id='contact'>
            <div className="heading mb-4">
                <h2><sub>*</sub> Contact <sub>*</sub></h2>
            </div>

            <div className='contact-details row align-items-center'>

                <div className="info col-md-6 px--sm-5">
                    <div className="social-links row flex-column">
                        <a href="https://wa.me/7905341874" target='\blank'>
                            <i className="fa-brands fa-whatsapp"></i> <span className="ms-4">What's App</span>
                        </a>

                        <a href="https://www.instagram.com/11swayam12/?next=%2F&hl=en" target='\blank'>
                            <i className="fa-brands fa-instagram"></i> <span className="ms-4">Instagram</span>
                        </a>

                        <a href="https://www.facebook.com/11swayam12" target='\blank'>
                            <i className="fa-brands fa-facebook-f"></i> <span className="ms-4">FaceBook</span>
                        </a>

                        <a href="https://www.linkedin.com/in/swayamsinghvns" target='\blank'>
                            <i className="fa-brands fa-linkedin-in"></i> <span className="ms-4">Linked In</span>
                        </a>
                    </div>
                </div>

                <div className="form col-md-6 px-sm-5 py-sm-0 py-4">
                    <div className="box p-sm-2 border">
                        <div className='p-3'>
                            <h3 className='mx-sm-2'>Contact Form</h3>
                            <div className='p-sm-2 pb-4'>
                                <div>
                                    {/* Display error message if any */}
                                    {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group my-2">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={name}
                                                onChange={handleNameChange}
                                                placeholder="Enter name"
                                                required
                                            />
                                        </div>

                                        <div className="form-group my-2">
                                            <label htmlFor="email">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                placeholder="Enter email"
                                                required
                                            />
                                        </div>

                                        <div className="form-group my-2">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                value={message}
                                                onChange={handleMessageChange}
                                                placeholder="Message for me"
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="button">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
