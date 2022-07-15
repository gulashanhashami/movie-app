import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";

const Navbardiv= styled.div`
#maind{
    font-family: sans-serif;
  }
  
  #navbar {
      margin: auto;
      width: 100%;
      height: auto;
      //  border: 1px solid red; 
    }
    #navbar1 {
        margin: auto;
        width: 90%;
        height: 7.5vh;
        @media (max-width:415px){
          height:4.5vh;
      }
        align-items: center;
        display: flex;
        justify-content: space-between;
        background-color: white;
        //  border: 1px solid grey;
        // position: sticky;
        top: 0;
      }
      
      .mlogo {
        width: 98%;
        height: 5.3vh;
        @media (max-width:415px){
          width:20%;
          height:4.2vh;
      }
        //  border: 1px solid red; 
        margin-bottom: 3.8%;
      }
      #inps {
        width: 73%;
        background-color: rgba(249, 249, 249, 255);
        height: 70%;
        outline: none;
        position: sticky;
        border: none;
        font-size: 1vw;
        @media (max-width:415px){
          width: 97%;
          font-size: 2vw;
        }
        color: grey;
        font-weight: 500;
        padding-left: 1%;
      }
      .searchb {
        /* border:1px solid grey; */
       position: relative;
       width:2%;
       height:30%;
       @media (max-width:415px){
        width:5%;
        left: -4.5%;
        top: 1.5px;
       }
       top: 2px;
       left: -3.6%;
     }
     
     
      #car {
        color: black;
      }
     
      #dropd {
        width: 100%;
        height: auto;
        position: sticky;
        border-bottom: .1vw solid grey;
      }
      #dropd1 {
        width: 90.1%;
        height: 5vh;
        position: sticky;
        padding: 0px;
        font-size: 1.2vw;
        @media (max-width:415px){
          font-size: 3.2vw;
          overflow-x: scroll;
          padding-bottom:2%;
          padding-top:2%;
        }
        display: flex;
        align-items: center;
        margin-left: 4.9%;
        justify-content: space-between;
        //  border: 1px solid grey; 
      }
     
      .down {
        width: 90%;
        display: flex;
        position: absolute;
        top: 22.5%;
        z-index: 100;
        background-color: white;
        // border:1px solid grey; 
        height: 60%;
        @media (max-width:415px){
          height:27vh;
      }
        margin-left: 5%;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      }
     
      #link{
        color: grey;
      }
      .lasttext{
        margin-top: 8vh;
      }
      
    
      .texthover {
        color: #333333;
        /* font-weight: 500; */
        padding:10px 10px 10px 5px;
      }
      
      a {
        text-decoration: none;
      }
      #topn{
        width: 100%;
        height: 5vh;
        @media (max-width:415px){
          height:3vh;
          padding-bottom:2%;
          padding-top:2%;
      }
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        // border: 1px solid red;
        
      }
      #topn1{
        width: 100%;
        height: 5vh;
        @media (max-width:415px){
          height:3vh;
          margin-top:1.5%;
          padding-bottom:2%;
          padding-top:2%;
      }
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:rgba(249, 249, 249, 255) ;
        // background-color: grey; 
        
      }
      .ltop{
        color: white;
        
        font-size: 1vw;
        @media (max-width:415px){
          font-size: 2.5vw;
          font-weight:800;
        }
        font-weight: 650;
        /* float: left; */
        align-items: center;
      }
      #ltop1{
        margin-left: 6%;
        @media (max-width:415px){
          margin-left: 4%;
        }
      }
      #ltop2{
        margin-right: 6%;
        @media (max-width:415px){
          margin-right: 0%;
          margin-left: 4%;
        }
      }
      #topn12{
        margin-left: 15%;
        width: 56%;
     
        font-size: 1.2vw;
        @media (max-width:415px){
          margin-left: 4%;
          width: 48%;
          font-size: 2.5vw;
        }
        height: 5vh;
        display: flex;
        color: grey;
        justify-content: space-between;
        align-items: center;
        //  border: 1px solid red; 
      }
      #topn13{
        margin-right: 5%;
        width: 16%;
        @media (max-width:415px){
          margin-right: 0%;
          width: 35%;
        }
        height: 5vh;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
      //  border: 1px solid red; 
      }
      .pin{
        font-size: 1vw;
        @media (max-width:415px){
          font-size: 2.7vw;
        }
        color: grey;
      }
      .cart{
        width:97%;
        height:4vh;
        @media (max-width:415px){
          height:2.8vh;
          width:50%;
      }
        // border: 1px solid red; 
      }
      .help1{
        width:99%;
        height:99%;
       
      }
      .help{
        width:92%;
        height:4vh;
       
      }
      .btntop{
        width:150px;
        padding:3%;
        color:white;
        background-color: black;
        border: 2px solid black;
        border-radius:.3vw;
        
      }
      .btntop:hover{
        color:red;
      }
`;


export const Navbar = () => {
   
  return (
    //**code for navbar**//
          <Navbardiv> 
    <div id="maind">
        <div id="topn">
          <p id="ltop1" className="ltop">Welcome to our  <span style={{color:"red"}}>MOVIE APP</span></p>
          <p id="ltop2" className="ltop">Extra 20% Cashback On All Orders |<span>T&C Apply </span><Link to={"/"}><span style={{color:"red"}}>Signin</span></Link></p>
        </div>
        <div id="topn1">
            <div id="topn12">
               <Link to={"/addmovie"}><button className="btntop">Add movie</button></Link>
               <Link to={"/allmovie"}><button className="btntop">View All movies</button></Link>
               
            </div>
            <div id="topn13">
                <Link to={""}>
               <p className="pin">Go For All Movie</p> 
               </Link>
               <p className="pin" style={{color:"red"}}>Find Best Movie</p>
            </div>
        </div>

         <div id="navbar"> 
         <div id="navbar1">
      <Link to="/"> <img className="mlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6qtnhIGlBn39GfoNnnonOnUGaI8pS-46dg&usqp=CAU" alt="" srcset="" /></Link> 
        
         <input id="inps"  type="text" placeholder="Search movie" />
            <img className="searchb" src="https://img.icons8.com/material-outlined/2x/search.png" alt="" />
        

         <Link to={"/"}>
         <div>
             <img className="help" src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" alt="" />
         </div>
         </Link>
      
         <Link to= "/">
         <div className="cart">   
         <img id="profile" className="help1" src="https://cdn.iconscout.com/icon/free/png-64/profile-5023700-4195416.png" alt="" />  
        
         </div>
         </Link>
         <Link to={""}>
         <div>
             <img className="help" src="https://ii1.pepperfry.com/images/svg/icon-wishlist-21.svg" alt="" />
         </div>
         </Link>
         <Link to="/">
         <div className="cart"> 
         <img className="help1" src="https://cdn.iconscout.com/icon/free/png-64/cart-grocery-store-shopping-shop-30488.png" alt="" />
           
         </div>
         </Link>
         </div>
      </div>
     

    </div>
    </Navbardiv>
  );
};