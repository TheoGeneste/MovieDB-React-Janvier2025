import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SerieCard = ({ title, description, id, image }) => {
    const navigate = useNavigate();

    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + image} height={400} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ height: "100px", overflow: "hidden" }}>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={() => { navigate("/serie/" + id) }}>Voir Serie</Button>
            </Card.Body>
        </Card>
    </>;
}

export default SerieCard;