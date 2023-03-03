import Head from 'next/Head'
import styles from '@/styles/Landing.module.css'
import { Righteous } from 'next/font/google'
const righteous = Righteous({ subsets: ['latin'],
                              weight: '400' })


export default function Landing(){
    return(
        <>
        <Head>
            <title>
                Landing-Page
            </title>
        </Head>

        <main className = {styles.parentContainer}>
        <section className={`${righteous.className} ${styles.brandHeader}`}>
            <brandname className={styles.brandName}>
            <capital className = {styles.capital}>S</capital>aga <capital className = {styles.capital} >S</capital>wap
            </brandname>
            <br></br>
            <brandquote className = {styles.brandQuote}>
            The Online Story Game
            </brandquote>
        </section>
        <section>
            hello Im testing out sections
        </section>




        </main>
        </>








    )




}