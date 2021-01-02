import React,{useEffect,useState} from "react";
import Recipe from './recipe';
import {Recepied} from './data'
import './App.css';
const App = ()=>{

const [searchTerm,setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]);
const results = Recepied.filter(receipe =>
  receipe.recipeName.toLowerCase().includes(searchTerm));

useEffect(() => {
  
  setSearchResults(results);
}, [searchTerm]);

const handleChange = e =>{
  setSearchTerm(e.target.value);
}
const getSearch = e=>{
  e.preventDefault();
  setSearchResults(results);
}
const RecipeOfDay = () =>{
const getDay = '';
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = now - start;
const oneDay = 1000 * 60 * 60 * 24;
const day = Math.floor(diff / oneDay);
const today =document.getElementById(day);
today.classList.toggle('visible')
console.log(today)
}
  return(
    <div className="app">
         <h1> 
           هناكل اي النهاردة
           <i class="fab fa-envira"></i>
           </h1>

         <form className="search-form" onSubmit={getSearch}>
           <input
            type="text" 
            className="search-bar"
            placeholder="اكتب شيئا للبحث عنــــه"
            value={searchTerm}
            onChange={handleChange}
            />


         </form>

         <div class="recipe-days">
         
         <img src="../assets/imgs/spiral5.png" className="recipe-days-note" alt="recipe-bg"/>  
         <div className="recipe-of-the-day">
         <h2 className="year-title">2021</h2>
           <button className="recipe-of-the-day-btn" onClick={RecipeOfDay} >
             <img src="../assets/imgs/breakfast.png"/>
             <span>
             طبق اليوم
             </span>
            </button>
         </div> 
         {searchResults.map(recipe =>(
          <Recipe id={recipe.id} recName={recipe.recipeName}/>

        ))

        }
         </div>
        
    </div>
  )
}

export default App;
