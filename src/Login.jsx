import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const notify = () => toast("Wow so easy!");

    const [raqam,setRaqam] = useState("")
    const [parol,setParol] = useState("")
    // console.log(raqam,parol);

    const token = localStorage.getItem('AccesToken')

useEffect(()=>{
  if(token){
    navigate("/home")
  } else{
    navigate("/")
  }
},[])


      const navigate = useNavigate();


    const handleSubmit =((e)=>{
        e.preventDefault();

      
    
fetch('https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify({
        phone_number:raqam,
        password:parol
     
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
     .then((response) => response.json())
     .then((data) => {
        // console.log(data?.data?.tokens?.accessToken?.token);
        if(data?.success ===true){
            toast.success("Muvofaqiyatli yuborildi")
            navigate("/home")

            localStorage.setItem("AccesToken",data?.data?.tokens?.accessToken?.token)
        } else{
            toast.error("Xatolik yuz berdi qaytadan yuboring")
            navigate("/")
        }
  
     })
     .catch((err) => {
        console.log(err.message);
     });
    })



  return (
    <div className='container'>

        <form action="#">
            <input onChange={(e)=>setRaqam(e?.target?.value)} type="text" placeholder='number'/> <br /> <br />
            <input onChange={(e)=>setParol(e?.target?.value)}  type="text"  placeholder='password' required/> <br /> <br />

            <button  type='submit'  onClick={handleSubmit}>LOGIN</button>
            <ToastContainer />  
        
        </form>

    </div>
  )
}

export default Login;