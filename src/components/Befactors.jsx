import React from 'react'

const Befactors = () => {

    let data = [
        {
          image: '/images/76.png',
          title : "Pauline J. Wright"
        },
        {
            image: '/images/77.png',
            title : "Pauline J. Wright"
          },
          {
            image: '/images/78.png',
            title : "Pauline J. Wright"
          },
          {
            image: '/images/79.png',
            title : "Pauline J. Wright"
          },
          {
            image: '/images/80.png',
            title : "Pauline J. Wright"
          },
          {
            image: '/images/77.png',
            title : "Pauline J. Wright"
          },
          
     ]


  return (

 


    <div className='flex flex-col justify-center items-center '>
         <h1 className='text-4xl font-bold mb-20'>Our Benfactors</h1>

         <div className='flex flex-wrap items-center justify-center'>
            {data.map((x) => {
                return (
                    <div className='mx-20 my-4'>
                     <img src={x.image} alt=''/>
                     <h1 className='my-4'>{x.title}</h1>
                     <p>Volunteer</p>
                 </div>
                )
            })}
 
              
         </div>

    </div>
  )
}

export default Befactors
