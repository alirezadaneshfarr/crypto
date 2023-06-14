import React from 'react';

//Style
import styles from "../styles/Landing.module.scss";

const Coin = ({name, image, price, symbol, marketCap, priceChange}) => {
    return (
        <div className={styles.cryptoContainer}>
            <img src={image} alt={name} />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span className={styles.price}>{price.toLocaleString()} $</span>
            <span className={ priceChange > 0 ? styles.greenPrice : styles.redPrice}>{priceChange} %</span>
            <span>{marketCap.toLocaleString()} $</span>
        </div>
    );
};

export default Coin;