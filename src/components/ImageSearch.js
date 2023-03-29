import React, { useContext, useState } from 'react'
import { ImageContext } from '../App';

const ImageSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const { fetchData, setSearchImage } = useContext(ImageContext)

    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleButtonSearch = () => {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        setSearchImage(searchValue);
        setSearchValue("");
    }
    const handleEnterSearch = e => {
        if (e.key === 'Enter') {
            fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
            setSearchImage(searchValue);
            setSearchValue("");
        }

    }
    return (
        <div>
            <input type="search" placeholder='Search' value={searchValue}
                onChange={handleInputChange} onKeyDown={handleEnterSearch} className='search-bar' />
            <button className='search-bar' onClick={handleButtonSearch}>Search</button>
        </div>
    )
}

export default ImageSearch