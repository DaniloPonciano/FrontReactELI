import BarraDePesquisa from './BarraDePesquisa.tsx'
import TabelaDeProdutos from './TabelaDeProdutos.tsx'

function TabelaDeProdutosFiltrados({produtos}){
    return(
        <div>
        <BarraDePesquisa />
        <TabelaDeProdutos produtos={produtos} />
        </div>
    )
}

export default TabelaDeProdutosFiltrados