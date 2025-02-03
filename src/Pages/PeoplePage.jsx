import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// ATTENTION AUX IMPORTS !!!!!!

const PeoplePage = () => {
    const { id } = useParams();
    const [people, setPeople] = useState({});


    // Créé une fonction fetchPeopleByID qui va chercher les informations 
    // d'une personne en fonction de son ID
    //  https://api.themoviedb.org/3/person/ + id
    const fetchPeopleByID = () => {
        fetch("https://api.themoviedb.org/3/person/"+id+"?language=fr", {
            method: "GET",
            headers: {
                Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
            }
        })
        .then(response => response.json())
        .then(data => {
            setPeople(data);
        }).catch(error => {
            console.error(error);
        });
    }

    // Utilise un useEffect pour appeler fetchPeopleByID au chargement de la page
    useEffect(()=>{
        fetchPeopleByID();
    }, [])

    return <>
        <h2 style={{textAlign: "center", fontSize: "4rem", color: "white"}}>{people.name}</h2>
        {/* Afficher les information récuperer de l'API exemple biography,birthday,
        deathday,gender, profile_path, place_of_birth, name, also_known_as */}
        <div className="d-flex justify-content-between mt-5 align-items-center">
            <img src={"https://image.tmdb.org/t/p/original"+people.profile_path} alt={people.name} style={{width : "40%"}} />
            <div className="d-flex flex-column gap-3" style={{width: "50%"}}>
                <div style={{color: "white", textAlign: "justify" , maxHeight: "300px", overflow: "auto"}}>
                    {people.biography}
                </div>
                <div className="d-flex gap-3 justify-content-between align-items-center" 
                    style={{width: "100%", border : "1px solid white", padding: "10px", borderRadius: "20px"}}>
                    <div style={{color: "white"}}>Date de naissance</div>
                    <div style={{color: "white"}}>{new Date(people.birthday).toLocaleDateString("fr")}</div>
                </div>
            </div>
        </div>
    </>;
}
 
export default PeoplePage;