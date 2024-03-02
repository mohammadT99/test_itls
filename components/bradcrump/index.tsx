
import styles from '@/styles/breadcrumb.module.scss';
import { ArrowLeft2, Home, Home2 } from 'iconsax-react';
import {Link} from "@nextui-org/link";
export default function Breadcrumb({ links_before = 'ارشیو', links = 'محصولات' }) {

    return (
        <>
            <section className={styles.bradcump}>
                <div className={styles.container}>
                    <div className={styles.brsdcump__content}>
                        <div className={styles.brsdcump__item}>
                            <Link href="/" className={styles.item_link}><Home2 /> </Link>
                            <span>
                                <ArrowLeft2 color='#fff' />
                            </span>
                            {links_before?(<a href="" className={styles.item_link}>{links_before}</a>):null}
                            
                           {links_before?( <span>
                            <ArrowLeft2 color="#fff" />
                           </span>):null}
                            <a href="" className={`${styles.item_link} ${styles.active}`}>{links}</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}