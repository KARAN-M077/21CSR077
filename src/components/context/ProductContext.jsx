import { createContext, useState, useEffect } from "react";
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkzMDM5LCJpYXQiOjE3MTg2OTI3MzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjY3ZmM5OGRiLTdmOWMtNGY2NS05MjY5LWNhZjc0YWIwMDRhNCIsInN1YiI6ImthcmFubTE3YWJAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkIE1lZGljYWxzIiwiY2xpZW50SUQiOiI2N2ZjOThkYi03ZjljLTRmNjUtOTI2OS1jYWY3NGFiMDA0YTQiLCJjbGllbnRTZWNyZXQiOiJoZ2Vab2VBUnZkVUlwYmlQIiwib3duZXJOYW1lIjoiS2FyYW4iLCJvd25lckVtYWlsIjoia2FyYW5tMTdhYkBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMUNTUjA3NyJ9.CfGPfG69MP5yZTuuHtpYbIyScsqKGuCOjSfRbyd5WAg'; 

                const response = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const content = await response.json();
                console.log("content", content);
                setData(content);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchdata();
    }, []);

    return (
        <ProductContext.Provider value={{ data, loading }}>
            {children}
        </ProductContext.Provider>
    );
}
