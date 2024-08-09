import React from 'react'
import Title from '../../common/title/Title'
import "./hero.css"

const Hero = () => {
  return (
    <div>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <br></br>
            <br></br>
            <Title subtitle='WELCOME  TO  ACADEMY' title='Online Education' />
            <p>We Welcome The Online Students To Our Website With Good Offers.
              Do Have A Through Look Into The Courses We Provide To Select The One Best For You.
              Wish You Best Of Luck.</p>
            <div className="button">
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="marigin"></div>
    </div>
  )
}

export default Hero
