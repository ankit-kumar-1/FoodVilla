import React from 'react'
import { Image, Shimmer } from 'react-shimmer'
const ShimmerEffect = () => {
    return (
        <div className='flex flex-wrap'>
            {Array(15).fill("").map((e, index) => (
                <div key={index} className=' w-60 h-96 rounded-md m-3 p-3  bg-gray-200'></div>
            ))}

        </div>
    )
}

export default ShimmerEffect;
