import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

const Onboarding = () => {

    const {user, isLoaded} =useUser();
    const navigate = useNavigate();

    const handleSelectionRole = async(role)=>{
         await user.update({
            unsafeMetadata : {role}
         }).then(()=>{
             navigate(role === "candidate" ? "/joblisting" : "/jobposting")
         }).catch(()=>{
            console.log("error in update a role")
         })
    }

   useEffect(()=>{
        if(user?.unsafeMetadata?.role) {
             navigate(user?.unsafeMetadata?.role === "candidate" ? "/joblisting" : "/jobposting")
        }
   },[user])

   if(!isLoaded) return <BarLoader className='mb-4' width={"100%"} color='#36d7b7'/>


  return (
    <div className='text-center text-5xl font-bold pt-52 text-white'>
        <h2 >Hi , I am ... </h2>
        <div className='py-10'>
           <button  onClick={()=>{handleSelectionRole("candidate")}}
            className="p-14 bg-blue-500 text-black rounded-md mr-4">
            Candidate
          </button>
          <button onClick={()=>{handleSelectionRole("recruiter")}}
            className="p-14 bg-red-500 text-black rounded-md mr-4">
            Recruiter
          </button>
        </div>
    </div>
  )
}

export default Onboarding