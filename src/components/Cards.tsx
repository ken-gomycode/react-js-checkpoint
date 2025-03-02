import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const images = [
  'https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=600',
]

const Cards = () => {
  const cards = images.map((image, index) => {
    return (
      <Card style={{ width: '30%' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title {index + 1}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            See Details
          </Button>
        </Card.Body>
      </Card>
    )
  });

  return (
    <div style={{padding: '20px 100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
      {cards}
    </div>
  );
}

export default Cards;