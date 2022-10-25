import { useEffect, useState } from "react";

const useChats = (query,position) => {
    const limit = 5 //Allowing fetch 5 message at a time
    const [displayChats, setDisplayChats] = useState([]);
	const [hasMore, setHasMore] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setDisplayChats([]);
	},[query]);

	useEffect(() => {
		setLoading(true);
		for (let i = 0; i < limit; i++) {
			setDisplayChats([...new Set([...displayChats, query[position - i]])]);
		}
        setHasMore(query.length > displayChats.length)
        setLoading(false)
	},[query,position]);

	return { displayChats, hasMore, loading };
};

export default useChats;
