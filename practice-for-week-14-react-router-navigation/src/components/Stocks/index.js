import {Redirect,useParams,useHistory } from 'react-router-dom'

function Stocks() {
    const params=useParams();
    const history=useHistory();
    const handleClick= () => {
      window.alert('Sending info to the DB!');
      history.push("/")
    };
    const {userStatus}=params;
    console.log(userStatus)
    if (userStatus===false)
      return <Redirect to="/not-logged-in"/>
   return ( 
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>

    </div>)

}

export default Stocks;