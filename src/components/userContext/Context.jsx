import{ createContext, useContext, useState, useEffect } from 'react';   
const Context = createContext();

export const UserProvider = ( children ) => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        // Fetch user data from your API
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user'); // Adjust to your API endpoint
                const data = await response.json();
                setUsername(data.username); // Assuming the API returns a JSON object with a username field
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <Context.Provider value={{ username }}>
            {children}
        </Context.Provider>
    );
};

// Create a custom hook to use the User Context
export const useUser = () => {
    return useContext(Context);
};

