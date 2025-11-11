import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateRole = () => {

    const baseUrl=import.meta.env.VITE_BASE_URL;

    const [role, setRole] = useState({
        name: '',
        
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        setRole((prv)=>({
            ...prv,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(role);
    
    axios({
        url:`${baseUrl}/role/save`,
        method:"POST",
        data:{role}
    })

    .then(res=> {
        console.log(res)
        if(res){
            navigate('/role');
        }
    })
    .catch(err=>console.log(err));
    }

  return (
    <>

        <h3>Create Role</h3>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange}/>
            </div>

            <div>
                <input type="submit" name="" id="" value={"submit"} />
            </div>
        </form>
      
    </>
  )
}

export default CreateRole
