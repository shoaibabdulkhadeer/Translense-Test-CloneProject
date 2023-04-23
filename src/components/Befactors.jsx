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

 


    <div className='flex flex-col justify-center items-center p-56'>
         <h1 className='text-4xl font-bold mb-20'>Our Benfactors</h1>

         <div className='flex flex-wrap ml-28'>
            {data.map((x) => {
                return (
                    <div className='mx-7 mb-5'>
                     <img src={x.image} alt=''/>
                     <h1>{x.title}</h1>
                     <p>Volunteer</p>
                 </div>
                )
            })}
 
              
         </div>

    </div>
  )
}

export default Befactors
