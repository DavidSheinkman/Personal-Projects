import Food from '../components/Food';


function HomePage(props) {
  return <Food food={props.food} />;
}

export async function getStaticProps() {
  const appleResponse = await fetch('https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/apple');
  const appleData = await appleResponse.json();
  const carrotResponse = await fetch('https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/carrot');
  const carrotData = await carrotResponse.json();
  const melonResponse = await fetch('https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/melon');
  const melonData = await melonResponse.json();
  const pearResponse = await fetch('https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/pear');
  const pearData = await pearResponse.json();
  const lemonResponse = await fetch('https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/lemon');
  const lemonData = await lemonResponse.json();
  const orangeResponse = await fetch('https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/orange');
  const orangeData = await orangeResponse.json();
  const saladResponse = await fetch('https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/salad');
  const saladData = await saladResponse.json();
  

  const props = {
    food: [ { ...appleData, amount: 0 , betterColor: "#ff3b3f" , icon: "GiShinyApple"  },
        { ...carrotData, amount: 0 , betterColor: "#f39237" , icon: "GiCarrot"},
         { ...melonData, amount: 0 , betterColor: "#ffa47c" , icon: "GiWatermelon" },
          { ...pearData, amount: 0 , betterColor: "#8cc84b" , icon: "GiPear" },
          { ...lemonData, amount: 0 , betterColor: "#ece40d" , icon: "GiLemon" },
          { ...orangeData, amount: 0 , betterColor: "#ff7902" , icon: "GiOrange" },
           { ...saladData, amount: 0 , betterColor: "#56ab2f" , icon: "TbSalad" },
        ],
  };

  return {
    props,
  };
}




  
  export default HomePage;