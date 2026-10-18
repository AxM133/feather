import { useEffect, useState } from "react";
import { getBestsellers } from "../api/getBestsellers";

export function useBestsellers() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController()

        async function load() {
            try {
                const data = await getBestsellers(controller.signal);
                setProducts(data);
            } catch (err) {
                if (!controller.signal.aborted) setError(err.message);
            } finally {
                if (!controller.signal.aborted) setIsLoading(false)
            }
        }

        load();

        return () => controller.abort();
    }, []);

    return { products, isLoading, error };
}