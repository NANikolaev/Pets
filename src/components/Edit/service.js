

export default function edit(e,id,token){
     e.preventDefault()
     let data=new FormData(e.currentTarget)
     let pet={...Object.fromEntries(data)}

   return  fetch(`http://localhost:3030/data/pets/${id}`,{
         method:'PUT',
         headers:{
             'Content-type':"application/json",
             'X-authorization':token
         },
         body:JSON.stringify(pet)

     })
     
}