import ProductItem from './ProductItem';
import React, { useState } from 'react';
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



const PROTEIN_LIST = [
  {
    id: 'p1',
    calories: 78,
    protein: 6, 
    title: 'Egg',
    icon: 'https://cdn-icons-png.flaticon.com/512/2437/2437740.png'
  },
  {
    id: 'p2',
    calories: 160,
    protein: 20, 
    title: 'Tunna',
    icon: 'https://cdn-icons-png.flaticon.com/512/385/385149.png'
  },
  {
    id: 'p3',
    calories: 600,
    protein: 30, 
    title: 'Schnitzel',
    icon: 'https://cdn-icons-png.flaticon.com/512/6469/6469202.png'
  },
  {
    id: 'p4',
    calories: 211,
    protein: 8, 
    title: 'Sushi',
    icon: 'https://cdn-icons-png.flaticon.com/512/2252/2252075.png'
  },
  {
    id: 'p5',
    calories: 249,
    protein: 9, 
    title: 'Schnitzel',
    icon: 'https://cdn-icons-png.flaticon.com/512/6469/6469202.png'
  }
];

const CARBS_LIST = [
  {
    id: 'c1',
    calories: 206,
    protein: 4, 
    title: 'Rice',
    icon: 'https://cdn-icons-png.flaticon.com/512/3109/3109780.png'
  },
  {
    id: 'c2',
    calories: 480,
    protein: 5, 
    title: 'Fries',
    icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046786.png'
  },
  {
    id: 'c3',
    calories: 675,
    protein: 12, 
    title: 'Noodles ',
    icon: 'https://cdn-icons-png.flaticon.com/512/3084/3084875.png'
  },
  {
    id: 'c4',
    calories: 278,
    protein: 11, 
    title: 'Baguette',
    icon: 'https://cdn-icons-png.flaticon.com/512/3348/3348101.png'
  }
];


const VEGS_LIST = [
  {
    id: 'v1',
    calories: 30,
    protein: 3, 
    title: 'Cucumber',
    icon: 'https://cdn-icons-png.flaticon.com/512/590/590694.png'
  },
  {
    id: 'v2',
    calories: 22,
    protein: 1, 
    title: 'Tomato',
    icon: 'https://cdn-icons-png.flaticon.com/512/385/385149.png'
  },
  {
    id: 'v3',
    calories: 44,
    protein: 1, 
    title: 'Onion',
    icon: 'https://cdn-icons-png.flaticon.com/512/2522/2522907.png'
  }
];


const FRUITS_LIST = [
  {
    id: 'f1',
    calories: 105,
    protein: 1, 
    title: 'Banana',
    icon: 'https://cdn-icons-png.flaticon.com/512/2083/2083677.png'
  },
  {
    id: 'f2',
    calories: 24,
    protein: 1, 
    title: 'Lemon',
    icon: 'https://cdn-icons-png.flaticon.com/512/3137/3137034.png'
  },
  {
    id: 'f3',
    calories: 104,
    protein: 2, 
    title: 'Grapefruit',
    icon: 'https://cdn-icons-png.flaticon.com/512/5719/5719964.png'
  }
];



const DRINKS_LIST = [

  {
    id: 'd1',
    calories: 0,
    protein: 0, 
    title: 'Water',
    icon: 'https://cdn-icons-png.flaticon.com/512/824/824239.png'
  },
  {
    id: 'd2',
    calories: 2,
    protein: 0, 
    title: 'Tea',
    icon: 'https://cdn-icons-png.flaticon.com/512/3504/3504837.png'
  },
  {
    id: 'd3',
    calories: 205,
    protein: 1, 
    title: 'Beer',
    icon: 'https://cdn-icons-png.flaticon.com/512/931/931949.png'
    
  },
  {
    id: 'd4',
    calories: 92,
    protein: 1, 
    title: 'Berries Juice',
    icon: 'https://cdn-icons-png.flaticon.com/512/6153/6153519.png'
  },
  {
    id: 'd5',
    calories: 123,
    protein: 0, 
    title: 'Wine',
    icon: 'https://cdn-icons-png.flaticon.com/512/763/763031.png'
  },
  {
    id: 'd6',
    calories: 184,
    protein: 0, 
    title: 'Cola',
    icon: 'https://cdn-icons-png.flaticon.com/512/1868/1868727.png'
  }
];

const OTHER_LIST = [
  {
    id: 'o1',
    calories: 528,
    protein: 45, 
    title: 'Shawarma',
    icon: 'https://cdn-icons-png.flaticon.com/512/6468/6468971.png'
  },
  {
    id: 'o2',
    calories: 746,
    protein: 51, 
    title: 'Hamburger',
    icon: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'
  },
  {
    id: 'o3',
    calories: 285,
    protein: 12, 
    title: 'Pizza',
    icon: 'https://cdn-icons-png.flaticon.com/512/3595/3595458.png'
  },
  {
    id: 'o4',
    calories: 211,
    protein: 8, 
    title: 'Sushi',
    icon: 'https://cdn-icons-png.flaticon.com/512/2252/2252075.png'
  },
  
];



const Products = (props) => {


  const [list, setList] = useState(PROTEIN_LIST);

  
  const changeToProtein = () => {
    setList(PROTEIN_LIST);
    
  };
  const changeToCarbs = () => {
    setList(CARBS_LIST);
    
  };

  const changeToVegetables = () => {
    setList(VEGS_LIST);
    
  };

  const changeToFruits = () => {
    setList(FRUITS_LIST);
    
  };

  const changeToDrinks = () => {
    setList(DRINKS_LIST);
    
  };

  const changeToOther = () => {
    setList(OTHER_LIST);
    
  };

  return (
    <section className={classes.products}>
      <h2>Add the food you want to eat</h2>
      <h2>
      <div className="btn-group filter" role="group" aria-label="Basic example"> 
        <button type="button" class="btn btn-secondary" onClick={changeToProtein}>Protein</button>
        <button type="button" class="btn btn-secondary" onClick={changeToCarbs}>Carbs</button>
        <button type="button" class="btn btn-secondary" onClick={changeToVegetables}>Vegetables</button>
        <button type="button" class="btn btn-secondary" onClick={changeToFruits}>Fruits</button>
        <button type="button" class="btn btn-secondary" onClick={changeToDrinks}>Drinks</button>
        <button type="button" class="btn btn-secondary" onClick={changeToOther}>Other</button>
      </div>
      </h2>
      <ul>
        {list.map((product) => (
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
