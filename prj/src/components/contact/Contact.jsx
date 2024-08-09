import React from 'react'
import Back from '../common/back/Back'
import "./contact.css"

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15246673.264840119!2d89.61034424816287!3d29.93972980846969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1673189463380!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
    return (
        <div>
            <Back title='Contact Us' />
            <section className='contact padding'>
                <div className="container shadow flexSB">
                    <div className="left row">
                        <iframe src={map}></iframe>
                    </div>
                    <div className="right row">
                        <h1>Contact Us</h1>
                        <p>Any Information/Any Problems You Want To Discuss With Us With This Online Learning Education.
                            Don't Feel Shy. Just Contact With Us. We Solve Your Problems.
                            Thank You!</p>
                        <div className="items grid2">
                            <div className="box">
                                <h4>ADDRESS:</h4>
                                <p>289 west 23rd street,suite 800 England ENG 12015</p>
                            </div>
                            <div className="box">
                                <h4>Email:</h4>
                                <p>information@gmail.com</p>
                            </div>
                            <div className="box">
                                <h4>Phone:</h4>
                                <p>+934-51234967</p>
                            </div>
                        </div>
                        <form action=''>
                            <div className="flexSB">
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                            </div>
                            <input type='email' placeholder='Subject' />
                            <textarea cols='30' rows='10'>
                                Create A Message Here.
                            </textarea>
                            <button className='primary-btn'>SEND MESSAGE</button>
                        </form>
                        <h3>FOLLOW US ON!</h3>
                        <span>
                            <i className='fab fa-facebook-f icon'></i>
                            <i className='fab fa-instagram icon'></i>
                            <i className='fab fa-twitter icon'></i>
                            <i className='fab fa-youtube icon'></i>
                            <i className='fab fa-pinterest icon'></i>
                            <i className='fab fa-tiktok icon'></i>
                            <i className='fab fa-linkedin icon'></i>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
