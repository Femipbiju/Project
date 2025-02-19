import logo from './logo.svg';
import './App.css';
import { useEffect,useState, } from 'react';

function App() {
  
  
      const[count,setCount]=useState(1);
      const[data,setData]=useState([]);
      const[loading,setLoading]=useState(true);
      useEffect(()=>{
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${count}`)
            .then((res)=>res.json())
            .then((json)=>{
              setLoading(false);
              setData(json);});
        // setTimeout(()=>{
        //   setCount(count+1);    
       
      },[count]);
      // console.log(data,"data===");
      return(
        <>
        {/* {data?.map((product,index)=>(
          <div key={index}>
        <h4 >{product.title}</h4>
        
       <img src={product.image} alt="image" style={{width:"100px"}}/>
        </div>
      ))} */}
       <h1>{count}</h1>
       {loading?(
        <h1>Loading..</h1>
       ):(
        <>
      <h4 >{data.title}</h4>
        
       <img src={data.image} alt="image" style={{width:"100px"}}/>
      
      
      </>)}
      <button onClick={()=>setCount(count+1)}>click</button>
      
      </>
      );
    }
export default App;
