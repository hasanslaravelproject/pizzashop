import React, { useEffect , useState} from "react";
import Axios from 'axios'
import {Link} from 'react-router-dom'
export default function Category() {

    let [initialcategory, setInitialCategory] = useState([])
    let [category, setCategory] = useState([])
    const fetchCategory = async () =>{
        const {data} =  await Axios.get('http://127.0.0.1:8000/api/category')
        await setInitialCategory(data)
        setCategory(data);
    }

    const handleSearch = (event) =>{ 
        let updatedList = initialcategory.filter(function(item){
          return item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        setCategory(updatedList);
    }
    let [show, setShow] = useState(false)

    useEffect(() =>{
        fetchCategory() 
    },[])
    return (
        <>
        <div className="row mt-4">
            <div className="col-lg-4 offset-lg-4">
                <div className="form-group">
                    <input type="text" 
                        name="search" 
                        placeholder="search category"   
                        onChange={handleSearch} 
                        className="form-control"
                    />
                </div>
            </div>
        </div>
        <div className="row  mt-2"> 
            {category && category.map(function(el) {
              return   <div key={el.id} className="col-lg-4">
                <div className="card border-primary p-0">
                    <div className="card-body  p-0">
                        <img   src={`http://127.0.0.1:8000/uploads/${el.image}`} alt="category" className="img-fluid" style={{objectFit: 'cover'}}/>
                        <div className="p-2">
                             <h2 className="text-capitalize text-muted display-5">{el.name}</h2>
                             <Link className="btn btn-info text-center" to={`single-category/${el.id}`}> Show More</Link> 
                        </div>
                    </div>
                </div> 
                </div> 
            })} 
        </div>
    </>
    )
}
