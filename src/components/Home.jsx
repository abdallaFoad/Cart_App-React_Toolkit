import React from 'react'
import { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../rtk/slice';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import formatCurrency from '../formatCurrency';
import '../style/Products.css';
import { addToCard } from '../rtk/cardSlice';

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="products" style={{ marginTop: "5rem" }}>
      <Container>
        <Row>
          {
            products.map((pro) => {
              return (
                <Col key={pro.id} style={{gap:'2rem'}} >
                  <div className="card">
                    <div className="title">{pro.title.slice(0, 20)}...</div>
                    <div className="img">
                      <img src={pro.image} alt='imageProduct' />
                    </div>
                    <div className="price">
                      Staring at <span>{formatCurrency(pro.price)}</span>
                    </div>
                    <div className="desc">{pro.description.slice(0, 100)}...</div>
                    <button onClick={() => dispatch(addToCard(pro))}>Add</button>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </div>
  );
}

export default Home