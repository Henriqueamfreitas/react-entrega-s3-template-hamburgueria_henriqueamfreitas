import { useState } from 'react'
import { useEffect } from 'react'
import { Header } from './Components/Header'
import { ProductList } from './Components/ProductList'
import { GlobalStyle } from './Styles/globalStyle'
import { api } from '../src/Services/api.js'

function App() {
  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const getProducts = async () => {
      try{
        const response = await api.get('/products')
        setAllProducts(response.data)
      } catch (error){
          console.error(error)
      } finally{
        setIsLoading(false)
      }
    }
    getProducts()
  }, [])
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Header></Header>
    {
      !isLoading?
      <ProductList allProducts={allProducts}></ProductList>
      : <p>Carregando...</p>
    }
    </>
  )
}

export default App
