import React, { useRef, useState } from "react"
import { tag } from '../../dummydata'
import Title from '../common/title/Title'

const Tag = () => {
    const [click, setClick] = useState(false)
    const toggle = (index) => {
        if (click === index) {
            return setClick(null)
        }
        setClick(index)
    }
    return (
        <div>
            <Title subtitle='FAQS' title='Frequesntly Ask Questions' />
            <section className='tag'>
                <div className="container">
                    {tag.map((val, index) =>
                    (
                        <div className="box">
                            <button className='accordion' onClick={() => toggle(index)} key={index}>
                                <h2>{val.title}</h2>
                                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                            </button>
                            {click === index ? (
                                <div className="text">
                                    <p>{val.desc}</p>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Tag
