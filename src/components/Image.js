import React from 'react'

const Image = ({ data }) => {
    return (
        <a href={data.urls.regular} target="_blank" >
            <img className='image' src={data.urls.small} alt={data.alt_description}
            ></img>
        </a>
    )
}

export default Image
