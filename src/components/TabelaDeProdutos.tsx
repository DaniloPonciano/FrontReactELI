import LinhaDeUmProduto from "./LinhaDeUmProduto";
import LinhasCategoria from "./LinhasCategoria";


function TabelaDeProdutos(produtos) {

    const linhas = [];
    let ultimaCategoria = null;

    produtos.forEach((produto) => {
        if(produto.categoria !== ultimaCategoria) {
            linhas.push(
                <LinhasCategoria categoria={produto.categoria} key={produto.categoria} />
            )
        }

        linhas.push(
            <LinhaDeUmProduto produto={produto} key={produto.name} />
        )
        ultimaCategoria = produto.categoria
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                <tbody>
                    {linhas}
                </tbody>
            </thead>
        </table>
    )
}

export default TabelaDeProdutos