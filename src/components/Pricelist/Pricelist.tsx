import React from 'react';

type Prices = {
  [key: string]: string;
};

type Props = {
  prices: Prices;
};

const PriceList = ({ prices }: Props) => {
  const pricesKeys = Object.keys(prices);

  return (
    <div className="flex xs:grid xs:grid-cols-1 lg:grid-cols-2">
      {pricesKeys.map(
        (value: string, key: number) =>
          key % 4 === 0 && (
            <div key={`pricelist_${key}`}>
              {pricesKeys.slice(key, key + 4).map(season => (
                <div key={`pricerow_${season}`} className="grid xs:m-0 xs:grid-cols-3 xs:gap-8 lg:grid-cols-2">
                  <div className="px-4 py-2 xs:px-0 xs:col-span-2 lg:col-span-1">{season}</div>
                  <div className="px-4 py-2 xs:px-4 xs:border-l-2 xs:border-black md:border-none">{prices[season]}</div>
                </div>
              ))}
            </div>
          )
      )}
    </div>
  );
};

export default PriceList;
