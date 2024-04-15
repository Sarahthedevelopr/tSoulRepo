import React from "react";
import sdata from "./Sdata";
import Card from "./Cards";
import './index.css';

const Amazone = () => {
    return(
      <>
        <Card 
        key={sdata[0].id}     //important to every elemet have unique id in key
        imgsrc={sdata[0].imgsrc}
        title = {sdata[0].title}
        sname = {sdata[0].sname}
        link ={sdata[0].links}
       />

        <Card 
        key={sdata[1].id}     //important to every elemet have unique id in key
        imgsrc={sdata[1].imgsrc}
        title = {sdata[1].title}
        sname = {sdata[1].sname}
        link ={sdata[1].links}
        /> 

        <Card 
        key={sdata[2].id}     //important to every elemet have unique id in key
        imgsrc={sdata[2].imgsrc}
        title = {sdata[2].title}
        sname = {sdata[2].sname}
        link ={sdata[2].links}
        /> 

       <Card 
        key={sdata[3].id}     //important to every elemet have unique id in key
        imgsrc={sdata[3].imgsrc}
        title = {sdata[3].title}
        sname = {sdata[3].sname}
        link ={sdata[3].links}
        /> 

        <Card 
        key={sdata[4].id}     //important to every elemet have unique id in key
        imgsrc={sdata[4].imgsrc}
        title = {sdata[4].title}
        sname = {sdata[4].sname}
        link ={sdata[4].links}
        /> 

        <Card 
        key={sdata[5].id}     //important to every elemet have unique id in key
        imgsrc={sdata[5].imgsrc}
        title = {sdata[5].title}
        sname = {sdata[5].sname}
        link ={sdata[5].links}
        /> 

       <Card 
        key={sdata[6].id}     //important to every elemet have unique id in key
        imgsrc={sdata[6].imgsrc}
        title = {sdata[6].title}
        sname = {sdata[6].sname}
        link ={sdata[6].links}
        /> 

        <Card 
        key={sdata[7].id}     //important to every elemet have unique id in key
        imgsrc={sdata[7].imgsrc}
        title = {sdata[7].title}
        sname = {sdata[7].sname}
        link ={sdata[7].links}
        /> 

       <Card 
        key={sdata[8].id}     //important to every elemet have unique id in key
        imgsrc={sdata[8].imgsrc}
        title = {sdata[8].title}
        sname = {sdata[8].sname}
        link ={sdata[8].links}
        /> 

 </> 
     );
}

export default Amazone;

