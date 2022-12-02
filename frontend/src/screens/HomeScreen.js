import axios from 'axios';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

function HomeScreen() {

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    const fetchData = async ()=>{
        const results = await axios.get(`/api/products`);
        setProducts(results.data.products);
    }
    fetchData();
    
  },[])

  return (

    <div>
      <h1>Featured Products</h1>
      <div className="products">

        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/products/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/products/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to Cart</button>
            </div>
            {/* div product-info */}
          </div>
          // product
        ))}
      </div>
      {/* div products */}
    </div>
  );
}

export default HomeScreen;
