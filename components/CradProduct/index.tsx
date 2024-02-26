import styles from '@/styles/cardproduct.module.scss' ;
import { Bag } from 'iconsax-react';
import { Button,  Link } from '@nextui-org/react';
import ImageProduct from '@/public/Images/imageProduct.png'
import Image from "next/image";
// import '../../public/Images/imageProduct.png'


export default function CardProduct ({ data }):any {
    return (
        <>
         <div className={styles.courses__card}>
              <div className={styles.card__item}>
                <div className={styles.card__item__img}>
                  <Image src={ImageProduct} alt={''}/>
                </div>
                <div className={styles.card__item__body}>
                  <p>{data.title ?data.title : 'محصول شماره یک' }</p>
                  <span className={`text-blue-400 text-lg font-semibold`}>${data.price ? data.price : '250'}</span>
                </div>
              </div>
              <Button as={Link} href={`/products/${data.slug}`} className={` bg-yellow-500 ${styles.cardbtn}`}>
                <span>
                  <Bag />
                </span>
                افزودن به سبد خرید
              </Button>
            </div>
        </>
    )
}