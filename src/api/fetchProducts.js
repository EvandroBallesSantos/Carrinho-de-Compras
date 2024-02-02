const fetchProducts = async (query) => {

    const response = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
    )
    const data = await response.json();
    // const extracao = data.map((data) => data.title)

    return data;

}

export default fetchProducts;