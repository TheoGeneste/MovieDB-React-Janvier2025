// Attentoin aux IMPORTS !!!!!!

import { useEffect, useState } from "react";
import PeopleCard from "../Components/PeopleCard";
import { Pagination } from "react-bootstrap";

const PeoplesPage = () => {
    const [peoples, setPeoples] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(500);

    const fetchPeoples = () => {
        // Prendre en compte la page sur laquel on est et la passer en paramètre dans l'url ?page= + page
        fetch("https://api.themoviedb.org/3/person/popular?page="+page, {
            method: "GET",
            headers: {
                Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q" 
            }
        })
        .then(response => response.json())
        .then(data => {
            setPeoples(data.results);
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
        })
        .catch(error => {
            console.error(error);
        });
    }

    // mettre a jour le useEffect pour prendre en compte le changement de la page
    useEffect(()=>{
        fetchPeoples();
    }, [page]);
    

    return <>
        <h2 className="text-center" style={{color : "white", fontSize: "3rem"}}>Peoples</h2>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
            {peoples.map((people, index) => (
                <PeopleCard key={index} name={people.name} profile_path={people.profile_path} id={people.id} />
            ))}
        </div>
        <Pagination className="justify-content-center mt-5 pb-3">
        {page > 1 && <>
          <Pagination.First onClick={() => { setPage(1) } } />
          <Pagination.Prev onClick={() => { setPage( page - 1 ) } }/>
          <Pagination.Item onClick={() => { setPage(1) } } >{1}</Pagination.Item>
        </>}

        {(page - 5) >= 1 && <>
          <Pagination.Ellipsis onClick={() => { setPage(page - 5 ) } } />
        </>}

        {page - 1 > 1 && <>
          <Pagination.Item onClick={() => { setPage(page - 1) } } >{page - 1}</Pagination.Item>
        </>}


        <Pagination.Item active>{page}</Pagination.Item>

        {page + 1  < totalPages && <>
          <Pagination.Item onClick={() => { setPage(page + 1) } } >{page + 1}</Pagination.Item>
        </>}

        {(page + 5) <= totalPages && <>
          <Pagination.Ellipsis onClick={() => { setPage(page + 5) } } />
        </>}


        {page < totalPages && <>
          <Pagination.Item onClick={() => { setPage(totalPages) } } >{totalPages}</Pagination.Item>
          <Pagination.Next onClick={() => { setPage(page + 1) } } />
          <Pagination.Last onClick={() => { setPage(totalPages) } }/>
        </>}

      </Pagination>
    </>;
}
 
export default PeoplesPage;