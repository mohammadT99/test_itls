import styles from '@/styles/cardproduct.module.scss' ;
import { Bag } from 'iconsax-react';
import { Button, Image, Link } from '@nextui-org/react';


export default function CardProduct ({ data }) {
    return (
        <>
         <div className={styles.courses__card}>
              <div className={styles.card__item}>
                <div className={styles.card__item__img}>
                  <Image
                    src={`http://185.164.73.28:8000/storage/${data.cover}`}
                    width={400}
                    height={200}
                    alt={""}
                    
                  />
                </div>
                <div className={styles.card__item__body}>
                  <p>{data.title}</p>
                  <span className={`text-blue-400 text-lg font-semibold`}>{data.price}</span>
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