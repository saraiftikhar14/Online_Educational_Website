import React from 'react'
import { blog } from '../../../dummydata'
import "./footer.css"

const Footer = () => {
    return (
        <div>
            <section className='newletter'>
                <div className="container flexSB">
                    <div className="left row">
                        <h1>All Information Are Available:</h1>
                        <span>New Info & Latest Info Are Available. So,Visit This Sites.</span>
                    </div>
                    <div className="right row">
                        <input type='text' placeholder='Enter E-mail Address' />
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>FLATI-CON ACADEMY</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>
                        <p>All Updated Information Available In These Sites!</p>
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                        <i className='fab fa-pinterest icon'></i>
                        <i className='fab fa-linkedin icon'></i>
                    </div>
                    <div className="box link">
                        <h3>Explore Website</h3>
                        <ul>
                            <li>Courses</li>
                            <li>Learning</li>
                            <li>Skills</li>
                            <li>Developers</li>
                            <li>Services</li>

                        </ul>

                    </div>
                    <div className="box link">
                        <h3>General</h3>
                        <ul>
                            <li>Sign Up</li>
                            <li>Help Center</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>

                    </div>
                    <div className="bxo">
                        <h3>Recent Posts</h3>
                        {blog.slice(0, 3).map((val) => {
                            return (
                                <div className="items flexSB">
                                    <div className="img">
                                        <img src={val.cover} alt='' />
                                    </div>
                                    <div className="text">
                                        <span>
                                            <i className='fa fa-user'></i>
                                            <label htmlFor=''>{val.type}</label>
                                        </span>
                                        <span>
                                            <i className='fa fa-calendar-alt'></i>
                                            <label htmlFor=''>{val.date}</label>
                                        </span>
                                        <h4>{val.title}</h4>
                                    </div>
                                </div>

                            )

                        })}
                    </div>
                    <div className="box last">
                        <h3>ANY DETAILS YOU WANT!</h3>
                        <ul>
                            <li>
                                <i className='fa fa-phone-alt'></i>
                                +923-4587923641
                            </li>
                            <li>
                                <i className='fa fa-paper-plane'></i>
                                example@gmail.com
                            </li>
                            <li>
                                <i className='fas fa-comment'></i>
                                Send A Message!
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="legal">
                <p>Flati-Con Academy is optimized for learning, testing, and training. Tutorials,
                    references, and examples are constantly reviewed
                    to avoid errors, but we cannot warrant full correctness of all content.
                    Copyright ©2023 by Refsnes Data. All Rights Reserved.</p>
                    <a href="#top" class="btn">Go To Back</a>
            </div>
            
        </div>
    )
}

export default Footer
