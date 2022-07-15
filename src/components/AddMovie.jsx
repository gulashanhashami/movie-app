import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const Stylediv=styled.div`
font-family:   Arial, sans-serif;
 .title{
     margin: auto;
     width: 45%;
     font-size:1.2vw;
     color: red;
    //   border: 1px solid red; 
 }
  form{
      width: 45%;
      height: auto;
      /* border: 1px solid red; */
      margin: auto;
  } 
  input{
      width: 60%;
      height: 3.5vh;
      font-size:1vw;
  }
  p{
      font-size:1.2vw;
      line-height:.1vh;
  }

  .select{
    font-size:1.2vw;
  }
  .option{
      width: 45%;
      height: 4.3vh;
      font-size:1.2vw;
  }
  #btn{
      width: 30%;
      height: 4.5vh;
      font-weight: bold;
      font-size:1.2vw;
      background-color: green;
      color: white;
      border: 2px solid green;
      border-radius: 3px;
      margin-left: 14%;
  }
  #btn:hover{
      background-color: white;
      color: red;
  }
`;
export const AddMovie=()=>{
const [pdata, setData] =useState({})
 let navigate=useNavigate();
const handleChange=(e)=>{
   let key=e.target.name;
       setData(
           {
               ...pdata,
               [key]: e.target.value,
           }
       )
}

   return (
      
           <Stylediv>
       <div className="title">
       <h1>Add Movie</h1>
       </div>
       <form onSubmit={(e)=>{
          
           e.preventDefault();
           axios.post(`https://compa-assig.herokuapp.com/movies`, pdata).then((res)=>{
            if(pdata.price!==0){
                alert("To make a payment");
                navigate("/allmovie")
            }
              setData({
                movie_name:"",
                movie_title:"",
                  category:"",
                  price:"",
                  movie_rating:"",
              })
           })
       }}>
       <p>movie name</p>
       <input type="text" name="movie_name" value={pdata.movie_name} onChange={handleChange} placeholder="movie name" required />
       <p>Title</p>
       <input type="text" name="movie_title" value={pdata.movie_title} onChange={handleChange} placeholder="Title" required />
        <p>Enter category</p>
       <input type="text" name="category" value={pdata.category} onChange={handleChange} placeholder="category" required />
       <p>Enter price</p>
       <input type="text" name="price" value={pdata.price} onChange={handleChange} placeholder="price" required />
       <br />
       <br />
     <span className="select">Select Rating
       <select name="movie_rating" value={pdata.movie_rating} onChange={handleChange} className="option" required>
           <option value="0">Select</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
       </select></span>
       <br />
       <br />
      <input id="btn" type="submit"  value="Submit" />
       </form>
</Stylediv>
    
   )
}