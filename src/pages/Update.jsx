import React ,{useState,useEffect} from 'react'
import axios from "axios"
import {useParams,useNavigate} from "react-router-dom"
const Update = () => {
  const navigate = useNavigate()
  const {id}=useParams()
  const [userData , setUserData]= useState({ id:"",name:"", email:""})
  
  const getUser = async(id)=>{
    try{
      const x = await axios.get(`http://localhost:3002/users/${id}`)
      setUserData(x.data)
    }catch(e){
        console.log(e)
    }
  }

  useEffect( ()=>{
    getUser(id)
  },[id])

  const updateUser = async (e)=>{
    e.preventDefault()
    try{
      await axios.put(`http://localhost:3002/users/${id}`,userData).then((res)=> navigate("/"))
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div class="w-full max-w-lg flex flex-col mx-auto py-24">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={updateUser} >
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 "  for="id">
          ID
        </label>
        <input disabled  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="id" type="text" value={userData.id} />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 "  for="username">
          Name
        </label>
        <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"  value={userData.name}  onChange={(e)=> setUserData({...userData ,name:e.target.value})} 
        
         />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Email
        </label>
        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="folem@gmail.com"  value={userData.email}
        onChange={(e)=> setUserData({...userData ,email:e.target.value})} 
        
        />
      </div>
      <div class="flex items-center justify-center">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
          update
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
  </div>
  )
}

export default Update