
import styles from '@/styles/breadcrumb.module.scss';
import { Home, Home2 } from 'iconsax-react';
export default function Breadcrumb({ links_before = 'arshive', links = 'product1' }) {

    return (
        <>
            <section className={styles.bradcump}>
                <div className={styles.container}>
                    <div className={styles.brsdcump__content}>
                        <div className={styles.brsdcump__item}>
                            <a href="" className={styles.item_link}><Home2 /> </a>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path
                                    d="M1.9585 1.91658C1.9585 1.91658 6.04183 4.33392 6.04183 5.99992C6.04183 7.66534 1.9585 10.0833 1.9585 10.0833"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></span>
                            {links_before?(<a href="" className={styles.item_link}>{links_before}</a>):null}
                            
                           {links_before?( <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path
                                    d="M1.9585 1.91658C1.9585 1.91658 6.04183 4.33392 6.04183 5.99992C6.04183 7.66534 1.9585 10.0833 1.9585 10.0833"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></span>):null}
                            <a href="" className={`${styles.item_link} ${styles.active}`}>{links}</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}