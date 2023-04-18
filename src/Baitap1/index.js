import React, {Component} from "react";
import Header from "./header";
import Content from "./content";
import Silebar from "./silebar";
import Footer from "./footer";

export default class Baitap1 extends Component{
    render(){
        return (
        <>
            <Header/>
            <div style={{display:"flex"}}> 
            <Content/>
            <Silebar/>
            </div>
           
            <Footer/>

        </>
        )

    }
}