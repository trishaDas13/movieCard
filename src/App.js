import { Film } from './comps/Fillm.js';
import Cardlist from './comps/film.json'

function App() {

  return (
   <div className="filmContainer">

      {
        Cardlist.map((card)=>{
          return <Film
          title = {card.Title}
          year = {card.Year}
          director = {card.Director}
          runtime = {card.Runtime}
          genre = {card.Genre}
          plot = {card.Plot}
          poster = {card.Images[2]}
          key = {card.imdbID}
          />
        })
      }
      
   </div>
  );
}

export default App;
