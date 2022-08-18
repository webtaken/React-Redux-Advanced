import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "i-001",
    title: "Papa a la huancaína",
    description: "Rica papa bañada en salsa huancaína 👌.",
    price: 15
  },
  {
    id: "i-002",
    title: "Rocoto Relleno",
    description: "Rico rocoto, relleno de estofadito de carne 🥵.",
    price: 20
  },
  {
    id: "i-003",
    title: "Cerveza Arequipeña",
    description: "Porque lo nuestro nos úne, refrescante cerveza heladita 🍻.",
    price: 10
  }
]

const Products = (props) => {
  const products_list = <ul>{
    DUMMY_PRODUCTS.map(item => {
      return <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    })
  }</ul>;
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {products_list}
    </section>
  );
};

export default Products;
