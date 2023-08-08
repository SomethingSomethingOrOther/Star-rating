import './App.css';
import {useState} from "react"

const Star=()=>{
    
   const [stars,setStars]=useState([false,false,false,false,false])

  const borderStar="https://www.svgrepo.com/show/532718/star-sharp.svg"
  const filledStar="https://www.svgrepo.com/show/92788/favourites-filled-star-symbol.svg"

  const handleHoverState=(index)=>{
    const newStars=[...stars]
    for (let i=0;i<=index;i++){
      newStars[i]=true
    }
    setStars(newStars)
  }
  const handleMouseExit=()=>{
      
    setStars(stars.map(()=>false))
  }

  const handleClick=(index)=>{
    const newStars=stars.map((_,i)=> i <= index )
    setStars(newStars)
  }


  return (
    <div>
      {
        stars.map((isFilled,index)=>(
          <img  
            key={index}
            onMouseLeave={handleMouseExit}
            onMouseEnter={()=>handleHoverState(index)}
            onClick={()=>handleClick(index)}
            className="borderStar"
            style={{width:'2rem',heigh:'2rem'}}
            src={isFilled ? filledStar:borderStar}
            alt={isFilled ? "filledStar":"borderStar"}
          />
        ))
      }
      </div>
  )
}


function App() {
  return (
    <div className="App">
      <header>
        <h1>Star rating</h1>
      </header>
      <div>
        <Star />
      </div>
    </div>
  );
}

export default App;
