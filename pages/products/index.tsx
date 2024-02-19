import styles from '@/styles/package.module.scss';
import ImageTest from '@/public/Images/imageProduct.png';
import Image from "next/image";
import Header from "@/components/Global/Header/Header";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/bradcrump';
import CardProduct from '@/components/CradProduct';
import Sidebar from '@/components/Sidebar';
import { availableParallelism } from 'os';
import Api from '@/libs/axios' ;
import { Erica_One } from 'next/font/google';
import DefaultLayout from "@/layouts/default";
import CardLoarder from "@/components/CardLoader";
import {toast} from "react-toastify";
import {pop} from "@jridgewell/set-array";
import {setTime} from "@internationalized/date/src/manipulation";



const Index = () => {
const [product , setProduct ] = useState([]) ;
const [loading  , setLoading ] = useState(true) ;


const showProduct =  () => {
  
fetch(`http://185.164.73.28:8000/api/v1/products/list`)
.then((res) => res.json())
.then((data) => {
    setProduct(data)
    setLoading(false)

})

    setTimeout(()=>{
        if(product.length === 0 ) {
            toast('مشکلی به وجود امده لطفا دوباره امتحان کنید!!') ;
        }
    } , 5000)

}





useEffect(() => {
    showProduct() ;
} , []) ;

    return (
        <>
            <DefaultLayout >

                <Breadcrumb links='محصولات' links_before=''/>
                <div className={styles.content_products}>

                    <div className={` flex gap-1 justify-end items-start ${styles.content_product_list}`}>
                        {
                            product.length === 0 ? (

                                <div className='mt-3 flex gap-6'>
                                    <CardLoarder />
                                    <CardLoarder />
                                    <CardLoarder />
                                </div>
                            ) :(
                              <>
                                  {product.map((item , key ) => {
                                      return(

                                          <CardProduct data={item}/>
                                      )
                                  })}
                              </>
                            )
                        }
                    </div>
                    <Sidebar />
                </div>
            </DefaultLayout>


            
        </>
    )
}

export default Index;