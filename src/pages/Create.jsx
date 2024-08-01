import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
const   Create = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({ name:"", email:""})

  const addUser = (e)=> {
    e.preventDefault()
    axios.post("http://localhost:3002/users",userInfo).then((res)=>  alert("created")).catch((error)=>console.log(error))
    navigate("/")
  }

  return (
    <div class="w-full max-w-lg flex flex-col mx-auto py-24">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={addUser}>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 "  for="username">
          Name
        </label>
        <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(e)=> setUserInfo({...userInfo ,name:e.target.value})} />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Email
        </label>
        <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="folem@gmail.com" onChange={(e)=> setUserInfo({...userInfo ,email:e.target.value})} />
      </div>
      <div class="flex items-center justify-center">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
          Add
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
  </div>
  )
}

export default Create