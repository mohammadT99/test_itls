import React from "react";
import DefaultLayout from "@/layouts/default";
import styles from '@/styles/single_blog_page..module.scss'
import SidebarBlog from "@/components";
import {Tooltip, User} from "@nextui-org/react";
import Userimg from '@/public/Images/user_1.png'
import Image from "next/image";
import Icons from "@/components/Icons";
import BgArticle from '@/public/Images/bg_article.jpg';
import Breadcrumb from "@/components/bradcrump";


export default function BlogPage () {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb />
                <div className={styles.layout_page}>

                   <div className={styles.blog__content}>
                       <div className={styles.header__blog}>
                           <div className={styles.header__blog__views}>
                               <div className={styles.header__blog__views__comments}>
                                   <p>۱۲</p>
                                   <span>دیدگاه</span>
                               </div>
                               <div className={styles.user}>
                                   <Tooltip content={'سارا رشیدی'} >
                                    <Image src={Userimg} alt={''} width={55} />
                                   </Tooltip>
                               </div>
                           </div>
                           <div className={styles.header__blog__title}>
                               <p>برنامه نویسی چیست؟ + هرآن چیزی که باید از برنامه نویسی بدانید</p>
                           </div>
                       </div>
                       <div className={styles.blog__article__cotent}>
                            <div className={styles.icons}>
                                <Icons/>
                            </div>
                           <div className={styles.content__blog__article__text}>
                               <Image src={BgArticle} alt={''} className={styles.content__blog__article__text__cover}/>
                               <p className={styles.content__blog__article__text__p}>
                                   همانطور که در دنیای واقعی انگلیسی به زبان بین المللی و مشترک میان افراد مختلف تبدیل
                                   شده است، در جهان فناوری و کامپیوتر هم برنامه نویسی به عنوان زبان برقراری ارتباط بین
                                   ماشین و انسان درنظر گرفته شده است. در حال حاضر برنامه نویسی به یکی از پرطرفدارترین
                                   مشاغل دنیا تبدیل شده است. علت این محبوبیت این است که تقریبا هر کسی بدون هیچ پیشنیازی
                                   و از صفر می‌تواند به کسب درآمد از برنامه نویسی فکر کند. پس چه به دنبال این باشید که
                                   کدنویسی را به عنوان یک سرگرمی انتخاب کنید و چه به عنوان یک شغل جدید و یا افزایش درآمد
                                   فعلی خود به آن نگاه کنید، با سخت کوشی، متعهد بودن و انتخاب مسیر درست می‌توانید در
                                   زمان نسبتا کوتاهی برنامه نویسی را آموخته، در آن حرفه‌ای شوید و درآمد زیادی نیز از آن
                                   کسب کنید. با خواندن این مقاله با برنامه نویسی آشنا می‌شوید و حوزه‌های مختلف آن را
                                   می‌شناسید. سپس زبانهای برنامه نویسی محبوب هر حوزه را معرفی کرده و در پایان درمورد
                                   درآمد برنامه نویسی صحبت می‌کنیم.
                               </p>
                               <h2 className={`text-2xl mt-3 font-bold`}> برنامه نویسی چیست؟</h2>
                               <p className={styles.content__blog__article__text__p}>
                                   همانطور که در دنیای واقعی انگلیسی به زبان بین المللی و مشترک میان افراد مختلف تبدیل
                                   شده است، در جهان فناوری و کامپیوتر هم برنامه نویسی به عنوان زبان برقراری ارتباط بین
                                   ماشین و انسان درنظر گرفته شده است. در حال حاضر برنامه نویسی به یکی از پرطرفدارترین
                                   مشاغل دنیا تبدیل شده است. علت این محبوبیت این است که تقریبا هر کسی بدون هیچ پیشنیازی
                                   و از صفر می‌تواند به کسب درآمد از برنامه نویسی فکر کند. پس چه به دنبال این باشید که
                                   کدنویسی را به عنوان یک سرگرمی انتخاب کنید و چه به عنوان یک شغل جدید و یا افزایش درآمد
                                   فعلی خود به آن نگاه کنید، با سخت کوشی، متعهد بودن و انتخاب مسیر درست می‌توانید در
                                   زمان نسبتا کوتاهی برنامه نویسی را آموخته، در آن حرفه‌ای شوید و درآمد زیادی نیز از آن
                                   کسب کنید. با خواندن این مقاله با برنامه نویسی آشنا می‌شوید و حوزه‌های مختلف آن را
                                   می‌شناسید. سپس زبانهای برنامه نویسی محبوب هر حوزه را معرفی کرده و در پایان درمورد
                                   درآمد برنامه نویسی صحبت می‌کنیم.
                               </p>

                           </div>
                       </div>
                   </div>
                    <SidebarBlog/>
                </div>
            </DefaultLayout>
        </>
    )
}