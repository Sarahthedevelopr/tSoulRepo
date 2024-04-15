import React from "react";
import sdata from "./Sdata";
import Card from "./Cards";
import './index.css';

const Netflix = () => {
    return(
      <>
        <Card 
        key={sdata[9].id}     //important to every elemet have unique id in key
        imgsrc={sdata[9].imgsrc}
        title = {sdata[9].title}
        sname = {sdata[9].sname}
        link ={sdata[9].links}
        />

       <Card 
        key={sdata[10].id}     //important to every elemet have unique id in key
        imgsrc={sdata[10].imgsrc}
        title = {sdata[10].title}
        sname = {sdata[10].sname}
        link ={sdata[10].links}
       />

       <Card 
        key={sdata[11].id}     //important to every elemet have unique id in key
        imgsrc={sdata[11].imgsrc}
        title = {sdata[11].title}
        sname = {sdata[11].sname}
        link ={sdata[11].links}
       />

       <Card 
        key={sdata[12].id}     //important to every elemet have unique id in key
        imgsrc={sdata[12].imgsrc}
        title = {sdata[12].title}
        sname = {sdata[12].sname}
        link ={sdata[12].links}
       />

       <Card 
        key={sdata[13].id}     //important to every elemet have unique id in key
        imgsrc={sdata[13].imgsrc}
        title = {sdata[13].title}
        sname = {sdata[13].sname}
        link ={sdata[13].links}
       />

       <Card 
        key={sdata[14].id}     //important to every elemet have unique id in key
        imgsrc={sdata[14].imgsrc}
        title = {sdata[14].title}
        sname = {sdata[14].sname}
        link ={sdata[14].links}
       />

       <Card 
        key={sdata[15].id}     //important to every elemet have unique id in key
        imgsrc={sdata[15].imgsrc}
        title = {sdata[15].title}
        sname = {sdata[15].sname}
        link ={sdata[15].links}
       />

       <Card 
        key={sdata[16].id}     //important to every elemet have unique id in key
        imgsrc={sdata[16].imgsrc}
        title = {sdata[16].title}
        sname = {sdata[16].sname}
        link ={sdata[16].links}
       />

        <Card 
        key={sdata[17].id}     //important to every elemet have unique id in key
        imgsrc={sdata[17].imgsrc}
        title = {sdata[17].title}
        sname = {sdata[17].sname}
        link ={sdata[17].links}
        />

        

       </>
       );  
}

export default Netflix;