import React from 'react';
//import sdata from './Sdata';
//import Card from './Cards';
import Netflix from './Netflix';
import Amazone from './Amazone';



const favSeries ='Netflix';

/* const FavS = () =>{
if(favSeries === 'netflix'){
 return <Netflix/>
}else{
    return <Amazone />
}
} */


/*function ncard(val){
     return(
          <Card 
          key={val.id}     //important to every elemet have unique id in key
          imgsrc={val.imgsrc}
          title = {val.title}
          sname = {val.sname}
          link ={val.links}
         />
     );
} */

/*another way to use map function inside ReactDOM.render with
FAT arrow function --->>>
(isko render ke ander likhna h)

{sdata.map((val) => {
     return(
        <Card imgsrc={val.imgsrc}
     title = {val.title}
     sname = {val.sname}
     link ={val.links}
     />  
     )
})}

*/

// {sdata.map(ncard)}    ------> use this statement (inside react fragment) to show all card data on browers 

const Choose = () => (
  <>
  {/* <h1 className="heading_style">Best Netflix Series Of 2020 to 2024</h1>; */}
  {(favSeries === 'netflix' ? <Netflix /> : <Amazone />)}  {/* used tarnary oprator */}
  {/*<FavS/>*/ }

  {/*{sdata.map(ncard)}*/}
  </>
)



export default Choose;

