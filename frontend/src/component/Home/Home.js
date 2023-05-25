import React, {Fragment, useEffect} from 'react';
// import {CgMouse} from 'react-icons/cg';
import './Home.css';
import ProductCard from './ProductCard.js';
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';


const Home = () => {

    const alert = useAlert()
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {

        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProduct());
    }, [dispatch, alert, error]);

  return (
  <Fragment>
    {loading ? 
    ( <Loader/> ): (
    <Fragment>
    <MetaData title='Home'/>
    <div className='banner'>
        <h1>Welcome to JuiceMart</h1>
        <p>Order Fresh Juice in your home!</p>

        <a href="#container">
            <button>
                Order Now 
            </button>
        </a>
    </div>

    <h2 className="homeHeading">Featured Products</h2>

    <div className="container" id="container">
        { products && products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
    </div>
    </Fragment>)}
  </Fragment>
  )
}

export default Home
