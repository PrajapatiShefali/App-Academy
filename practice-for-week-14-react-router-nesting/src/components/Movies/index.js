import {Route,Switch,NavLink,useParams} from 'react-router-dom';
import MovieDetails from '../MoviesDetails';

function Movies({movies}) {


  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        <ul>
          {movies.map((item)=>{

            return <li key={item.id}><NavLink exact to={'/movies/'+item.id} >{item.title} </NavLink>
            </li>
          })}
          </ul>
      </nav>
      <Switch>
      <Route path='/movies/:movieId'><MovieDetails  movies={movies}/></Route>
      </Switch>
    </div>
  );
}

export default Movies;