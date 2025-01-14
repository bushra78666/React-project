import React , {useContext, useEffect, useState,  } from 'react'
import { Link , useNavigate, useParams } from 'react-router-dom'
// import axios from '../Utils/axios'
import Loading from './Loading'
import { ProductContext } from '../Utils/Context'



const Details = () => {
  const navigate = useNavigate()
  const [products , setproducts] = useContext(ProductContext)
  const [product, setproduct] = useState(null)
  const { id } = useParams()
  // const getsingleproduct = async () => {
  //   try{
  //     const {data} = await axios.get(/products/${id})
  //     setProduct(data)
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  useEffect(() => {
    if(!product){
      setproduct(products.filter((p)=> p.id == id)[0])
    }
    // getsingleproduct()
  }, [])
  const ProductDeleteHandler =(id )=> {
   const filteredProducts = products.filter((p)=> p.id !== id)
   setproducts(filteredProducts)
   localStorage.setItem("products", JSON.stringify(filteredProducts))
   navigate('/')
  }
  return product ? (  
    <div className='w-[70%] h-full flex justify-between   m-auto  p-[10%]'>
        <img className='object-contain  h-[80%] w-[40%] ' src={`${product.image}`} alt="" />
    <div className='content w-[50%]'>
        <h1 className='text-4xl'>{`${product.title}`}</h1>
        <h3 className='text-zinc-400 my-5'>{`${product.category}`}</h3>
        <h2 className='text-red-300 mb-3' >{`${product.price}`}</h2>
        <p className='mb-[5%]'>{`${product.description}`}</p>
        <Link  to={`/edit/${product.id}`} className='mr-5 py-2 px-5 border border-blue-200 text-blue-200 rounded '>Edit</Link>
        <button  onClick={()=>ProductDeleteHandler(product.id)}  className='py-2 px-5 border bordfer-blue-200 text-red-200 rounded '>Delete</button >
    </div>
    </div>
    ):( 
    <Loading/>
  )
}

export default Details;