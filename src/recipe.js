import React from "react";



const Recipe = ({id,recName,results}) =>{

   const HandleReceipe = (e)=>{
       e.preventDefault();
       const mybtn = e.target.getAttribute('data-modal');
       const mymodal = document.getElementById(mybtn);
       mymodal.classList.toggle('visible');
    
   }

   const HandleClose = () =>{
       const modalNum = document.getElementsByClassName("recipe-detail");
       const btnNum = modalNum[id - 1].getAttribute("id");
       const clsModl = document.getElementById(btnNum);
       clsModl.classList.remove("visible")
   }
  
    return(
        <div>
            {
                (results.length > 0 && document.getElementById("search-bar").value)?
                    <button className="recipe-button-title" data-modal={id} onClick={HandleReceipe} >
                       <img src="../assets/imgs/1.jpg" className="recipe-img-title" alt="food img" data-modal={id}/>
                        {recName}
                    </button>  
                : <button className="recipe-button" data-modal={id} onClick={HandleReceipe} >
                      {id}
                  </button>  
            }
            {/* <button className="recipe-button" data-modal={id} onClick={HandleReceipe} >
                {results.length > 0 && document.getElementById("search-bar").value?recName:id}
            </button> */}
            <div className="recipe-detail " id={id}>
                <div className="recipe-container">
                <img src="../assets/imgs/spiral5.png" className="recipe-note" alt="recipe-bg"/>   
                <button className="recipe-close-btn" onClick={HandleClose}><i class="far fa-times-circle"></i></button>
                <div className="recipe-cover">
                <h2 className="recipe-name" >{recName}</h2>
                <img src="../assets/imgs/1.jpg" className="recipe-img" alt={recName}/>
                </div>
                
                <div className="recipe-info">
                    <ul className=""> 
                    <li>
                        <h5>
                        <img src="../assets/imgs/calories-calculator.png" alt="people"/>
                        السعرات الحرارية
                        </h5>
                        <h5>
                           255
                        </h5>
                    </li>
                    <li>
                        <h5>
                        <img src="../assets/imgs/family-group-of-three.png" alt="people"/>
                        عدد الاشخاص
                        </h5>
                        <h5>
                            5
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <img src="../assets/imgs/stopwatch.png" alt="people"/>
                        مدة الطهي
                        </h5>
                        <h5>
                            30 دقيقة
                        </h5>
                    </li>
                    </ul>

                </div>
                <div className="recipe-gradince ">
                    <h4>المكونات</h4>
                    <ol>
                    <li>ricrjjjj </li>
                    <li>ricrjnkj;koihuu;'' </li>
                    <li>ricr frfty uuoooo ppoiu cgtdr yty</li>
                    <li>ricr poiop</li>
                    <li>ricr oiouuu</li>
                    </ol>
                </div>
                <div className="recipe-steps ">
                    <h4>الخطوات</h4>
                    <ol>
                    <li>ricrjjjj </li>
                    <li>ricrjnkj;koihuu;'' </li>
                    <li>ricr frfty uuoooo ppoiu cgtdr yty</li>
                    <li>ricr poiop</li>
                    <li>ricr oiouuu</li>
                    </ol>
                </div>
                </div>
                   
            </div>
        </div>
        
    )
}

export default Recipe ;
