import React, { useEffect, useState } from 'react'
import Spinner from '../components/spinner';
import Products from '../components/Products';

const Home = () => {
    const API_URL ="https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPost(data);
        } catch (error) {
            console.log("error happned");
            setPost([])

        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchProductData();
    },[])

    return(
        <div>
            {
                loading ? <Spinner/> : 
                post.length > 0? 
                (<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                    {
                        post.map ((post)=>(
                        <Products key={post.id} post={post} />
                    ))
                    }
                </div>):
                <div className="w-screen h-screen flex justify-center items-center">
                    <p className="font-bold">No Data Found</p>
                </div>
            }
        </div>
    );
};

export default Home
