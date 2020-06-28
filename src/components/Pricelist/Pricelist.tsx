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
    <div className="flex">
      {pricesKeys.map(
        (value: string, key: number) =>
          key % 4 === 0 && (
            <table key={`pricelist_${key}`} className="table-auto m-4">
              <tbody>
                {pricesKeys.slice(key, key + 4).map(season => (
                  <tr key={`pricerow_${season}`}>
                    <td className="px-4 py-2">{season}</td>
                    <td className="px-4 py-2">{prices[season]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
      )}
    </div>
  );
};

export default PriceList;
