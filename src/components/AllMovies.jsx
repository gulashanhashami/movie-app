
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

  import axios from "axios";

  import styled from "styled-components";

  const ResultDiv = styled.div`
  font-family:   Arial, sans-serif;

.filter{
  width: 20%;
  cursor:pointer;
  font-weight: bold;
  font-size: 1.2vw;
  height: 3.5vh;
  margin-right: 10%;
  color:white;
  background-color: teal;
  border: 2px solid teal;
  border-radius: .3vw;
}
.sort{
  width: 20%;
  font-weight: bold;
  font-size: 1.2vw;
  height: 3.5vh;
  border-radius: .3vw;
}
  #searchbar{
    width: 100%;
    height: 5vh;
    margin-left:7%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.2vw;
    color: white;
    margin-top: 2vh;
    align-items: center;
    background-color: #f6eeee;
    /* border: 1px solid red; */
  }
  
  table{
    width:97%;
    height:auto;
      margin: auto;
      margin-top: 7vh;
      // border: .1vw solid red;
  }

  th, td{ 
    padding: .8vh;
    border-bottom: .1vw solid grey;
}
th{
    font-weight: bold;
    font-size: 1.4vw;
  
}
td{
  font-size: 1.2vw;
  text-align:center;
}
tr:hover{
  background-color: teal;
  /* font-weight: bold; */
  color: white;
}

  a{
    text-decoration: none;
    color:white;
  }
  a:hover{
    color: red;
  }
  
h4:hover{
  color:red;
}
h1{
  font-size:1.6vw;
}
.rt{
  margin-left: 100px;
}
.btndiv{
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:auto ;
 
}

#btn1{
    color:white;
    font-size:1.2vw;
    border-radius: .3vw;
    background-color: blue;
    border:.2vw solid blue;
    cursor:pointer;
  }
  #btn1:hover{
    background-color: white;
  color: red;
  }
  #btn2{
    color:white;
    font-size:1.2vw;
    cursor:pointer;
    border-radius: .3vw;
    background-color: blue;
    border:.2vw solid blue;
   
  }
  #btn2:hover{
    background-color: white;
  color: red;
  }
#btn3{
    color:white;
    cursor:pointer;
    font-size:1.2vw;
    border-radius: .3vw;
    background-color: red;
    border:.2vw solid red;
   
  }
  #btn3:hover{
    background-color: #310202;
  }
  .sbox{
    display: flex;
    flex-direction: row;
 width: 85%;
    height: 4.3vh; 
  
}
.in{
  width:93%;
    height:4.5vh;
    // padding-left: 1%;
    outline: none;
    font-size: 1.2vw;
    border: .1vw solid grey;
    background-color: rgba(249, 249, 249, 255);
    @media (max-width:415px){
        width:57%;
        height:2.5vh;
        font-size: 2.2vw;
        top: -10.8vh;
    }
    position: relative;
    top: -8.7vh;

    right: -5.5%;
    // border: 2px solid black;
  }
#btn{
  width:8%;
  height:5vh;
  cursor: pointer;
  @media (max-width:415px){
      width:11.9%;
      height:3.1vh;
      right: -42%;
      top: -14vh;
      font-size: 2.5vw;
      border: .1vw solid black;
  }
  font-size: .8vw;
  position: relative;
  top: -8.7vh;
  right: 2.4%;
  color: white;
  background-color: black;
}


#btn:hover{
color: red;
}
.noMatch_main{
  width:70%;
  height: 50vh;
  margin:auto;
}
.noMatch{
  width:80%;
  height: 80%;
  font-size:1.6vw;
  color:white;
  margin-top:12%;
  padding:3%;
  background-color: teal;
}
.btndiv{
  width: 30%;
  height: 7.5vh;
  display: flex;
  flex-direction: row;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  // border: 2px solid red; 
}
.pagebtn{
  width: 27%;
  height: 4vh;
  cursor:pointer;
  color: white;
  font-size: 1vw;
  font-weight: bold;
  border-radius: 2vw;
  background-color: blue;
  border: 2px solid blue;
}

.pagebtn:hover{
  background-color: white;
  color: red;
}

`;

  export const Allmovie = () => {
    const [sdata, setSd]= useState("");
    const [page, setPage] =useState(1);
    const [ movieD, setMovieD ] = useState([]); 
var c=1;

    useEffect(() => {
      getDatas();
    }, [page]);

    const getDatas = () => {
      
        axios.get(`https://movieserver-ehfq.onrender.com/movies?page=${page}&size=10`).then(({ data }) => {
            // console.log(data.movies)
          setMovieD(data.movies)

        });
      };

      let handleRemove = (e) => {
        axios.delete(`https://movieserver-ehfq.onrender.com/movies/${e._id}`)
            .then((res) => {
              alert("Deleted successfully");
              getDatas()
            
            })
            .catch((err) => {
               console.log(err);
            })
    }
  

    function result1(e){
     
      if(e.target.value==="bollywood"){
        var arr3=movieD.filter(e=>e.category==="Bollywood");
      setMovieD(arr3);
        //  console.log(arr3)
      }
      else if(e.target.value==="hollywood"){
        var arr4=movieD.filter(e=>e.category==="Hollywood");
        setMovieD(arr4);
         //  console.log(arr4)
       }
    }
    const handleSearch=()=>{
      var arr=movieD.filter((value)=>{
        if(sdata===""){
          // console.log(value)
           return value;
        }
        else if(value.movie_name.toLowerCase().includes(sdata.toLowerCase())){
        
           return value;
        }
      })
     setMovieD(arr);
      // console.log(arr)
    }
     
      return (
        <div>
         <ResultDiv>
         
         
          <div id="searchbar">
          <div className="sbox">
                    <input className="in" type="text" onChange={(e)=>setSd(e.target.value)} placeholder="Search by movie name" />
                <button id="btn" onClick={()=>{
                  handleSearch();
                }}>Search</button>
                </div>


            <select onChange={result1} name="" className="filter">
              <option value="">Filter by category</option>
              <option value="bollywood">Bollywood</option>
              <option value="hollywood">Hollywood</option>
            </select>
          </div> 
         {(movieD.length===0)? (
           <div className="noMatch_main">
             <h1>Loading...</h1>
             <div className="noMatch">
              <h4>Or search data did not match, please refresh it and search again</h4>
           </div>
           </div>
          
         ) : (
          <div className="box1">
            
          <table>
            <thead>
                <th>S.no</th>
                <th>movie name</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Delete</th>
                <th>Edit</th>
            </thead>
            <tbody>
                {movieD.map((item)=>{
                    return (
                      
                        <tr key={item._id}>
                         
                         <td>{c++}</td>
                         <td>{item.movie_name}</td>
                         <td>{item.movie_title}</td>
                         <td>{item.category}</td>
                         <td>{item.price}</td>
                         <td>{item.movie_rating}</td>
                         <td>
                               <button id="btn3" onClick={()=>{
                                let confirm=window.confirm("Are you sure you want to delete it?");
                                if(confirm){
                                 handleRemove(item)
                                }
                               }}>
                                 Delete
                               </button>
                             </td>
                             <td>
                            <Link to={`${item._id}/edit`}>
                              <button id="btn2">Edit</button>
                             </Link>
                             </td>
                        </tr>
                       
                    )
                })}
              
            </tbody>
         </table> 
         <div className="btndiv">
         <button className="pagebtn" onClick={()=>{setPage(page-1)}}>Previous</button> 
         <button className="pagebtn" onClick={()=>{setPage(page+1)}}>Next</button>
         </div>
          </div>
         )}
          </ResultDiv>
        </div>
      );
    };
