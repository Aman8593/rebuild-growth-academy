import "./card.scss";
const Card = () => {
  return (
    <div className="cards-section">
      <h1 className="cards-title">What We Provide</h1>
      <div className="cards-container">
        <div className="card">
          <h2>Basics of Trading</h2>
          <p>
            Learn the basics of the stock market, to enhance the understanding
            of how does the stock market works and progress to an in-depth
            understanding, acquiring the knowledge and skills needed to thrive
            in stock market trading.
          </p>
        </div>
        <div className="card">
          <h2>Price Action</h2>
          <p>
            Price action trading is one of the most effective and purest forms
            of market analysis. By understanding the natural movement of price,
            you can make better trading decisions without relying on lagging
            indicators. Whether you're a beginner or an experienced trader,
            mastering price action will give you a significant edge in any
            financial market — forex, stocks, commodities, or cryptocurrencies.
          </p>
        </div>
        <div className="card">
          <h2>Technical Analysis</h2>
          <p>
            Technical analysis is a method of evaluating statistical trends in
            trading activity, typically involving price movement and volume. It
            is used to identify trading and investment opportunities.
          </p>
        </div>
        <div className="card">
          <h2>Risk Management</h2>
          <p>
            Risk management is the work of balancing opportunities for gains
            with the potential of making losses from your investing choices.
            This work is can help reduce potential losses and increase potential
            gains. It can also help protect traders accounts from losing all of
            its money. The risk of losing money occurs when traders open
            positions. The larger the positions, the greater the risk, but also
            the greater opportunity for profit.
          </p>
        </div>
        <div className="card">
          <h2>Advanced Trading Concepts</h2>
          <p>
            This course is designed to take your trading skills to the next
            level, with a focus on advanced concepts like Candle Category, Entry
            No. 1 and Entry No. 2.
          </p>
        </div>
        <div className="card">
          <h2>Scanners</h2>
          <p>
            We will provide pre-tested scanners to help you identify stocks with
            high return potential. These scanners are designed to filter the
            best opportunities in the market. Get ready to leverage these tools
            for smarter trading decisions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
