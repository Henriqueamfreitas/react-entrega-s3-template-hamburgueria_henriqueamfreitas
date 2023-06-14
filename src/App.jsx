import { useState } from 'react'
import { useEffect } from 'react'
import { Header } from './Components/Header'
import { ProductList } from './Components/ProductList'
import { api } from '../src/Services/api.js'
import { data } from './Services/data'

function App() {
  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log(data)
    setAllProducts(data)
    console.log(allProducts)
    
  }, [])
  // setAllProducts(data)
  // console.log(allProducts)
  // useEffect(() => {
  //   setIsLoading(true)
  //   const getProducts = async () => {
  //     try{
  //       const response = await api.get('/products')
  //       // console.log(response.data)
  //       // setAllProducts(response.data)
  //       // console.log(allProducts)
  //     } catch (error){
  //         console.error(error)
  //     } finally{
  //       setIsLoading(false)
  //     }
  //   }
  //   getProducts()
  // }, [])
  return (
    <>
    <Header></Header>
    <ProductList allProducts={allProducts}></ProductList>
    
    {/* {
      !isLoading?
      // allProducts.forEach(product => {
      //   <h2>{product.name}</h2>
      // })
      <ProductList allProducts={allProducts}></ProductList>
      : <p>Carregando...</p>
    } */}
    </>
  )
}

export default App
