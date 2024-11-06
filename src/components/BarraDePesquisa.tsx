function BarraDePesquisa() {
    return (
        <form>
            <input type="text" placeholder="Pesquisar..." />
            <label>
                <input type="checkbox" /> {''} Mostra itens inativos
            </label>
        </form>
    )
}

export default BarraDePesquisa