import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselSeries = (props) => {
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

    
    return <>
        <Carousel
            // className='mt-auto mb-auto w-90vh'
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
            <div className='d-flex flex-column align-items-center gap-3'>
                <img src="https://fr.web.img3.acsta.net/pictures/23/08/29/10/11/3926822.jpg" alt="Mufasa" width={350} height={500} />
                <h2 style={{color : "white", fontWeight : "bold", textTransform: "uppercase"}}> </h2>
            </div>
            <div className='d-flex flex-column align-items-center gap-3'>
                <img src="https://yvon.eu/wp-content/uploads/2023/01/from-poster-scaled-1.jpg" alt="Mufasa" width={350} height={500} />
                <h2 style={{color : "white", fontWeight : "bold", textTransform: "uppercase"}}>FROM</h2>
            </div>
            <div className='d-flex flex-column align-items-center gap-3'>
                <img src="https://fr.web.img2.acsta.net/c_310_420/img/f0/58/f0580b5a82281dbb9cebe94f8eabb2f1.jpg" alt="Mufasa" width={350} height={500} />
                <h2 style={{color : "white", fontWeight : "bold", textTransform: "uppercase"}}>Madness</h2>
            </div>
            <div className='d-flex flex-column align-items-center gap-3'>
                <img src="https://fr.web.img2.acsta.net/c_310_420/pictures/23/01/12/10/03/1037279.jpg" alt="Mufasa" width={350} height={500} />
                <h2 style={{color : "white", fontWeight : "bold", textTransform: "uppercase"}}>En Place</h2>
            </div>
        </Carousel>
    </>;
}

export default CarouselSeries;