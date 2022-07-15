import { useEffect, useState } from "react";
import styled from "styled-components";

const Navbardiv= styled.div`

#upperdiv{
    width: 90%;
    display: flex;
    justify-content: space-between;
    height: 60vh;
    @media (max-width:415px){
        height:27vh;
    }
    margin: auto;
    //  border: 1px solid red; 
}
#large{
    width: 100%;
    height: 100%;
    //  border: 1px solid green; 
}
.imgtop{
    width: 100%;
    height: 100%;
   
}

.img1{
    width: 99%;
    height: 95%;
}
img{
    width: 100%;
    height: 100%;
}

#div2{
    width: 90%;
    margin: auto;
    margin-top: 3vh;
    height: 12vh;
    @media (max-width:415px){
        height:10vh;
    }
    //  border: 1px solid red; 
}
.head{
    margin-left: 5%;
    font-size: 2.3vw;
    @media (max-width:415px){
        font-size: 3.8vw;
    }  
  
}
#box1{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 32vh;
    @media (max-width:415px){
        height:23vh;
    }
    /* border: 1px solid red; */
}
.box11{
    width: 24.5%;
    text-align:starting ;
//  border: 1px solid grey; 
}

#box2{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 60vh;
    @media (max-width:415px){
        height:27vh;
    }
    /* border: 1px solid red; */
}
.box21{
    width: 32.8%;
 /* border: 1px solid red; */
}

#box3{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 40vh;
    @media (max-width:415px){
        height:25vh;
    }
    /* border: 1px solid red; */
}
.p1{
    color: black;
    font-size: 1.3vw;
    @media (max-width:415px){
        font-size: 2.8vw;
    }
    font-weight: 500;
}
.price{
    font-size: 1.3vw;
    @media (max-width:415px){
        font-size: 2.7vw;
    }
}
.box4{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 2vh;
    height: 62vh;
    @media (max-width:415px){
        height:29vh;
    }
    /* border: 1px solid red; */
}
.box41{
    width: 49.6%;
 /* border: 1px solid red; */
}
`;
export const Home=()=>{
const [slideData, setSlide]= useState(-1);

//**code for slider***//
var arr=["https://www.filmibeat.com/imgm/416x335x100/2017/04/thor-ragnarok_1492492704100.jpg","https://www.filmibeat.com/imgm/416x335x100/2017/01/the-crew_148463179150.jpg", "https://www.filmibeat.com/imgm/416x335x100/2016/04/x-men-apocalypse_1459854780110.jpg", "https://www.filmibeat.com/imgm/416x335x100/2015/09/hotel-transylvania-2_1442924537200.jpg", "https://www.filmibeat.com/imgm/416x335x100/2014/08/teenage-mutant-ninja-turtles_1408432539120.jpg","https://www.filmibeat.com/imgm/416x335x100/2014/02/captain-america-winter-soldier_13933498241.jpg"];
useEffect(()=>{
   setInterval(()=>{
     
        setSlide((prev)=>{
            if(prev===3){
                return prev=0
            }
            return prev+1
        })
       
   }, 4000)
},[])

    return(
        <Navbardiv>
        <div>
                 <div>
     <div id="upperdiv">
      <div id="large">
       <img className="imgtop" src={arr[slideData]} alt="Loading..." />
      </div>
     </div>
     {/* <br /> */}
     <div id="div2">
         <img className="imgtop" src="https://img.freepik.com/free-vector/online-cinema-banner-with-open-clapper-board-film-strip_1419-2242.jpg?size=626&ext=jpg&ga=GA1.2.644178282.1657873646" alt="" />
     </div>
 
     {/**code, for category wise movies**/}
     <h1 className="head">Category wise movies</h1>
     <div id="box1">
         <div id="gul" className="box11">
             <img className="img1" src="https://www.filmibeat.com/imgm/416x335x100/2014/01/how-to-train-your-dragon-2-poster_139030528440.jpg" alt="" />
          
         </div>
         <div className="box11">
         <img className="img1" src="https://www.filmibeat.com/imgm/416x335x100/2014/01/kellan-lutz-still-from-film-legend-of-hercules_1389088638170.jpg" alt="" />
         </div>
         <div className="box11">
         <img className="img1" src="https://www.filmibeat.com/imgm/416x335x100/2013/12/police-story-2013_1387885969190.jpg" alt="" />
       
         </div>
         <div className="box11">
         <img className="img1" src="https://www.filmibeat.com/imgm/416x335x100/2015/02/fifty-shades-of-grey_142286324050.jpg" alt="" />
        
         </div>
     </div>
     <br />
     <br />
     <div id="box2">
     <div className="box21">
     <img className="img2" src="https://www.filmibeat.com/imgm/416x335x100/2014/01/i-frankenstein-poster_138908704700.jpg" alt="" />
     </div>
         <div className="box21">
         <img src="https://www.filmibeat.com/imgm/416x335x100/2013/11/keanu-reeves-still-from-film-47-ronin_1385468111100.jpg" alt="" />
         </div>
         <div className="box21">
         <img src="https://www.filmibeat.com/imgm/416x335x100/2014/04/maleficent-poster_1398083517170.jpg" alt="" />
         </div>
     </div>
     <br />
    
     <br />
     <div className="box4">
     <div className="box41">
         <img src="https://www.filmibeat.com/imgm/416x335x100/2014/02/kinopoisk-ru_139348480940.jpg" alt="" />
     </div>
         <div className="box41">
             <img src="https://www.filmibeat.com/imgm/416x335x100/2014/01/robocop-2014_138995969740.jpg" alt="" />
         </div>
     </div>
     <br />
     </div>   
        </div>
        </Navbardiv>
    )
}