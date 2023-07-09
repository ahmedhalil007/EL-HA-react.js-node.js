
import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebookSquare } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';

   function App() {
    const [tab, setTab] = useState('Iskustvo');
    const [isMailSent, setIsMailSent] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
        
       const sendEmail = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5500/send-email', { message, email, name }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
        })
            .then(() => setIsMailSent(true));
       }

return (
    <><><section>
        {/*home*/}
      <div id='pocetna'>
         <div className="bg-center bg-cover h-screen bg-fixed bg-[url('./images/pozadina2.jpg')]">
            <nav className='flex justify-between  p-4'>
                <img src='./images/logo.jpeg' alt='Logo' className='h-16 ml-20' />
                <div className='flex mr-20 pt-4 text-lg '>

                    <a href='#pocetna' className='px-4 text-black border-b-4 border-transparent hover:border-black duration-500' >Pocetna</a>
                    <a href='#onama' className='px-4 text-black border-b-4 border-transparent hover:border-black duration-500' >O nama</a>
                    <a href='#product' className='px-4 text-black border-b-4 border-transparent hover:border-black duration-500' >Proizvodi</a>
                    <a href='#project' className='px-4 text-black border-b-4 border-transparent hover:border-black duration-500' >Projekti</a>
                    <a href='#contact' className='px-4 text-black border-b-4 border-transparent hover:border-black duration-500' >Kontakt</a>
                </div>
            </nav>
            <div className='flex items-center h-full'>
                <div className='text-left ml-20'>
                    <h1 className='text-black text-7xl font-bold'>EL-HA Stolarija</h1>
                    <p className='text-left pt-4 text-4xl text-black'>Najkvalitetniji materijali i<br></br> najmodernija tehnologija izrade</p>
                </div>
            </div>
         </div>
       </div>  
    </section>
    {/* about */}
        <section>
         <div id='onama'>
            <div className=" bg-yellow-800 ">
                <div className="py-20 px-10">
                    <div className="flex">
                        <div className="basis-2/5">
                            <img src='./images/onama.jpg' className='rounded-full p-5' />
                        </div>
                        <div className="basis-3/5 ">
                            <h2 className="text-white text-3xl font-bold p-5">O Nama</h2>
                            <p className='text-left  text-base text-white px-5 py-2'>Poslujemo na području cijele BiH , a svoje proizvode plasiramo i na zahtjevno inozemno tržište Njemačke, Austrije, Švicarske, Italije i drugdje. Također smo svoj rad uskladili s međunarodnim normama upravljanja kvalitetom prema ISO 9001 i upravljanja okolišem prema ISO 14001. To nas obvezuje da prihvaćamo politiku kvalitete i upravljanja okolišem i s njom povezana pravila dosljedno provodimo u cilju zadovoljstva naših kupaca i očuvanja okoliša.</p>
                            <div className='pt-1 flex space-x-5'>
                            <a className='px-4 text-white border-b-4 border-transparent hover:border-black cursor-pointer'style={{ transition: '0.5s' }} onClick={() => setTab('Iskustvo')}>Iskustvo</a>
                            <a className='px-4 text-white border-b-4 border-transparent hover:border-black cursor-pointer'  style={{ transition: '0.5s' }} onClick={() => setTab('Osoblje')}>Osoblje</a>
                            <a className='px-4 text-white border-b-4 border-transparent hover:border-black cursor-pointer'  style={{ transition: '0.5s' }}onClick={() => setTab('Proizvodnja')}>Proizvodnja</a>
                            </div>
                            {tab === 'Iskustvo' && (
                                <>
                                    <p className='text-left text-base text-blackt px-5 py-2'>Godine</p>
                                    <p className='text-left text-lg text-white px-5 py-2'>Preko 20 godina iskustva</p>
                                    <p className='text-left text-lg text-white px-5 py-2'>Stotine zadovoljnih klijenata</p>
                                </>
                            )}
                            {tab === 'Osoblje' && (
                                <>
                                    <p className='text-left text-base text-black px-5 py-2'>Proizvodnja</p>
                                    <p className='text-left text-lg text-white px-5 py-2'>Iskusni i profesionalni proizvodjaci</p>
                                    <p className='text-left text-lg text-white px-5 py-2'>Iskusni i profesionalni monteri nasih proizvoda</p>
                                </>

                            )}
                            {tab === 'Proizvodnja' && (
                                <>
                                    <p className='text-left text-base text-black px-5 py-2 '>Godine</p>
                                    <p className='text-left text-lg text-white px-5 py-2'>Najmodernije CNC masine</p>
                                    <p className='text-left text-lg text-white px-5 py-2'>Savremeno opremljene fabrike </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        </section></>

    <section> 
        {/*product*/}
       <div id='product'>
            <div className="h-full bg-slate-50 ">
                <div className="text-center pt-8">
                    <h1 className=" text-6xl black-white p-4 font-semibold ">Nasi proizvodi</h1>
                    <div className="w-[15%] bg-slate-700 h-0.5 mx-auto mb-2 "></div>
                </div>
                <div className=" block box-border py-8 px-[7%] ">
                    <div className="flex flex-wrap items-center gap-4 ">
                        <div className=" grow shrink basis-80 p-4 border border-stone-300 border-solid">
                            <div className="flex ">
                                <img src='./images/proizvod1.jpg' className='w-full p-4 transition duration-0.5s transform hover:scale-110' />
                            </div>
                            <div className="py-8 px-4">
                                <h2 className="text-[22px] my-4 font-light text-[#090909]">Sobna vrata</h2>
                                <p className="text-[18px] font-extralight my-4 text-[#423e40]"> Uz naša PVC sobna vrata možete  dati Vašoj kući posebnu vrijednost</p>
                            </div>
                        </div>

                        <div className=" grow shrink basis-80 p-4 border border-stone-300 border-solid">
                            <div className="flex">
                                <img src='./images/proizvod2.jpg' className='w-full p-4 transition duration-0.5s transform hover:scale-110' />
                            </div>
                            <div className="py-8 px-4">
                                <h2 className="text-[22px] my-4 font-light text-[#090909]">PVC prozori</h2>
                                <p className="text-[18px] font-extralight my-4 text-[#423e40]"> Nasa PVC prozorska rješenja čine objekte prikladnim za budućnost</p>
                            </div>
                        </div>

                        <div className=" grow shrink basis-80 p-4 border border-stone-300 border-solid">
                            <div className="flex">
                                <img src='./images/komarnici1.jpeg' className='w-full p-4 transition duration-0.5s transform hover:scale-110' />
                            </div>
                            <div className="py-8 px-4">
                                <h2 className="text-[22px] my-4 font-light text-[#090909]">Komarnici</h2>
                                <p className="text-[18px] font-extralight my-4 text-[#423e40]">Mrežica komarnika se složi u paket i otvara se kao harmonika</p>
                            </div>
                        </div>

                        <div className=" grow shrink basis-80 p-4 border border-stone-300 border-solid">
                            <div className="flex">
                                <img src='./images/ulaznavrata.jpeg' className='w-full p-4 transition duration-0.5s transform hover:scale-110' />
                            </div>
                            <div className="py-8 px-4">
                                <h2 className="text-[22px] my-4 font-light text-[#090909]">Ulazna vrata</h2>
                                <p className="text-[18px] font-extralight my-4 text-[#423e40]"> Uz naša PVC ulazna vrata možete  dati Vašoj kući posebnu vrijednost i sigurnost</p>
                            </div>
                        </div>

                        <div className=" grow shrink basis-80 p-4 border border-stone-300 border-solid">
                            <div className="flex">
                                <img src='./images/proizvod3.jpg' className='w-full p-4 transition duration-0.5s transform hover:scale-110' />
                            </div>
                            <div className="py-8 px-4">
                                <h2 className="text-[22px] my-4 font-light text-[#090909]">Roletne za prozore</h2>
                                <p className="text-[18px] font-extralight my-4 text-[#423e40]">  Dizajnirane su tako da pružaju zaštitu od sunčevih zraka, vjetra, kiše, snijega, hladnoće, buke i provalnika</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </section>

        <section>
            {/*project*/}
          <div id='project'>  
            <div className="py-[50px] block box-border bg-stone-200">
                <div className="py-2.5 px-[10%]">
                    <h1 className="text-[32px] font-bold">Nasi projekti</h1>
                    <div className="flex mt-[50px] gap-10 ">
                      <div className="group relative rounded-[10px] cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                         <img className="h-full w-full  transition-transform duration-500  group-hover:scale-125" src='./images/project2.jpeg' />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                           <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                             <h1 className="font-dmserif text-xl font-bold  text-white">Naselje Nova Otoka</h1>
                             <p className="mb-3 text-base  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Proizvodnja i montaza cjeloukupne stolarije u naselju Nova Otoka Sarajevo</p>
                            </div>
                       </div>

                       <div className="group relative rounded-[10px] cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                         <img className="h-full w-full  transition-transform duration-500  group-hover:scale-125" src='./images/project1.jpeg' />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                           <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                             <h1 className="font-dmserif text-xl font-bold text-white">Naselje Bulevar Stup</h1>
                             <p className="mb-3 text-base  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Proizvodnja i montaza cjeloukupne stolarije u naselju Bulevar Stup Sarajevo</p>
                             </div>
                       </div>

                       <div className="group relative rounded-[10px] cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                         <img className="h-full w-full  transition-transform duration-500 group-hover:scale-125" src='./images/project4.webp' />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                           <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                             <h1 className="font-dmserif text-xl font-bold text-white">Poslovni prostor Italija</h1>
                             <p className="mb-3 text-base  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Proizvodnja i montaza cjeloukupne stolarije u poslovnim prostorima Italija</p>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section>
            {/*contact*/}
          <div id='contact'>
             <div className="box-border block bg-stone-200">
                <div className="py-2.5 px-[10%]">
                    <div className="flex justify-between flex-wrap">
                        <div className="basis-[35%]">
                            <h1 className="text-[32px] font-bold">Kontaktirajte nas</h1>
                            <p className="mt-[30px] text-[17px]"><i className="text-[#907090] inline-block mr-[15px] text-[17px] font-black "><FaEnvelope/></i>elhastolarija@gmail.com</p>
                            <p className="mt-[30px] text-[17px]"><i className="text-[#907090] inline-block mr-[15px] text-[17px] font-black"><FaPhoneAlt/></i>032 777 098</p>
                            <p className="mt-[30px] text-[17px]"><i className="text-[#907090] inline-block mr-[15px] text-[17px] font-black"><FaMapMarkerAlt/></i>B Mahala, Visoko</p>
                           <div className="mt-[30px]">
                             <a href='https://www.facebook.com'><i className="text-[30px] mr-[15px] text-[#907090] inline-block "><FaFacebookSquare/></i></a>
                             <a href="https://www.instagram.com"><i className="text-[30px] mr-[15px] text-[#907090] inline-block "><FaInstagram/></i></a>
                             </div>
                            <a href="images/katalog.pdf" className="w-fit text-white my-[50px] mx-auto border border-solid border-black py-3.5 px-[50px] rounded-md inline-block bg-[#b3b2b3]">Preuzmi katalog</a>
                        </div>

                        <div className="basis-[60%]">
                            <form className="w-full block m-0 p-0" onSubmit={(e) => { sendEmail(e)}}>
                                <input className="w-full text-black text-[18px] border-0 border-solid border-black outline-none bg-[#f5f4f4] p-[15px] my-[15px] mx-0 rounded-md " type="text" name="Ime" placeholder="Vase ime" required onChange={(e) => {setName(e.target.value)}}/>
                                <input className="w-full text-black text-[18px] border-0 border-solid border-black outline-none bg-[#f5f4f4] p-[15px] my-[15px] mx-0 rounded-md " type="email" name="email" placeholder="Vas email" required onChange={(e) => {setEmail(e.target.value)}} />
                                <textarea className="w-full text-black text-[18px] border-0 border-solid border-black outline-none bg-[#f5f4f4] p-[15px] my-[15px] mx-0 rounded-md " name="message" rows="6" placeholder="Vasa poruka" onChange={(e) => {setMessage(e.target.value)}}></textarea>
                                <button className="w-fit text-white mb-[50px] mt-5 mx-auto text-[18px] border border-solid border-black py-3 px-[60px] rounded-md inline-block bg-[#b3b2b3] cursor-pointer" type='submit'>Posalji</button>
                            </form>
                        </div>
                        {isMailSent && <>POSLAN MAIL</>}  
                    </div>
                </div>
             </div>
            </div>
        </section>

        <section>
            <div className="w-full text-center font-light py-[25px] px-0 bg-[#908e8f]">
                <p> © Sva prava zadrzava EL-HA Stolarija</p>
            </div>
        </section></>
      
      
            

  
);    
}
export default App;

