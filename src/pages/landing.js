import header from 'next/Head'

import { useEffect, useState } from 'react';
import Script from 'next/script'
import styles from '@/styles/Landing.module.css'
import { La_Belle_Aurore, Righteous } from 'next/font/google'

const righteous = Righteous({ subsets: ['latin'],
                              weight: '400' })

if (typeof window !== "undefined") {
var container = document.getElementById('container');
var authForm = document.getElementById('authForm');
var anonymousForm = document.getElementById('anonymousForm');
var authbutton = document.getElementById('authenticated');
var anonymousbutton = document.getElementById('anonymous');
}

function authenticated(){
    container.style.border = '3px solid #C5E3FF';
    anonymousForm.style.display = 'none';
    authForm.style.display = 'grid';
    authbutton.style.boxShadow = '0px 3px 10px #58585840';
    anonymousbutton.style.boxShadow = '0px 3px 10px #58585800';
}
function anonymous(){
container.style.border = '3px solid #CDC5FF';
authForm.style.display = 'none';
anonymousForm.style.display = 'grid';
authbutton.style.boxShadow = '0px 3px 10px #58585800';
anonymousbutton.style.boxShadow = '0px 3px 10px #58585840';
}
export default function Landing(){
    return(
        <>
        <header>
            <title>
                Landing-Page
            </title>
        </header>

        <main className = {styles.parentContainer}>
        <header className={`${righteous.className} ${styles.brandHeader}`}>
            <brandname className={styles.brandName}>
            <capital className = {styles.capital}>S</capital>aga <capital className = {styles.capital} >S</capital>wap
            </brandname>
            <br></br>
            <brandquote className = {styles.brandQuote}>
            The Online Story Game
            </brandquote>
        </header>
        <section className={`${righteous.className} ${styles.loginContainer}`} id = 'container'>
           <icons className = {`${righteous.className} ${styles.loginIcons}`}>

                <button className={styles.Authenticated} onClick={authenticated} id = 'authenticated'>
                    Authenticated
                </button>
                <button className={styles.Anonymous} onClick={anonymous} id = 'anonymous'>
                    Anonymous
                </button>
           </icons>

                    <form className={styles.authForm} id = 'authForm'>
                    <label >
                        GamerId
                    </label>
                    <input type = 'text' >
                    </input>


                    <label >
                        Password
                    </label>
                    <input type = 'Password' >
                    </input>

                    <input type = 'submit' value='Play Now!'>

                    </input>
                    </form>
                    <form className={styles.anonymousForm} id = 'anonymousForm'>
                    <label >
                        Guest Name
                    </label>
                    <input type = 'text' >
                    </input>




                    <input type = 'submit' value='Play Now!'>

                    </input>
                    </form>





        </section>
        <footer>
            Made With Love
            In India
        </footer>




        </main>
        </>








    )




}