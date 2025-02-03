// Attentoin aux IMPORTS !!!!!!

import { useEffect, useState } from "react";
import PeopleCard from "../Components/PeopleCard";

const PeoplesPage = () => {
    const [peoples, setPeoples] = useState([]);

    const fetchPeoples = () => {
        fetch("https://api.themoviedb.org/3/person/popular", {
            method: "GET",
            headers: {
                Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q" 
            }
        })
        .then(response => response.json())
        .then(data => {
            setPeoples(data.results);
        })
        .catch(error => {
            console.error(error);
        });
    }

    useEffect(()=>{
        fetchPeoples();
    }, []);
    

    return <>
        <h2 className="text-center" style={{color : "white", fontSize: "3rem"}}>Peoples</h2>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
            {peoples.map((people, index) => (
                <PeopleCard key={index} name={people.name} profile_path={people.profile_path} id={people.id} />
            ))}
        </div>
    </>;
}
 
export default PeoplesPage;