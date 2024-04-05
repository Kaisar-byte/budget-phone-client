import React from 'react'

const Category = ({ brand }) => {
    const { title, image } = brand
    return (
        <div className='bg-cyan-800/75 border'>
            <img src={image} className='w-48 h-24   ' alt="" />
            <h2 className='text-center py-2 text-white text-lg'>{title}</h2>
        </div>
    )
}

export default Category
