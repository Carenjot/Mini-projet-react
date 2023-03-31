import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListeMusee from './components/ListeMusee'

const museumList = [
  {
    name:"Musée Saint-Remi",
    adress:"53 rue Simon",
    imgSrc:"./src/img/museesaintremi.jpg",
  },
  {
    name:"Musée des Beaux-Arts",
    adress:"8 rue Chanzy",
    imgSrc:"./src/img/museedesbeauxreves.jpg",
  },
  {
    name:"Musée de la rédition du 7 mai 1945",
    adress:"12 rue du Président Franklin Roosevelt",
    imgSrc:"./src/img/museereedition.jpg",
  },
  {
    name:"Musée Automobile Reims-Champagne",
    adress:"84 avenue Georges Clemenceau",
    imgSrc:"./src/img/planetarium.jpg",
  },
  {
    name:"Musée du fort de la Pompelle",
    adress:"RD 944, route de Chalons-en-Champagne",
    imgSrc:"./src/img/fortpompelle.jpg",
  },
  {
    name:"Planétarium de Reims",
    adress:"49 avenue du Général de Gaulle",
    imgSrc:"./src/img/planetarium.jpg",
  },
  {
    name:"Musée-Hôtel Le Vergeur",
    adress:"36 place du Forum",
    imgSrc:"./src/img/museelevergeur.jpg",
  }
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ul>
        {museumList.map((museum) => (
          <ListeMusee name={museum.name} adress={museum.adress} imgSrc={museum.imgSrc}/>
        ))}
      </ul>
    </div>
  )
}

export default App
