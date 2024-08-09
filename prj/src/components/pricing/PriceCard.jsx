import React from 'react'
import { price } from '../../dummydata'
import "./price.css"

const PriceCard = () => {
  return (
    <div>
      <section className='price'>
        <div className="container grid3">
          {price.map((val) => (
            <div className="items shadow">
              <h2>{val.name}</h2>
              <h1>
                <span>RS.</span>
                {val.price}
              </h1>
              <p>{val.desc}</p>
              <button className='outline-btn'>GET STARTED</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PriceCard
