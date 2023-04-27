import React, { useEffect,useState} from 'react';

function Example(){
  var[myName,setMyName]=useState("Robin");
  console.log(myName);

 


function change(){
// setMyName("Robin Cyril");
let val = myName;
if(val !='Robin'){
  setMyName('Robin')
}
else{
  setMyName('Robin Cyril');
}
}


  const[count, setCount]=useState(0);


return(
    <>
    <h1>{myName}</h1>
    <h1>you clicked {count} times!</h1>
<button className='btn-bg-primary' onClick={change}>Click me</button>
<button className='btn-bg-danger' onClick= {()=> setCount(count + 1)}>Counter</button>
</>
)};

export default Example;