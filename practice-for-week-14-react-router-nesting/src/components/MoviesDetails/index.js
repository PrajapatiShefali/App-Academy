import {useParams} from 'react-router-dom';
function MovieDetails({movies}) {
  const params=useParams();

  const {movieId}=params;
  let choice=movies.find((item)=> item.id===Number(movieId))
  return (
    <div className='comp purple'>
      <h1>{choice.title}</h1>
      <p>{choice.description}</p>
    </div>
  );
}

export default MovieDetails;