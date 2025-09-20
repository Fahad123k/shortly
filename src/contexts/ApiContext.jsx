import axios from "axios";
import { createContext, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [shortUrl, setShortUrl] = useState();
    const BASE_HOST = import.meta.env.VITE_APP_HOST || `your-host.com`;

    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //  getShortUrl with error & loading state
    const getShortUrl = async (query) => {
        setLoading(true);
        setError("");
        try {
            const fullUrl = `${BASE_HOST}/api/url/shorten/`;
            const res = await axios.post(fullUrl, { url: query });

            const resData = {
                shortUrl: `${BASE_HOST}/${res.data.shortUrl}`,
                shortId: res.data.shortId,
            };

            setShortUrl(resData);
            console.log(resData);
        } catch (err) {
            console.error("Error creating short URL:", err);
            setShortUrl(null);
            setError("Failed to generate short URL. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // fetchStats already has error & loading
    const fetchStats = async (currentId) => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.get(`${BASE_HOST}/api/stats/${currentId}`);
            setStats(res.data);
            console.log(res.data);
        } catch (err) {
            console.error("Error fetching stats:", err);
            setStats(null);
            setError("Short ID not found or server error.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ApiContext.Provider
            value={{
                shortUrl,
                setShortUrl,
                getShortUrl,
                fetchStats,
                loading,
                stats,
                error,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};
