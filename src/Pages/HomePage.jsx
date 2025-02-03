import CarouselMovies from "../Components/CarouselMovies";
import CarouselSeries from "../Components/CarouselSeries";

const HomePage = () => {
    return <>
        <div style={{ height: "95vh" }}>
            <h2 className="text-center mb-3" style={{ color: "white", fontSize: "3rem" }}>FILMS</h2>
            <CarouselMovies />
        </div>
        <div style={{ height: "95vh" }}>

            <h2 className="text-center mb-3" style={{ color: "white", fontSize: "3rem" }}>SERIES</h2>
            <CarouselSeries/>
        </div>

    </>
}

export default HomePage;