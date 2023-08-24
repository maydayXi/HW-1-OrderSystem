import InventoryCard from './components/InventoryCard';
import InventoryProvider from './components/InventoryProvider';
import Navbar from './components/Navbar';
import data from './data/products.json'

function App() {
  return (
    <>
      <Navbar />
      <div id='inventoryManage' className='d-flex flex-column row-gap'>
        <InventoryProvider>
          {data.products.map(product => {
            const { productId } = product;
            return (<InventoryCard key={productId} productId={productId} />);
          })}
        </InventoryProvider>
      </div>
    </>
  );
}

export default App
