import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item})=>{
    return( <Card style={{ width: '18rem', background:"black",  }}>
    <Card.Img style={{ width: '90%', marginTop:"10px", marginLeft:"20px"}} variant="top" src={item.pictureUrl} />
    <Card.Body >
      <Card.Title style={{ color:"bisque", display:"flex", justifyContent:"center" }}>{item.title}</Card.Title>
      <Card.Text style={{ color:"bisque", display:"flex", justifyContent:"center" }}>
       {item.description}
      </Card.Text>
      <Link style={{color:"bisque", display:"flex", justifyContent:"center" }} to={`/items/${item.id} `}> <Button variant="primary">Vista</Button>
      </Link>
    </Card.Body>
  </Card>)
}



