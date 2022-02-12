import React,{useState, useEffect} from 'react'
import Header from '../components/header'
import Leftbar from '../components/leftbar'
import Rightbar from '../components/rightbar'
import axios  from 'axios'
import ProductCard from '../components/productCard'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get('https://fakestoreapi.com/products')
            setProducts(res.data);
        }
        fetchData();
    },[])

  return (
      <>
        <Header/>
        <div className='mainWrapper'>
            <Leftbar/>
            <div className="mainContent">
               { products.map(items => (
                    <ProductCard item={items} key={items.id} />
                ))}
            </div>
            <Rightbar/>
        </div>
    </>
  )
}

export default Home