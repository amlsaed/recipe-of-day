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

const handleChange = (e)=>{
  

  setSearchTerm(e.target.value);
  (e.target.value)?  document.getElementById("recipe-today").style.display="none":  
  document.getElementById("recipe-today").style.display="flex";
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
            id="search-bar"
            className="search-bar"
            placeholder="اكتب شيئا للبحث عنــــه"
            value={searchTerm}
            onChange={handleChange}
            />


         </form>

         <div class="recipe-days">
         
         <img src="../assets/imgs/spiral5.png" className="recipe-days-note" alt="recipe-bg"/>  
         <div className="recipe-of-the-day" id="recipe-today">
         <h2 className="year-title">2021</h2>
           <button className="recipe-of-the-day-btn" onClick={RecipeOfDay} >
             <img src="../assets/imgs/breakfast.png"/>
             <span>
             طبق اليوم
             </span>
            </button>
         </div> 

         {(results.length > 0)?searchResults.map(recipe =>(
          <Recipe id={results.length > 0 && document.getElementById("search-bar").value?recipe.recipeName:recipe.id} recName={recipe.recipeName} results />
          
        ))
        :
        
          <h2>جرب كلمة تانية </h2>
        
        }
         </div>
        
    </div>
  )
}

export default App;
