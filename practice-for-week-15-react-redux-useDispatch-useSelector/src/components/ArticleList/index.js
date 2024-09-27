import { Route, Switch } from 'react-router-dom';
import SingleArticle from '../SingleArticle';
import { useDispatch ,useSelector} from 'react-redux';
import {loadArticles} from '../../store/articleReducer'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const ArticleList = () => {
  const articles=useSelector((state)=>state.articleState.entries)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loadArticles())
  },[dispatch])
  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {
          articles && articles.map((element)=>{
            return <li key={element.id}><NavLink to={"/article/"+element.id}>{element.title}</NavLink></li>
          })
        }
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;