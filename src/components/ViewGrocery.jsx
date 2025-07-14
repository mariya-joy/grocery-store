import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewGrocery = () => {
    const[products,changeProducts]=useState(
        [
           {"productname":" Seed mix","image":"https://m.media-amazon.com/images/I/41M12E3tA+L._SY300_SX300_.jpg","Price":"$699"}, 
           {"productname":"Cashew","image":"https://m.media-amazon.com/images/I/71KXIA3FEnL._SX679_.jpg","Price":"$669"}, 
           {"productname":"Dry Fruits","image":"https://m.media-amazon.com/images/I/41STO7tmoCL._SX300_SY300_QL70_FMwebp_.jpg","Price":"$899"}, 
           {"productname":"Chia seeds","image":"https://m.media-amazon.com/images/I/71vbQzDkQbL._SY879_.jpg","Price":"$599"}, 
           {"productname":"Farmley Seed mix","image":"https://m.media-amazon.com/images/I/41jhlB1ET9L._SX300_SY300_QL70_FMwebp_.jpg","Price":"$999"}, 
        ]
    )
  return (
    <div>
        <NavBar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                    { products.map(
                      (value,index)=>{
                        return(
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src={value.image} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                  <h5 class="card-title">{value.productname}</h5>
                                            <p class="card-text">{value.price}</p>
                                            <a href="#" class="btn btn-primary">Add to Cart</a>
                                        </div>
                                </div>
                            </div>
                        )
                      } 
                    ) }
                           
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewGrocery