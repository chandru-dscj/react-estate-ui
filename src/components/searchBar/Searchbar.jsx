import React, { useState } from 'react'
import './searchBar.scss'
const types = ["buy", "rent"];
const Searchbar = () => {

    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    })

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    return (
        <div className='searchbar'>
            <div className="type">
                {types.map(type => (
                    <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>{type}</button>
                ))}
            </div>
            <form>
                <input type="text" name="location" placeholder='City Location' />
                <input type="number" name="minprice" min={0} max={1000000} placeholder='Min Price' />
                <input type="number" name="maxprice" min={0} max={1000000} placeholder='Max price' />
                <button>
                    <img src="search.png" alt="" />
                </button>
            </form>

        </div>
    )
}

export default Searchbar