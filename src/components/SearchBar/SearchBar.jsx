import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import './SearchBar.css'
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function SearchBar() {

    const { setProducts, setLoading } = useContext( AppContext );
    const [ searchValue, setSearchValue ] = useState( '' );

    
    const handleShearch = async ( event ) => {
        event.preventDefault();
        setLoading( true );
        
        const products = await fetchProducts( searchValue );

        const productsResults = products.results
        setProducts( productsResults );
        setLoading(false)
        console.log( productsResults );
        setSearchValue( '' );
    }

    return (
        <form className="search-bar" onSubmit={ handleShearch }>
            {/* {name} */}
            <input
                type="search"
                value={searchValue}
                placeholder='Buscar produtos'
                className='search__input'
                onChange={ ( { target } ) => setSearchValue( target.value ) }
                required />
            <button type='submit' className='search__button'>
            <BsSearch />
            </button>
        </form>
    );
}

export default SearchBar;