import { computeHeadingLevel } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'





const Home = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3002/users").then((res)=> setUsers(res.data))
  },[])

  const  deleteUser= async (id)=>{
    const confirm = window.confirm(`do you want to delete this id ? ${id}`)
    if(confirm){
      await axios.delete(`http://localhost:3002/users/${id}`).then((res)=> alert("successfuly")).catch((error)=>console.log(error))
    }
  }

  return (
    <div className="flex flex-col max-w-3xl mx-auto py-8">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-2 items-center overflow-hidden">
         <Link to="/create" className='bg-green-600 text-white px-4 py-2 rounded-md w-fit '>Add +</Link>

          <table className="min-w-full text-left text-sm font-light">
            <thead
              className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
              <tr>
                <th scope="col" className="px-6 py-4">#id</th>
                <th scope="col" className="px-6 py-4">Name</th>
                <th scope="col" className="px-6 py-4">email</th>
                <th scope="col" className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user,i)=>(
                  <tr key={i}
                  className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{user.id}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex space-x-3 items-center">
                      <Link to={`update/${user.id}`} className='bg-green-600 text-white px-4 py-2 rounded-md'>Edit</Link>
                      <button className='bg-red-600 text-white px-4 py-2 rounded-md' onClick={()=>deleteUser(user.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
                ))}
             
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home