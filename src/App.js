import { createContext, useContext, useState } from 'react';
import './App.css';
import Images from './components/Images';
import ImageSearch from './components/ImageSearch';
import useAxios from './hooks/useAxios';

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  console.log(response)
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }
  return (< div className='App'>
    <ImageContext.Provider value={value} >
      <ImageSearch />
      <Images response />
    </ImageContext.Provider>
  </div>
  );
}

export default App;

