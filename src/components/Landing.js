import React, { useEffect, useState } from 'react';

//API
import { getCoin } from '../services/api';

// Loading
import Loader from "../components/Loader";
import Coin from './Coin';

//Style
import styles from "./../styles/Landing.module.scss";

const Landing = () => {

    const [coins , setCoin] = useState([]);
    const [search, setSearch] = useState("");

    useEffect( () =>{

        const fetchAPI = async () =>{
            const data = await getCoin();
            console.log(data);
            setCoin(data);
        }

        fetchAPI();

    }, [])

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        
        <>
            <input className={styles.searchInput} type='text' placeholder='Search' value={search} onChange={searchHandler} />

            {
                coins.length ? 
                <div className={styles.container}>
                {
                    searchedCoins.map(coin => <Coin 
                                    key={coin.id}
                                    name={coin.name}
                                    image={coin.image}
                                    symbol={coin.symbol}
                                    price={coin.current_price}
                                    marketCap={coin.market_cap}
                                    priceChange={coin.market_cap_change_percentage_24h}
                    />)
                }
                                </div> :
                                <Loader />
            }

            
        </>
        
    );
};

export default Landing;