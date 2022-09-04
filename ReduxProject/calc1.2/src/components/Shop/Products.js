import ProductItem from './ProductItem';
import classes from './Products.module.css';

// const DUMMY_PRODUCTS = [
//   {
//     id: 'p1',
//     price: 6,
//     title: 'My First Book',
//     description: 'The first book I ever wrote',
//   },
//   {
//     id: 'p2',
//     price: 5,
//     title: 'My Second Book',
//     description: 'The second book I ever wrote',
//   },
// ];

const DUMMY_FOODS = [
  {
    id: 'p1',
    calories: 528,
    protein: 45, 
    title: 'Shawarma',
    description: 'The first book I ever wrote',
    icon: 'https://cdn-icons-png.flaticon.com/512/6468/6468971.png'
  },
  {
    id: 'p2',
    calories: 746,
    protein: 51, 
    title: 'Hamburger',
    description: 'The second book I ever wrote',
    icon: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'
  },
  {
    id: 'p3',
    calories: 285,
    protein: 12, 
    title: 'Pizza',
    description: 'The second book I ever wrote',
    icon: 'https://cdn-icons-png.flaticon.com/512/3595/3595458.png'
  },
  {
    id: 'p4',
    calories: 211,
    protein: 8, 
    title: 'Sushi',
    description: 'The second book I ever wrote',
    icon: 'https://cdn-icons-png.flaticon.com/512/2252/2252075.png'
  },
  {
    id: 'p5',
    calories: 249,
    protein: 9, 
    title: 'Schnitzel',
    description: 'The second book I ever wrote',
    icon: 'https://cdn-icons-png.flaticon.com/512/6469/6469202.png'
  },
  {
    id: 'p6',
    calories: 0,
    protein: 0, 
    title: 'Water',
    description: 'The first book I ever wrote',
    icon: 'https://cdn-icons-png.flaticon.com/512/824/824239.png'
  },
  {
    id: 'p7',
    calories: 2,
    protein: 0, 
    title: 'Tea',
    description: 'The second book I ever wrote',
    icon: 'https://cdn-icons-png.flaticon.com/512/3504/3504837.png'
  },
  {
    id: 'p8',
    calories: 184,
    protein: 0, 
    title: 'Cola',
    description: 'The second book I ever wrote',
    icon: 'https://cdn-icons-png.flaticon.com/512/1868/1868727.png'
  },
  {
    id: 'p9',
    calories: 92,
    protein: 1, 
    title: 'Berries Juice',
    description: 'The second book I ever wrote',
    icon: 'https://cdn-icons-png.flaticon.com/512/6153/6153519.png'
  },
  {
    id: 'p10',
    calories: 123,
    protein: 0, 
    title: 'Wine',
    description: 'The second book I ever wrote',
    icon: 'https://cdn-icons-png.flaticon.com/512/763/763031.png'
  },
];



const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Add the food you want to eat</h2>
      <ul>
        {DUMMY_FOODS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            calories={product.calories}
            icon={product.icon}
            protein={product.protein}
            
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
