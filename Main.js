import React, {useState} from 'react';


function Main() {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [error,setError]=useState(false)
    const[submitted,setSubmitted]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName.length==0||lastName.length==0){
            setError(true)
        }
        else{
            setSubmitted(true)
        }
    }
    const sucess= () =>{
        if(submitted)
        return(
            <div>
                <h1>Sucessfully Registered {firstName} </h1>
            </div>
        );
    }
    return (
        <div>
        <>
           <form onSubmit={handleSubmit} action="valid.html" method='post'>
               <div>
                <h1>Registraton</h1>
                   <input placeholder="First Name" onChange={e=>setFirstName(e.target.value)} />
               </div>
               {error&&firstName.length<=0?
               <label>First Name can't be Empty</label>:""}
               <div>
                   <input placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />
               </div>
               {error&&lastName.length<=0?
               <label>Last Name can't be Empty</label>:""}
               <div>
                   <button>
                       Submit
                   </button>
               </div>
               <div>
            {sucess()}
        </div>
           </form>
        </>
 </div>
 )
}                  
export default Main;