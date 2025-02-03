import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselMovies = (props) => {
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
                <img src="https://fr.web.img2.acsta.net/img/f5/f2/f5f2447c4246e42eb3e69040605d7cf1.jpg" alt="Mufasa" width={350} height={500} />
                <h2 style={{color : "white", fontWeight : "bold", textTransform: "uppercase"}}>Mufasa</h2>
            </div>
            <div className='d-flex flex-column align-items-center gap-3'>
                <img src="https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0%2C0%2C540%2C810&width=320" alt="Mufasa" width={350} height={500} />
                <h2 style={{color : "white", fontWeight : "bold", textTransform: "uppercase"}}>Aladin</h2>
            </div>
            <div className='d-flex flex-column align-items-center gap-3'>
                <img src="https://fr.web.img3.acsta.net/c_310_420/img/6d/d2/6dd27c0509edb48b13cc65d51915a1fe.jpg" alt="Mufasa" width={350} height={500} />
                <h2 style={{color : "white", fontWeight : "bold", textTransform: "uppercase"}}>Mercato</h2>
            </div>
            <div className='d-flex flex-column align-items-center gap-3'>
                <img src="https://lumiere-a.akamaihd.net/v1/images/image_4bf3cdf7.jpeg?region=0%2C0%2C540%2C810&width=320" alt="Mufasa" width={350} height={500} />
                <h2 style={{color : "white", fontWeight : "bold", textTransform: "uppercase"}}>Blanche neige </h2>
            </div>
        </Carousel>
    </>;
}

export default CarouselMovies;