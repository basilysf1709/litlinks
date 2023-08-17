"use client"
import React, {useState} from 'react';
import Navbar from "@/components/Navbar";
import Booklist from "@/components/Booklist";
import Footer from "@/components/Footer";

export default function contact() {

    const handleCategory = () => {

    }

    return (<>
        <Navbar />
        <div className="mx-auto mt-10 mb-0 max-w-screen-xl text-center lg:py-16">
            <h1 className="text-6xl font-extrabold tracking-tight leading-none text-gray-900">Build your personalized digital library</h1>
        </div>
        {/* <div className="flex mx-auto max-w-screen-xl text-left column lg:py-12">
            <h2 className="m-4 text-3xl font-bold tracking-tight leading-none text-gray-900">Add category</h2>
            <button onClick={handleCategory} type="button" className="bg-blue-800 text-white hover:text-blue-500 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> 
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
        </div>
        <div className="flex mx-auto max-w-screen-xl text-left column lg:py-12">
            <h2 className="m-4 text-l font-bold tracking-tight leading-none text-gray-900">Add books</h2>
            <button type="button" className="bg-blue-800 text-white hover:text-blue-500 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> 
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
        </div> */}
        <Booklist />
        <Booklist />
        <Footer />
    </>)
}