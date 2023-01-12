import React,{useState} from 'react';

function Main(){
    const [Name,setName]=useState('')
    const [Password,setPassword]=useState('')
    const [error,setError]=useState(false)
    const [submitted,setSubmitted]=useState(false)
    const validdata=(e)=>{
        e.preventDefault()
        if(Name.length==0){
            setError(true);
        }
        else if(Password.length<=6){
            setError(true);
        }
        else{
            setSubmitted(true)
        }
    }
    const sucess=()=>{
        if(submitted){
            return(
                <div>
                    <h3>Sucessfull Registered {Name}</h3>
                </div>
            )
        }
    }


    return(
        <>
        <form onSubmit={validdata}>
            <h2>Rigstration</h2>
            <input type="text" placeholder='Name'  onChange={e=>setName(e.target.value)}/>
            <div className='err'>
                {error&&Name.length==0? <label>Enter Youre Name</label>:""}
            </div>
            <input type="password" onChange={e=>setPassword(e.target.value)} />
            <div className='err'>
                {error&&Password.length<=6? <label>Password Must Be greater than 6</label>:""}
            </div>
            <button className='btt'>
                Submit
            </button >
            <button type='reset'>Reset</button>
            <div>
                {sucess()}
            </div>

        </form>
        </>
    )
}
export default Main;
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


// form{
//   text-align: center;
//   position: relative;
//   top: 30vh;
//   border: 2px solid;
//   width: 300px;
//   left: 37vw;
// }
// input{
//   width: 17vw;
//   height: 2.7vh;
// }
// .err{
//   padding: 8px;
// }
// .btt{
//   position: relative;
//   right: 1.2vw;
// }
