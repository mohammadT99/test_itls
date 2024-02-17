import styles from '@/styles/cardproduct.module.scss' ;
import Image from 'next/image';
export default function CardProduct ({image_link , image__alt='' , card_title='test'}) {
    return (
        <>
         <div className={styles.courses__card}>
              <div className={styles.card__item}>
                <div className={styles.card__item__img}>
                  <Image
                    src={image_link}
                    alt={image__alt}
                  />
                </div>
                <div className={styles.card__item__body}>
                  <p>{card_title}</p>
                  <span className={`text-blue-400 text-lg font-semibold`}>1000</span>
                </div>
              </div>
              <button className={`${styles.btn} bg-yellow-500 ${styles.cardbtn} transition-all`}>BUY</button>
            </div>
        </>
    )
}