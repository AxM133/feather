import { useEffect, useState } from "react";
import { getBestsellers } from "../api/getBestsellers";

export function useBestsellers() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const data = await getBestsellers();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        load();
    }, []);
    return { products, isLoading, error };
}