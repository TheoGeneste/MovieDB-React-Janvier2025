import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import SerieCard from "../Components/SerieCard";

const SeriesPage = () => {
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(500);

    const fetchSeries = () => {
        fetch("https://api.themoviedb.org/3/tv/top_rated?language=fr&page=" + page, {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTY0Njk4ODUwNS4xMjgsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yag79kgVwxdazfAOqQIOXnt1G7xh8MUbSf5EARMpv9Q"
            }
        })
            .then(response => response.json())
            .then(data => {
                setSeries(data.results);
                setTotalPages(data.total_pages);
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }).catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchSeries();
    }, [page]);

    return <>
        <h2 className="text-center" style={{ fontSize: "3rem", color: "white" }}>Series</h2>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
            {series.map((serie, index) => (
                <SerieCard description={serie.overview} title={serie.name} id={serie.id} image={serie.poster_path} />
            ))}
        </div>
        <Pagination className="justify-content-center mt-5 pb-3">
            {page > 1 && <>
                <Pagination.First onClick={() => { setPage(1) }} />
                <Pagination.Prev onClick={() => { setPage(page - 1) }} />
                <Pagination.Item onClick={() => { setPage(1) }} >{1}</Pagination.Item>
            </>}

            {(page - 5) >= 1 && <>
                <Pagination.Ellipsis onClick={() => { setPage(page - 5) }} />
            </>}

            {page - 1 > 1 && <>
                <Pagination.Item onClick={() => { setPage(page - 1) }} >{page - 1}</Pagination.Item>
            </>}


            <Pagination.Item active>{page}</Pagination.Item>

            {page + 1 < totalPages && <>
                <Pagination.Item onClick={() => { setPage(page + 1) }} >{page + 1}</Pagination.Item>
            </>}

            {(page + 5) <= totalPages && <>
                <Pagination.Ellipsis onClick={() => { setPage(page + 5) }} />
            </>}


            {page < totalPages && <>
                <Pagination.Item onClick={() => { setPage(totalPages) }} >{totalPages}</Pagination.Item>
                <Pagination.Next onClick={() => { setPage(page + 1) }} />
                <Pagination.Last onClick={() => { setPage(totalPages) }} />
            </>}

        </Pagination>
    </>;
}

export default SeriesPage;