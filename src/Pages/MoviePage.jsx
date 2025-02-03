import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MoviePage = () => {
    const { name } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovieById = () => { 
        fetch("https://api.themoviedb.org/3/movie/"+name+"?language=fr", {
            method: "GET",
            headers: {
                Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setMovie(data);
        }).catch(error => {
            console.error(error);
        });
    }


    useEffect(() => {
        fetchMovieById();
    }, []);


    return <>
        <h2 className="text-center" style={{fontSize : "4rem", color: "white"}}>{movie.title}</h2>
        <div className="d-flex justify-content-between mt-5 align-items-center">
            <p style={{color: "white", width: "40%", textAlign: "justify"}}>{movie.overview}</p>
            <img src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path} alt={movie.title} style={{width: "50%"}}/>
        </div>
        <div className="d-flex justify-content-between mt-5">
            <div className={"d-flex flex-column align-items-center gap-3"} style={{width: "50%"}}>
                <h3 className="text-center" style={{color : "white"}}>Genres</h3>
                <div className="d-flex gap-3 flex-wrap justify-content-center" style={{width: "100%"}}>
                    {movie.genres != undefined && movie.genres.map((genre, index) => {
                        return <Button key={index} variant="primary" style={{width: "30%"}}>{genre.name}</Button>
                    })}
                </div>
            </div>
            <div className={"d-flex flex-column align-items-center gap-3"} style={{width: "40%"}}>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Note</div>
                    <div style={{color: "white"}}>{movie.vote_average}/10</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Date de sortie</div>
                    <div style={{color: "white"}}>{new Date(movie.release_date).toLocaleDateString("fr")}</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Budget</div>
                    <div style={{color: "white"}}>{movie.budget}$</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Revenue</div>
                    <div style={{color: "white"}}>{movie.revenue}$</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Film +18</div>
                    <div style={{color: "white"}}>{movie.adult == true ? "Oui" : "Non"}</div>
                </div>
            </div>
        </div>
    </>;
}
 
export default MoviePage;   