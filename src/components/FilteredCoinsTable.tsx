"use client";
import { useEffect, useState } from "react";

import axios from "axios";
import { CoinType } from "@/types";
import items from "@/constants/items";
import CoinsTable from "./CoinsTable";
import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";
import { ThreeDots } from "react-loader-spinner";

const FilteredCoinsTable = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [coins, setCoins] = useState<CoinType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setCoins(res.data);
      } catch (error) {
        setError(
          error + " High risk of rate limit exceeded, showing cached data"
        );
        setCoins(items);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const filteredCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearch?.toLowerCase())
  );

  return (
    <div>
      <Input
        value={search}
        placeHolder="Search coin..."
        handleSearch={(e) => setSearch(e.target.value)}
      />
      {filteredCoins.length ? (
        <>
          <p style={{ fontSize: "14px" }}>{error}</p>
          <CoinsTable items={filteredCoins} />
        </>
      ) : (
        <div
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="rgba(96, 96, 255, 0.836)"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          ) : (
            "No results found"
          )}
        </div>
      )}
    </div>
  );
};
export default FilteredCoinsTable;
