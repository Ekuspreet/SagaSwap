import Head from 'next/Head'
import styles from '@/styles/Landing.module.css'



export default function Landing(){
    return(
        <>
        <Head>
            <title>
                Landing-Page
            </title>
        </Head>

        <main className = {styles.parentContainer}>
        <section >
            <brandqame>
            <capital>S</capital>aga <capital>S</capital>wap
            </brandqame>
            <br></br>
            <brandquote>
            The Online Story Game
            </brandquote>
        </section>




        </main>
        </>








    )




}