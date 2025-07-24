import React from 'react'
import natureImage from '../assets/nature.jpg'
const Card1 = () => {
  return (
    <div className='mx-[20%] my-2 flex flex-col '>
        <div className='flex  rounded-2xl'>
            <img src={natureImage}
            className='h-[200px] w-[70%] object-cover rounded-2xl'
            />
        </div>
        <div>
            <h1>Article</h1>
            <div>
                <div>
                    <h3>What if famous brands had regular fonts? Meet RegulaBrands!</h3>
                </div>
                <div>
                    ...
                </div>
            </div>
            <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
            <div>
                <div>
                    <div>
                        <img src={natureImage} 
                        className='rounded-full h-[30px]'/>
                    </div>
                    <div>
                        <h4>John Doe</h4>
                    </div>
                </div>
                <div>
                    <div>
                        1.4k views
                    </div>
                    <div>
                        share button
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card1