import MenuCard from '../components/MenuCard';
import data from '../data/products.json';

/**
 * 首頁
 * @returns 首頁
 */
const Home = () => {
    const products = data.products;

    return (
        <div id="menu">
            <h1>Menu</h1>
            <div className='menu-content d-flex column-gap row-gap'>
                {products.map(product => {
                    const { productId } = product
                    return <MenuCard key={productId} product={product} />
                })}
            </div>
        </div>
    )
};

export default Home;