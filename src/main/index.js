import './index.css';
import axios from "axios";
import React from "react";

function MainPage(){
    const [products, setProducts] = React.useState([]);
    React.useEffect(function(){
        axios
    .get("https://388b61e4-79f4-4209-b28f-412c926fbd94.mock.pstmn.io/products")
    .then(function(result){
        const products = result.data.products;
        setProducts(products);
    }).catch(function(error){
            console.error('error 발생 : ', error);
        });
    }, []);


    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="logo/logo.png" />
                    <h1 id = "store-name">ESC Gaming Store</h1>
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src='logo/banner_img.png'/>
                </div>
                <h1>판매되는 상품들</h1>
                <div id = "product-list">
                    
                        {products.map(function(product, index){
                            return (
                                <div className="product-card">
                        <div>
                            <img className="product-img" src={product.imageUrl} />
                        </div>

                        <div className="product-contents">
                            <span className = "product-name">{product.name}</span>
                            <span className = "product-price">{product.price}</span>
                            <div className ="product-seller">
                                <img className="seller-img" src="seller/seller.png" alt="판매자"/>
                                <span>{product.seller}</span>
                            </div>
                        </div>
                    </div>
                            );
                        })
                        }
                    

                    

                </div>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default MainPage;