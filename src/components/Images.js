import React, { useContext } from 'react'
import { ImageContext } from '../App'
import Image from './Image'

const Images = () => {
    const { response, isLoading, searchImage } = useContext(ImageContext);

    return (
        <>
            <h1>
                Results for {searchImage || 'office'}
            </h1>
            <div className='image-list'  >
                {isLoading ? "Loading..." : response.map((data, key) => <Image key={key} data={data} style={{ objectFit: 'cover' }} />)}
            </div>
        </>
    )
}

export default Images

