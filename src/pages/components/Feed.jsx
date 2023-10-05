import React from 'react'
import NewsCard from '../home/NewsCard'

export const Feed = ({data}) => {
  return (
    <div className='col-span-2'>
        <span className='font-semibold text-gray-800 text-xl
        '>Dragon News Home</span>
        <section className='grid grid-cols-1 mt-4'>
          {data.map(card=><NewsCard key={card._id} cardData={card}></NewsCard>)}
        </section>
    </div>
  )
}
