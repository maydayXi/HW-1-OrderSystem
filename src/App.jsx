
import data from './data/products.json'
import ProductCard from './components/ProductCard';
import { createContext } from 'react';

export const InventoryContext = createContext();

function App() {
  return (
    <div className='d-flex flex-column row-gap'>
      <InventoryContext.Provider value={data}>
        {data.products.map(product => {
          const { id } = product;
          return (<ProductCard key={id} id={id} />);
        })}
      </InventoryContext.Provider>
    </div>
  );
}

export default App
