"use client"
import React, {useState} from 'react';
import Navbar from "@/components/Navbar";
import AddCategory from "@/components/AddCategory";
import Booklist from "@/components/Booklist";
import Footer from "@/components/Footer";

export default function contact() {

    return (<>
        <Navbar />
        <AddCategory />
        <Booklist />
        <Booklist />
        <Footer />
    </>)
}