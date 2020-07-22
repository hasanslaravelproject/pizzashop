import React, { useEffect , useState, useContext} from 'react';
import  { CartContext } from '../../contexts/CartContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import Axios from 'axios'
import {Link} from 'react-router-dom'

import Pagination from "react-js-pagination";

//require("bootstrap/less/bootstrap.less");
const Home = () => {
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    let [initialproduct, setInitialProduct] = useState([])
    let [product, setProduct] = useState([])
    let [categories, setCategories] = useState([])
    let [activePage, setActivePage] = useState(1)
    let [totalCount, setTotalCount] = useState(0)    
    const fetchProduct = async () =>{
        await Axios.get('http://127.0.0.1:8000/api/product')
        .then((response) => {           
            setInitialProduct(response.data.data)
            setProduct(response.data.data);
            setActivePage(response.data.current_page);
            setTotalCount(response.data.total);
        })
        .catch(()=> {           
        })     
    }
    const fetchCategory = async () =>{
        const {data} =  await Axios.get('http://127.0.0.1:8000/api/category')
       
        console.log(" >> cat <, ", data);
        setCategories(data);
    }
    const handleSearch = (event) =>{ 
        let updatedList = initialproduct.filter(function(item){
          return item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        setProduct(updatedList);
    }
    const handlePageChange = async (e) => {
        console.log(">> handle page chagne << ", e);
        let pageNumber = e;
        await Axios.get('http://127.0.0.1:8000/api/product?page='+pageNumber)
        .then((response) => {
            console.log(">> res << ", response)
            setInitialProduct(response.data.data)
            setProduct(response.data.data);
            setActivePage(response.data.current_page);
        })
        .catch((err)=> {
            console.log(">> err<<", err);
        })
        
    }
    let [] = useState(false)
    useEffect(() =>{
        fetchCategory() 
        fetchProduct() 
    },[])
    const getFilteredProducts = (id) => {
        Axios.get('http://127.0.0.1:8000/api/products/'+id)
        .then((response) => {           
            setInitialProduct(response.data.data)
            setProduct(response.data.data);
            setActivePage(response.data.current_page);
            setTotalCount(response.data.total);           
        })
        .catch(() => {            
        })        
    }
    return (
        <>

            <div className="row mt-4">
                <div className="col-lg-4 offset-lg-4">
                    <div className="form-group">
                        <input type="text" 
                            name="search" 
                            placeholder="search product"   
                            onChange={handleSearch} 
                            className="form-control"
                        />
                    </div>
                </div>
            </div>                
            <div className="row mt-2">
            <button type="button" className="btn btn-info text-center" style={{marginLeft: "5px"}} onClick={() => getFilteredProducts('All')}> All </button>
                {categories && categories.map(category => {

                    return (
                        <a key={category.id} id={category.id} onClick={() => getFilteredProducts(category.id)} >
                            <div style={{marginLeft: '20px'}}>
                            <img src={`http://127.0.0.1:8000/uploads/${category.image}`} alt="category" className="img-fluid" 
                            style={{objectFit: 'cover', display: 'block'}}/>
                                <span
                                    style={{    
                                        width: 'inherit',
                                        fontSize: '35px',
                                        paddingTop: '10px',
                                        paddingBottom: '5px'}}> { category.name } </span>
                            </div>
                        </a>
                    )
                })}
            </div> 
           
            {product && product.map(el => (
                <div key={el.id} className="col-lg-4">
                    <div className="card border-primary p-0">
                        <div className="card-body  p-0">
                            <img src={`http://127.0.0.1:8000/uploads/${el.image}`} alt="product" className="img-fluid" style={{objectFit: 'cover'}}/>
                            <div className="p-2">
                                <h2 className="text-capitalize text-muted display-5">{el.name}</h2>
                                <Link className="btn btn-info text-center" to={`single-product/${el.id}`}> Show More</Link> 
                                &nbsp;

                                {
                                    isInCart(el) && 
                                    <button 
                                    onClick={() => increase(el)}
                                    className="btn btn-outline-primary btn-sm">Add more</button>
                                }

                                {
                                    !isInCart(el) && 
                                    <button 
                                    onClick={() => addProduct(el)}
                                    className="btn btn-primary btn-sm">Add to cart</button>
                                }
                                
                            
                            </div>
                        </div>
                    </div> 
                    </div> 
            ))} 




           {/* This is the example code for showing the dummy data and test the cart related fixed issue. */}
           
            {/* {
                products.map(product => (
                    <div className="row mt-2">
                        <div className="card card-body">
                            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
                            src={product.photo + '?v=' + product.id} alt=""/>
                            <p>{product.name}</p>
                            <h3 className="text-left">{product.price}</h3>
                            <div className="text-right">
                                <Link  to="/" className="btn btn-link btn-sm mr-2">Details</Link>

                                {
                                    isInCart(product) && 
                                    <button 
                                    onClick={() => increase(product)}
                                    className="btn btn-outline-primary btn-sm">Add more</button>
                                }

                                {
                                    !isInCart(product) && 
                                    <button 
                                    onClick={() => addProduct(product)}
                                    className="btn btn-primary btn-sm">Add to cart</button>
                                }
                                
                            </div>
                        </div>
                        </div>
            
                ))
            }
            */}
           
           
           <Pagination
            activePage={activePage}
            itemsCountPerPage={4}
            totalItemsCount={totalCount}
            pageRangeDisplayed={5}
            onChange={(e) => handlePageChange(e)}
            />
    </>
    )
}

export default Home;
