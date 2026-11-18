import axios from "axios";
const KEY_API= 'b4f4026b3f42f0ab16bfe77c8ed8e925'

export const getPopular=async(page)=>{
    const searchParams=new URLSearchParams({
        api_key:KEY_API,
        page,
    })
const url = `https://api.themoviedb.org/3/movie/popular?${searchParams}`;

 // Отправляем запрос и ожидаем ответ.
const response = await axios.get(url)
  // Возвращаем ответ.
return response
}


 export const byId=async(id)=>{
   const searchParams=new URLSearchParams({
        api_key:KEY_API,
        
 })
 const url = `https://api.themoviedb.org/3/movie/${id}?${searchParams}`;
 const response=await axios.get(url)
 return response
}

export const getCast=async(id)=>{
     const searchParams=new URLSearchParams({
        api_key:KEY_API,   
 }) 
 const url = `https://api.themoviedb.org/3/movie/${id}/credits?${searchParams}`;
 const response=await axios.get(url)
 return response

}

export const getReview=async(id)=>{
   const searchParams=new URLSearchParams({
        api_key:KEY_API,   
 }) 
 const url = `https://api.themoviedb.org/3/movie/${id}/reviews?${searchParams}`; 
  const response=await axios.get(url)
 return response
}


export const getByName= async(name, page)=>{
     const searchParams=new URLSearchParams({
        api_key:KEY_API,  
        language: 'en-US',
        page,
        include_adult: false,
        query: name
 }) 
const url = `https://api.themoviedb.org/3/search/movie?${searchParams}`;
  const response=await axios.get(url)
 return response
}


export const getTrailers=async(id)=>{
     const searchParams=new URLSearchParams({
        api_key:KEY_API,   
 }) 
const url = `https://api.themoviedb.org/3/movie/${id}/videos?${searchParams}`;
  const response=await axios.get(url)
 return response
}
