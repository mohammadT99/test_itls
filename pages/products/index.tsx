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

}

console.log( 'test', product)


useEffect(() => {
    showProduct() ;
} , []) 

    return (
        <>
            <DefaultLayout >

                <Breadcrumb links='محصولات' links_before=''/>
                <div className={styles.content_products}>

                    <div className={` flex gap-1 justify-end ${styles.content_product_list}`}>
                        {product.map((item , key ) => {
                            return(

                                <CardProduct data={item}/>
                            )
                        })}
                    </div>
                    <Sidebar />
                </div>
            </DefaultLayout>


            
        </>
    )
}

export default Index;