import React, { useState } from 'react'

import logo from '../src/images/logo.svg';
import mobile from './images/image-mockups.png'
import b from './images/icon-api.svg'
import a from './images/icon-budgeting.svg'
import d from './images/icon-online.svg'
import c from './images/icon-onboarding.svg'
import confeti from './images/image-confetti.jpg'
import currency from './images/image-currency.jpg'
import restaurant from './images/image-restaurant.jpg'
import plane from './images/image-plane.jpg'
import hamburger from './images/icon-hamburger.svg'

import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import pinterest from './images/icon-pinterest.svg'
import twiter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'



   

export default function Home(){
    const [visivel,setVisivel]=useState(true)

    const aparecer_lista_header = ()=>{
        
        if(visivel){
            setVisivel(!visivel)
            document.querySelector('ul').style=`
            display:flex;
            background-color:white;
            position:absolute;
            left:20px;
            right:20px;
            top:70px;
            text-align:center;
            padding:0;
            color:black;
            border-radius:10px;
         `
         document.querySelectorAll('ul li').forEach((elem)=>{
             elem.style=`
                margin:10px;
             `
         })
         setVisivel(!visivel)
        }
        else{
            document.querySelector('ul').style=`
            display:none;
 
         `
         document.querySelectorAll('ul li').forEach((elem)=>{
             elem.style=`
                margin:10px;
             `
         })
         setVisivel(!visivel)
        }

    }
    return<>
        
        <header className='container'>
            <img src={logo} alt='logo'/>
            <ul>
                <li><a href='h'>Home</a></li>
                <li><a href='h'>About</a></li>
                <li><a href='h'>Contact</a></li>
                <li><a href='h'>Blog</a></li>
                <li><a href='h'>Careers</a></li>
            </ul>
            <div className='btn_header '>Request Invit</div>
            <div onClick={aparecer_lista_header} className='botao_mobile'><img src={hamburger} alt=''/></div>
        </header>
        <section className='section_principal'>
            <div className='corpo_section '>
                <div className='titulo_section'>Next generation digital banking</div>
                <div className='texto_section'>
                Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more. Request Invite Why choose Easybank? 
                We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before
                </div>
                <div className='btn_header'>Request Invit</div>
            </div>
            <img className='img_celulares' src={mobile} alt=''/>
            <div className='corpo_section_mobile '>
                <div className='titulo_section'>Next generation digital banking</div>
                <div className='texto_section'>
                Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more. Request Invite Why choose Easybank? 
                We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before
                </div>
                <div className='btn_header'>Request Invit</div>
            </div>
        </section>  
        <section className=' section_1'>
           <div className='container'>
                <h1>Why choose easybank </h1>
                <div className='texto_section'>Your Easybank account will be a one-stop-shop for spending, saving, budgeting, 
                    investing, and much more. 
                </div>
                <div className='blocos'> 
                    <div className='bloco'>
                        <img src={d} alt=''/>
                        <h1>Online Banking</h1>
                        <div className='texto_section'>Your Easybank account will be a one-stop-shop for spending, saving, budgeting, 
                              investing, and much more. 
                       </div>
                    </div>
                    <div className='bloco'>
                        <img src={a} alt=''/>
                        <h1>Online Banking</h1>
                        <div className='texto_section'>Your Easybank account will be a one-stop-shop for spending, saving, budgeting, 
                              investing, and much more. 
                       </div>
                    </div>
                    <div className='bloco'>
                        <img src={c} alt=''/>
                        <h1>Online Banking</h1>
                        <div className='texto_section'>Your Easybank account will be a one-stop-shop for spending, saving, budgeting, 
                              investing, and much more. 
                       </div>
                    </div>
                    <div className='bloco'>
                        <img src={b} alt=''/>
                        <h1>Online Banking</h1>
                        <div className='texto_section'>Your Easybank account will be a one-stop-shop for spending, saving, budgeting, 
                              investing, and much more. 
                       </div>
                    </div>
                </div>
           </div>
        </section>
        <section >
            <div className='container'>
                <h1>Latest artigles</h1>
                <div className='blocos'>
                     <div className='img_bloco'>
                         <img src={currency} alt=''/>
                         <div className='autor'>by Wilhian Hutto</div>
                         <div className='titulo'>Your Easybank account will be a. </div>
                         <div className='texto_bloco'>
                         Your Easybank account will be a one-stop-shop for spending, saving, budgeting, 
                              investing, and much more. 
                         </div>
                    </div>
                    <div className='img_bloco'>
                         <img src={confeti} alt=''/>
                         <div className='autor'>by Wilhian Hutto</div>
                         <div className='titulo'>Your Easybank account will be a . </div>
                         <div className='texto_bloco'>
                         Your Easybank account will be a one-stop-shop for spending, saving, budgeting, 
                              investing, and much more. 
                         </div>
                    </div>
                    <div className='img_bloco'>
                         <img src={plane} alt=''/>
                         <div className='autor'>by Wilhian Hutto</div>
                         <div className='titulo'>Your Easybank account will be . </div>
                         <div className='texto_bloco'>
                         Your Easybank account will be a one-stop-shop for spending, saving, budgeting, 
                              investing, and much more. 
                         </div>
                    </div>
                    <div className='img_bloco'>
                         <img src={restaurant} alt=''/>
                         <div className='autor'>by Wilhian Hutto</div>
                         <div className='titulo'>Your Easybank . </div>
                         <div className='texto_bloco'>
                         Your Easybank account will be a one-stop-shop for spending, saving, budgeting, 
                              investing, and much more. 
                         </div>
                    </div>
                </div>
            </div>

        </section>
        <footer>
           <ol>
               <li className='logo_footer'><img src={logo} alt=''/></li>
               <li className='sociais_footer'>
                   <img src={facebook} alt=''/>
                   <img src={youtube} alt=''/>
                   <img src={twiter} alt=''/>
                   <img src={instagram} alt=''/>
                   <img src={pinterest} alt=''/>
               </li>
           </ol>
           <ol>
               <li>Aboult us</li>
               <li>Contact</li>
               <li>Blog</li>
           </ol>
           <ol>
               <li>Careers</li>
               <li>Support</li>
               <li>Privacy policy</li>
           </ol>
           <ol className='ol_final'>
               <li><div className='btn_header'>Request Invit</div></li>
               <li>Easybanking All Rights Reserved</li>
           </ol>
        </footer>
    </>
}


