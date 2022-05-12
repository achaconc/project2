import React from 'react';
import Chart from '../Chart/Chart';
import Data from '../../Assets/prices.json';
import './Content.scss';
import {CardGroup, Card, Alert} from 'react-bootstrap';

const normalizeData = (props) => {
  let result = [];
  props.forEach((item) => {
    Object.keys(item).forEach(i => {
      const range = i.split('-');
      const min = parseInt(range[0]);
      const max = parseInt(range[1]);
      for (let index = min; index <= max; index++) {
        result = [...result, { name: index, Precio: item[i]}];
      }
    });
  });
  return result;
}

const unprecio =  normalizeData(Data.unprecio);
const dosprecios = normalizeData(Data.dosprecios);
const mixprecios = normalizeData(Data['3.0a']);


const Content = () => {
  return (
    <div className='container_component'>
      <Alert className="alert_component" key='light' variant='light'>
        <h3>Tarifas</h3>
        Si tu empresa no tiene nada que ver con la de tu vecino, ¿por qué van a tener la misma tarifa eléctrica? La tarifa eléctrica de tu negocio depende de las necesidades que tengas en tu local y de la hora en que desarrolles tu actividad. Paga lo justo cuando lo necesitas.
      </Alert>
      <CardGroup>
        <Card className='card_component'>
          <Card.Body>
            <Card.Title>Tarifa "Un Precio"</Card.Title>
            <Card.Body variant="top"><Chart data={unprecio}></Chart></Card.Body>
            <Card.Text>
              Tendrás la garantía de estar pagando un solo precio sin estar pendiente del cómo y el porqué. De eso, si te parece, ya nos encargamos nosotros.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='card_component'>
          <Card.Body>
            <Card.Title>Tarifa "Dos Precios"</Card.Title>
            <Card.Body><Chart data={dosprecios}></Chart></Card.Body>
            <Card.Text>
              Con esta tarifa debes tener en cuenta la hora para optimizar tu ahorro ya que las horas valle tienen un precio de energía más económico que las del periodo punta.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='card_component'>
          <Card.Body>
            <Card.Title>Tarifa "3.0a"</Card.Title>
            <Card.Body><Chart data={mixprecios}></Chart></Card.Body>
            <Card.Text className='text_component'>
              Una tarifa para empresas que realizan diferentes consumos a lo largo del día, que ofrece precios muy económicos en horario valle y precios muy competitivos en horario llano.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Content;