import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { useNavigate, useParams } from "react-router-dom";
import SerieCard from "../Components/SerieCard";

const SeriePage = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [serie, setSerie] = useState({});
    const [similarSeries, setSimilarSeries] = useState([]);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    // Crée une fonction fetchSerie qui fait une requete sur l'API pour récupérer les informations de la serie
    // https://api.themoviedb.org/3/tv/ + id
    // UseEffect qui appelle fetchSerie
    const fetchSerie = () => {
        fetch("https://api.themoviedb.org/3/tv/" + id + "?language=fr", {
            method: "GET",
            headers: {
                Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setSerie(data);
        }).catch(error => {
            console.error(error);
        });
    }

    const fetchSimilarSeries = () => {
        fetch("https://api.themoviedb.org/3/tv/"+id+"/similar?language=fr", {
            method: "GET",
            headers: {
                Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setSimilarSeries(data.results);
        }).catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        fetchSerie();
        fetchSimilarSeries();
    }, []);

    return <>
        <h2 className="text-center" style={{fontSize : "4rem", color: "white"}}>{serie.name}</h2>
        <div className="d-flex justify-content-between mt-5 align-items-center">
            <p style={{color: "white", width: "40%", textAlign: "justify"}}>{serie.overview}</p>
            <img src={"https://image.tmdb.org/t/p/original"+serie.backdrop_path} alt={serie.name} style={{width: "50%"}}/>
        </div>
        <div className="d-flex justify-content-between mt-5">
            <div className={"d-flex flex-column align-items-center gap-3"} style={{width: "50%"}}>
                <h3 className="text-center" style={{color : "white"}}>Genres</h3>
                <div className="d-flex gap-3 flex-wrap justify-content-center" style={{width: "100%"}}>
                    {serie.genres != undefined && serie.genres.map((genre, index) => {
                        return <Button key={index} variant="primary" style={{width: "30%"}}>{genre.name}</Button>
                    })}
                </div>
            </div>
            <div className={"d-flex flex-column align-items-center gap-3"} style={{width: "40%"}}>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Note</div>
                    <div style={{color: "white"}}>{serie.vote_average}/10</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Première Diffusion</div>
                    <div style={{color: "white"}}>{new Date(serie.first_air_date).toLocaleDateString("fr")}</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Nombre épisode </div>
                    <div style={{color: "white"}}>{serie.number_of_episodes}</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Npmbre saisons</div>
                    <div style={{color: "white"}}>{serie.number_of_seasons}</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Film +18</div>
                    <div style={{color: "white"}}>{serie.adult == true ? "Oui" : "Non"}</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Ou regarder</div>
                    <div style={{color: "white"}}>{serie.networks ? serie.networks.map((net, index) => {
                        return " " + net.name
                    }) : "Non renseigné"}</div>
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    {/* <div style={{color: "white"}}>Ou regarder</div> */}
                    <div style={{color: "white"}}>{serie.production_companies ? serie.production_companies.map((net, index) => {
                        return <img src={"https://image.tmdb.org/t/p/original"+net.logo_path} alt={net.name} style={{width: "35px"}} />
                    }) : "Non renseigné"}</div>
                </div>
            </div>
        </div>
        <h2 style={{textAlign: "center", fontSize :"3rem", color: "white"}} className="mt-5">Saisons</h2>
        <div className="d-flex justify-content-center mt-5 align-items-center gap-3 flex-wrap">
            {serie.seasons != undefined && serie.seasons.map((season, index) => {
                return <div key={index} className="d-flex flex-column align-items-center gap-3 season" style={{width: "20%"}} 
                        onClick={() => navigate("/season/"+serie.id+"/"+season.season_number)}>
                    <img src={"https://image.tmdb.org/t/p/original"+season.poster_path} alt={season.name} 
                    style={{width: "100%"}}/>
                    <div style={{color: "white"}}>{season.name}</div>
                    <div style={{color: "white"}}>{season.episode_count} épisodes</div>
                </div>
            })}
        </div>
        <h2 style={{ color: "white", fontSize: "3rem" }} className="text-center">Serie similaire</h2>
        <Carousel
            className='mt-auto mb-auto'
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2500}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {similarSeries.map((serie, index) => {
                return <div key={index} className="d-flex flex-column align-items-center gap-3">
                    <SerieCard id={serie.id} description={serie.overview} image={serie.poster_path} title={serie.name} />
                </div>
            })}
        </Carousel>
    </>;
}
 
export default SeriePage;