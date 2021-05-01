

const Coins = ({ name, price, symbol, marketcap, volume, image, priceChange, id }) => {
  return (
    <div classname="coin_container">
      <div className="coin_row">
      <div classname="coin">
        <img src={image} alt={name} className="coin_img"/>
        <h1 className="coin_h1">{name}</h1>
        <p className="coin_symbol">{symbol}</p>

      </div>
      <div className="coin_data">
        <p className="coin_price">{price} $</p>
        <p className="coin_volume">{volume.toLocaleString()} $</p>

        {priceChange < 0 ? (
          <p classname="coin_percent red">
            {priceChange.toFixed(2)} %
          </p>
        ) : (
          <p classname="coin_percent green">
            {priceChange.toFixed(2)} %
          </p>
        )}

          <p classname="coin_marketcap">
            Mkt cap: {marketcap.toLocaleString()} $
          </p>

      </div>
      </div>
    </div>
  )
}

export default Coins;
