import React from 'react';
import AnnounceCard from './AnnounceCard.jsx';


const Main = () => {
    return (
        <div className='mx-auto ml-10 mt-6 w-6/12 flex-column items-center justify-center text-black'>
            <div className='mb-10 max-w-3xl text-left'> 
                <h1 className='text-2xl'>Welcome to General Engineering 1004</h1>
            </div>
            <AnnounceCard 
                title='Congratulations to our showcase winners!' 
                content={'Dear class,\n\nI hope finals are treating you well. :) As we process final grades, I wanted to share a final thank you for a wonderful semester - I know that I can speak on behalf of our faculty and TAs when I express how much we fun we had learning alongside you all this spring. Thank you for all of your time and effort!\n\nPlease join me as well in congratulating our Gunter Georgi and Nick Russo Award winners for this spring.\n\nGunter Georgi\n\nHIR: Skyline Builders and Innovation (Section A2) -  Veer Choksi, Arda Dinc, and Jomyuth Luangtana-anan\nRAD: RoboCaddy (Section E2) - Alex Huang, Jack Li, Samarth Pusegaonkar, and Jason Tung\nVEX MRR: Top Dog Robotics (Section F3) - George Chorny, Jeremiah Duran, Justin Sun, and Alan Zhang\nVEX LAZ: SAI LLC (Section G2) - Irika Aggarwal, Ishraq Basher, Sarah Niu, and Aksana Rodshi\n\nNick Russo\nHIR:  Etchasia Rayboah Innovations (Section B1) - Anastasia Cruz, Indi Etchebarne, Raymond Li, and Blessing Yeboah\nRAD: Code Blocks (Section E3) - Bill Li, Mitsuki Nakajima, and Dwayne Ong\n\nHappy summer,\n\nProf. Paredes'}
                date='May 13, 2024'
                time='10:51 AM'
            />
        </div>
    )
};

export default Main;
