import { useEffect, useState } from "react";

const useChats = (query,position) => {
    const limit = 10 //Allowing fetch 5 message at a time
    const [displayChats, setDisplayChats] = useState([]);
	const [hasMore, setHasMore] = useState(false);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		setLoading(true);
		query.map((chat, index) => {
			if (index < position + limit) {
				displayChats.push(chat);
			}
		});
        setHasMore(query.length > displayChats.length)
        setLoading(false)
	},[query,position]);

	return { displayChats, hasMore, loading };
};

export default useChats;