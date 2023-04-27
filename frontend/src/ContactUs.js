import { useState, useEffect } from "react";


const ContactUs=()=>{
const [userData, setUserData]=useState({name:'', email:'', mob:'',message:''});
const userContact= async ()=>{
    try{
        const res= await fetch('/getdata',{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },

        });
        const data = await res.json();
        console.log(data);
        setUserData({...userData,name:data.name, email:data.email, mob:data.mob});
        if(!res.status==200)
        {
            const error= new Error(res.error);
            throw error;
        } 
        
    }
    catch(error)
        {
            console.log(error);
        }
}
useEffect(()=>{
    userContact();
},[]);


const handleInputs = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }



  const contactForm = async (e) => {
    e.preventDefault();
    const { name, mob, email, message} = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include", // This here
      body: JSON.stringify(
        { name, mob, email, message })
    });

    const data = await res.json();
    if (!data) {
      window.alert("message not sent");
      console.log("invalid register");
    }
    else {
      window.alert("message sent");
      console.log("valid register");
      setUserData({...userData, message:""});
    }
  }



    return(
        <>
        <div className="container">
           <div className="row py-4">
           <div className="col-lg-6">
            
                        

<div className="container">
    <h2><input type="text" className="form-control" placeholder="Name" value={userData.name} onChange={handleInputs} autoComplete='off' name="name" />
</h2>
  <br/>


  <table className="table table-dark">
    <tbody>
        <tr>
            <td>email</td>
            <td>number</td>
            
        </tr>

        <tr>
            <td>
        <input type="text" className="form-control" placeholder="Email" value={userData.email} onChange={handleInputs} autoComplete='off' name="email" />
</td>
<td>
        <input type="text" className="form-control" placeholder="Mob" value={userData.mob} onChange={handleInputs} autoComplete='off' name="mob" />

                    </td>
        </tr><tr>   
        <td>message</td>

       <input type="text" className="form-control" placeholder="Name" value={userData.message} onChange={handleInputs} autoComplete='off' name="message" />

        </tr>
        <button type="submit" onClick={contactForm} className="btn btn-primary">Submit</button>

    </tbody>
  </table>
  </div>
                     </div>
           </div>
        </div>
        </>
    )
}

export default ContactUs;