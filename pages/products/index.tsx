import styles from '@/styles/package.module.scss';
import ImageTest from '@/public/Images/imageProduct.png';
import Image from "next/image";
import Header from "@/components/Global/Header/Header";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/bradcrump';
import CardProduct from '@/components/CradProduct';
import Sidebar from '@/components/Sidebar';



const Index = () => {



    return (
        <>
            <Navbar />
            <Breadcrumb links='محصولات' links_before=''/>
            <div className={styles.content_products}>
                
            <div className={` flex gap-1 justify-end ${styles.content_product_list}`}>
            <CardProduct image_link={ImageTest} card_title='کتاب 16' />
            <CardProduct image_link={ImageTest} card_title='کتاب 16' />
            <CardProduct image_link={ImageTest}/>
            </div>   
            <Sidebar />
            </div>
            
        </>
    )
}

export default Index;