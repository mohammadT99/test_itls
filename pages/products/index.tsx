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
            <Breadcrumb links='product' links_before=''/>
            <div className={`flex justify-center gap-5 mt-3 align-top`}>
                
            <div className={` flex gap-1 justify-end `}>
            <CardProduct image_link={ImageTest}/>
            <CardProduct image_link={ImageTest}/>
            <CardProduct image_link={ImageTest}/>
            </div>   
            <Sidebar />
            </div>
            
        </>
    )
}

export default Index;