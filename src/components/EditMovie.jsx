import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

  const ResultDiv = styled.div`
  font-family:   Arial, sans-serif;
  
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
h2{
  margin-left:27%;
  color:red;
}
  `;
export const EditMovie=()=>{
  const [mdata, setMdata] = useState([]);
  const [newData, setNewData] = useState([]);
    let { _id } = useParams();
    useEffect(()=>{
    axios.get(`https://compa-assig.herokuapp.com/movies/${_id}`).then((data)=>{
      // console.log(data.data)
       setMdata(data.data.movies);
    })
    },[])

    function handleChange(e) {
        let key = e.target.name;
        let inputData = {};

          inputData = {
            ...newData,
            [key]:e.target.value,
          };
          inputData = {
            ...newData,
            [key]:e.target.value,
          };
    
        setNewData(inputData);
      }

      function handleSave(e) {
       e.preventDefault();
        axios({
          method: "patch",
          url: `https://compa-assig.herokuapp.com/movies/${_id}`,
          data: {
            _id: mdata._id,
            movie_name: newData.movie_name || mdata.movie_name,
            movie_title: newData.movie_title || mdata.movie_title,
            category: newData.category || mdata.category,
            price: newData.price || mdata.price,
            movie_rating: newData.movie_rating || mdata.movie_rating,
          },
        }).then((res) => {
          // console.log()
          alert("You have edited successfully")
        });
      }
return (
    <div>
      <ResultDiv>
        <h2>Edit movie details</h2>
      <form onSubmit={handleSave}>
      <p>movie name</p>
       <input type="text" name="movie_name" defaultValue={mdata.movie_name} onChange={handleChange} placeholder="movie name" required />
       <p>Title</p>
       <input type="text" name="movie_title" defaultValue={mdata.movie_title} onChange={handleChange} placeholder="Title" required />
        <p>Enter category</p>
       <input type="text" name="category" defaultValue={mdata.category} onChange={handleChange} placeholder="category" required />
       <p>Enter price</p>
       <input type="text" name="price" defaultValue={mdata.price} onChange={handleChange} placeholder="price" required />
       <br />
       <br />
     <span className="select">Select Rating
       <select name="movie_rating" defaultValue={mdata.movie_rating} onChange={handleChange} className="option" required>
           <option value="0">Select</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
       </select></span>
        <br />
        <br />
         <input id="btn" type="submit" value="Save" />
      </form>
      </ResultDiv>
    </div>
  );
};