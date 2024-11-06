import './App.css'
import TabelaDeProdutosFiltrados from "./components/TabelaDeProdutosFiltrados"


const PRODUCTS =[
  {category: "Fruits", price:"$1", stocked: true, name:"Apple"},
  {category: "Fruits", price:"$1", stocked: false, name:"Dragonfruit"},
  {category: "Fruits", price:"$1", stocked: true, name:"Banana"},
  {category: "Fruits", price:"$1", stocked: true, name:"Coconut"},
  {category: "Fruits", price:"$1", stocked: false, name:"Pumpkin"},
  {category: "Fruits", price:"$1", stocked: true, name:"Pears"},
];

function App() {

  return <TabelaDeProdutosFiltrados produtos={PRODUCTS} />
  
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Desenv Front</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         Total Click {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
