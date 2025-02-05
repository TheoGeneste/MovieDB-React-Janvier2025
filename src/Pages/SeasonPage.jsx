import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SeasonPage = () => {
    const {id, seasonId} = useParams();
    const [season, setSeason] = useState({});
    const navigate = useNavigate();

    const fetchSeason = () => {
        fetch("https://api.themoviedb.org/3/tv/" + id + "/season/" + seasonId + "?language=fr", {
            method: "GET",
            headers: {
                Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setSeason(data);
        }).catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        fetchSeason();
    }, []);

    return <>
        <h2 className="text-center" style={{fontSize : "4rem", color: "white"}}>{season.name}</h2>
        <div className="d-flex justify-content-between mt-5 align-items-center">
            <img src={"https://image.tmdb.org/t/p/original"+season.poster_path} alt={season.name} style={{width: "40%"}}/>
            <div className="d-flex flex-column align-items-end gap-3" style={{width: "45%"}}>
                <p style={{color: "white", textAlign: "justify"}}>{season.overview}</p>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Note</div>
                    <div style={{color: "white"}}>{season.vote_average}/10</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Saison</div>
                    <div style={{color: "white"}}>{season.season_number}</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Saison</div>
                    <div style={{color: "white"}}>{season.air_date ? 
                    new Date(season.air_date).toLocaleDateString("fr") : "Pas de date"}</div>
                </div>
            </div>
        </div>
        <h2 className="text-center mt-5 " style={{fontSize : "4rem", color: "white"}}>Episodes</h2>
        <div className="d-flex gap-5 flex-wrap justify-content-center mt-5">
            {season.episodes != undefined && season.episodes.map((episode, index) => {
                return <div key={index} className="d-flex flex-column justify-content-between align-items-center w-25 episode" 
                style={{border: "1px solid white", padding: "10px", borderRadius: "20px"}} 
                onClick={() => {navigate("/serie/"+id+"/season/"+seasonId+"/episode/"+episode.episode_number)}} >
                    <img src={"https://image.tmdb.org/t/p/original"+episode.still_path} alt={episode.name} width={"100%"}/>
                    <h3 style={{color: "white"}} className="text-center">{episode.name}</h3>
                    <p style={{color: "white"}}>{episode.vote_average}/10</p>
                </div>
            })}
        </div>
    </>;
}
 
export default SeasonPage;