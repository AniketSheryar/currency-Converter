import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching data for currency:", currency);
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.rates);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    console.log(data);

    return data;
}

export default useCurrencyInfo;
