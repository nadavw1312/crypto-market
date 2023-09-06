"use client";
import { CoinType } from "@/types";
import Image from "next/image";
import Pagination from "./Pagination";
import { useState } from "react";
import styles from "@/styles/CoinsTable.module.css";
import { numberWithCommas } from "@/lib/helpers";

type CoinsTableProps = {
  items: CoinType[];
};

const CoinsTable = ({ items }: CoinsTableProps) => {
  const [itemsToShow, setItemsToShow] = useState<CoinType[]>([]);

  const handlePageChange = (currPageItems: CoinType[]) => {
    console.log(currPageItems);
    setItemsToShow([...currPageItems]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <table className={styles.coinsTable}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Logo</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Change in 24H</th>
              <th>Market Cap</th>
              <th>Volume</th>
              <th>Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
            {itemsToShow.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={25}
                    height={25}
                  />
                </td>
                <td>{item.symbol}</td>
                <td>{"$" + item.current_price}</td>
                <td
                  className={
                    item.price_change_percentage_24h > 0
                      ? styles.positive
                      : styles.negetive
                  }
                >
                  {item.price_change_percentage_24h > 0
                    ? `+${item.price_change_percentage_24h.toFixed(2)}`
                    : item.price_change_percentage_24h.toFixed(2)}
                </td>
                <td>${numberWithCommas(item.market_cap)}</td>
                <td>${numberWithCommas(item.total_volume)}</td>
                <td>{numberWithCommas(item.circulating_supply)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination items={items} handlePageChange={handlePageChange} />
    </div>
  );
};
export default CoinsTable;
