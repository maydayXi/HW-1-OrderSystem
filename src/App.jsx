
import data from './data/products.json'

function App() {
  return (
    <div>
      {data.products.map(product => {
        return (
          <div key={product.id} className='d-flex'>
            <img src={product.image} width="150px" />
            <span>{product.name}</span>
            <span>{product.description}</span>
            <span>${product.price}</span>
            +
            <span>{product.inventory}</span>
            -
          </div>
        )
      })}
    </div>
  );
}

export default App
