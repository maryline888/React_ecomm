import React, { useState } from 'react';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Effectuez votre recherche ici en utilisant `searchTerm`
        console.log(`Effectuez une recherche pour "${searchTerm}"`);
    };

    return (
        <form onSubmit={handleSubmit} className='search-form'>
            <input
                type="text"
                placeholder="Rechercher un article"
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit">Rechercher</button>
        </form>
    )
}

export default SearchForm