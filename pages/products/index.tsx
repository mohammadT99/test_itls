import styles from '@/styles/package.module.scss';
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/bradcrump';
import CardProduct from '@/components/CradProduct';
import Sidebar from '@/components/Sidebar';

import DefaultLayout from "@/layouts/default";
import CardLoarder from "@/components/CardLoader";
import {toast} from "react-toastify";


const Index = () => {
const [product , setProduct ] = useState([]) ;
const [loading  , setLoading ] = useState(true) ;


const showProduct =  () => {
  
fetch(`https://fakestoreapi.com/products`)
.then((res) => res.json())
.then((data) => {
    setProduct(data)
    setLoading(false)

})

    setTimeout(()=>{
        if(!product) {
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

                                <div className={`mt-3 flex gap-6 ${styles.loader_card}`}>
                                    <CardLoarder />
                                    <CardLoarder />
                                    <CardLoarder />
                                </div>
                            ) :(
                              <>
                                  {product.map((item , key ) => {
                                      return(

                                          <CardProduct key={key} data={item}/>
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