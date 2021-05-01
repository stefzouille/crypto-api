
import styles from './Coins.module.css';

const Coins = ({ name, price, symbol, marketcap, volume, image, priceChange, id }) => {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
      <div className={styles.coin}>
       
        <img src={image} alt={name} className={styles.coin_img}/>
      </div>
      <div>
        <h1 className={styles.coin_h1}>{name}</h1>
      </div>
      <div>
        <h2 className={styles.coin_symbol}>{symbol}</h2>
    </div>
      <div className={styles.coin_data}>
        <p className={styles.coin_price}>{price} $</p>
        <p className={styles.coin_volume}>{volume.toLocaleString()} $</p>

        {priceChange < 0 ? (
          <p className={styles.coin_percent, styles.red}>
            {priceChange.toFixed(2)} %
          </p>
        ) : (
          <p className={styles.coin_percent, styles.green}>
            {priceChange.toFixed(2)} %
          </p>
        )}

          <p className={styles.coin_marketcap}>
            Mkt cap: {marketcap.toLocaleString()} $
          </p>

      </div>
      </div>
    </div>
  )
}

export default Coins;
