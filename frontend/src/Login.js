import React,{ useState} from 'react';
import{ useNavigate} from 'react-router-dom';

function Login()
{
  // const {state,dispatch}=useContext(UserContext);
  const navigate = useNavigate();
    const [user,setUser]=useState({
         email:'', pass: ''
    });
    let name,value;
    const handleInputs=(e)=>{
    console.log(e);
    name= e.target.name;
    value= e.target.value;
    setUser({...user,[name]:value});
    }
    const postData=async(e) =>{
      e.preventDefault();
      const { email,pass }=user;

      const res=await  fetch("/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
           email,  pass
        })



      });
      const data=await res.json();

      if(data.status === 400 || !data ){
        window.alert("invalid login");
        console.log("invalid login");
      }
      
      else{
      window.alert("valid login");
      

      //  dispatch({ type: "USER", payload:true });

      
        // console.log("valid login");
        //https://v5.reactrouter.com/web/api/Hooks
        navigate("/Profile");
      }
    }
return(
<>
<div className="container bg-dark mt-5 w-50">
<form  className ="p-5" method="post">
<div class="d-grid">
  <button type="button" class="btn btn-danger btn-block">Registration form</button>
</div>
    

    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Your Email" name="email" value={user.email} onChange={handleInputs} autoComplete="off"/>
      <span className="input-group-text">@ your Email</span>
    </div>
   
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Your Password" name="pass" value={user.pass} onChange={handleInputs} autoComplete="off"/>
      <span className="input-group-text">@your password</span>
    </div>
    
    
    <input type="submit"  className="form-submit" onClick={postData} name='submit'
      value='submit'/>
  
  </form>
</div>


 </>   
);

}
export default Login