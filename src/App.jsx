
import data from './data/products.json'
import ProductCard from './components/ProductCard';
import InventoryProvider from './components/InventoryProvider';


function App() {
  return (
    <div className='d-flex flex-column row-gap'>
      <InventoryProvider>
        {data.products.map(product => {
          const { id } = product;
          return (<ProductCard key={id} id={id} />);
        })}
      </InventoryProvider>
    </div>
  );
}

export default App
