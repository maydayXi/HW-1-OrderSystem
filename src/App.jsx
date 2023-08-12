
import data from './data/products.json'
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className='d-flex flex-column row-gap'>
      {data.products.map(product => (<ProductCard key={product.id} {...product}/>))}
    </div>
  );
}

export default App
