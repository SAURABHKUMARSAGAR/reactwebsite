import React, { useState } from "react";


const Contacts =()=>{
    const [data,setData] =useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });
    const Inputevent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    }
    const FormSubmit=(e)=>{
          e.preventDefault();
          alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. My email is ${data.email}.My message is ${data.msg}`);
    }
    return(
        <>
           <div className="my-5 text-center">
            <h1 className="text-center">Contact</h1>
            </div>
            <div className="container contact_div">
               <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={FormSubmit}>
                
                <div class="mb-3">
                   <label 
                   for="exampleFormControlInput1" 
                   class="form-label">
                   FullName</label>
                   <input 
                   type="text" 
                   class="form-control" 
                   id="exampleFormControlInput1" 
                    name="fullname"
                    value={data.fullname}
                    onChange={Inputevent}
                   placeholder="Enter your name"/>
                </div>

                <div class="mb-3">
                   <label 
                   for="exampleFormControlInput1" 
                   class="form-label">
                   Phone</label>
                   <input 
                   type="number" 
                   class="form-control" 
                   id="exampleFormControlInput1" 
                    name="phone"
                    value={data.phone}
                    onChange={Inputevent}
                   placeholder="Mobile number"/>
                </div>

                <div class="mb-3">
                   <label 
                   for="exampleFormControlInput1" 
                   class="form-label">
                   Email address</label>
                   <input 
                    type="email"
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    name="email"
                    value={data.email}
                    onChange={Inputevent}
                    placeholder="name@example.com"/>
                </div>
                
                <div class="mb-3">
                   <label 
                   for="exampleFormControlTextarea1" 
                   class="form-label">
                   Message</label>
                   <textarea 
                   class="form-control" 
                   id="exampleFormControlTextarea1" 
                    name="msg"
                    value={data.msg}
                    onChange={Inputevent}
                   rows="3"></textarea>
                </div>
                </form>
             </div>
             </div>
           </div>
           <div className="col-12 text-center">
           <button onClick={FormSubmit} className="btn btn-outline-primary" type="Submit form">Submit form</button>
           </div>
        </>
    )
}

export default Contacts;