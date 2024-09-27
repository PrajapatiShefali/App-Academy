import './SingleArticle.css';
import { useParams } from 'react-router-dom';
const SingleArticle = ({articles}) => {
  const {id}=useParams()
  const element=articles.find((item)=>item.id===id)
    
  
  console.log(element)
  return (
    <>
    
      
       <div className='singleArticle'>
       <h1>{element.title}</h1>
       <img
         src={element.imageUrl}
         alt={element.title}
       />
       <p>
         {element.body}
       </p>
     </div>
    
    </>
  );
};

export default SingleArticle;