import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'


const apiKey = "db8f89923d296bb2dbad0fdd6498b9b4";
const url = "https://api.themoviedb.org/3/movie/"

const imgurl = "https://image.tmdb.org/t/p/original/"

const Card = ({img}) =>{
    return (
     <img className='card' src={img} alt="cover" />
    )
}



const Row = ({title,arr=[]}) =>
 {
    return (
   <div className='row'>

     <h2>{title}</h2>

     <div>
     {
      arr.map((item,index) => {
        return <Card key = {index} img = {`${imgurl}/${item?.poster_path}`}/>
      })
    }
     </div>
     
   </div>
    )
}


const Home = () => {

   const[upcomingMovies,setUpcomingMovies] = useState([]);
   const[nowplayingMovies,setNowplayingMovies] = useState([]);
   const[topratedMovies,setTopratedMovies] = useState([]);
   const[popularMovies,setPopularMovies] = useState([]);


    useEffect(()=>{
       
        const fetchUpcoming = async() =>{
           
           const {data:{results}} = await axios.get(`${url}/upcoming?api_key=${apiKey}`);
           setUpcomingMovies(results);

        }

        const fetchNowplaying = async() =>{
           
            const {data:{results}} = await axios.get(`${url}/now_playing?api_key=${apiKey}`);
            setNowplayingMovies(results);
 
         }

         const fetchtopRated = async() =>{
           
            const {data:{results}} = await axios.get(`${url}/top_rated?api_key=${apiKey}`);
            setTopratedMovies(results);
 
         }

         const popular = async() =>{
           
            const {data:{results}} = await axios.get(`${url}/popular?api_key=${apiKey}`);
            setPopularMovies(results);
 
         }
    
        fetchUpcoming();
        fetchNowplaying();
        fetchtopRated();
        popular();
    },[]);


    
    const Banner = () =>{
      console.log(popularMovies);
      if(popularMovies?.length>0)
      return <div className="banner" style = {{ backgroundImage: `url(${`${imgurl}/${popularMovies[4]?.poster_path}`})`}}></div>
      
     }

  return (
    <section className="home">
        
        <Banner/>
         
        <Row title = {"Upcoming Movies"} arr = {upcomingMovies}/>

        <Row title = {"Now Playing Movies"} arr = {nowplayingMovies}/>
  
        <Row title = {"Top Rated Movies"} arr = {topratedMovies}/>
  
        <Row title = {"Popular Movies"} arr = {popularMovies}/>

       
 

    </section>
  )
}

export default Home