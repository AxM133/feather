import { API_URL } from "@/shared/api";

export async function getBestsellers(signal) {
    const res = await fetch(`${API_URL}/products?bestseller=true`, { signal });

    if (!res.ok) {
        throw new Error(`Не удалось загрузить товары: ${res.status}`)
    };

    const data = await res.json();
    return data;
};