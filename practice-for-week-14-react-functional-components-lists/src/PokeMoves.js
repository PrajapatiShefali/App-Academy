import PokeMoveCard from './PokeMoveCard.js';
import {moves} from './data.js'
function PokeMoves(){
  return (
    <>
    <h1>Poke Moves</h1>

    <div>
        <ul>
            {moves.map(ele=>{
                // return <li key={ele.id}>{ele.id} {ele.move}</li>
              return <PokeMoveCard key={ele.id} {...ele}/>
})}
        </ul>
    </div>
    </>
  )  
}
export default PokeMoves;