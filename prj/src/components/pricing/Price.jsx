import React from 'react'
import "./price.css"
import Back from '../common/back/Back'
import PriceCard from './PriceCard'
import Tag from './Tag'


const Price = () => {
  return (
    <div>
      <Back title='Choose The Great Plan' />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
      <Tag />

    </div>
  )
}

export default Price
