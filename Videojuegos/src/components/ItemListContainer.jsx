import Container from 'react-bootstrap/Container';

export const ItemListContainer  =  (props) =>{

    return( 
      <Container className='Bienvenido'>
      <h1>{props.greeting}</h1> 
      </Container>
  ); 
   
    
};