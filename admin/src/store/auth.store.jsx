import { createContext, useEffect, useState } from "react";

export const AuthStore = createContext();

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        
        const res = await fetch("http://localhost:3000/admin/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

         if(data.success || data.data.role==="admin" ){
             setAdmin(data.data);
         } else{
              throw new Error
         }

      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AuthStore.Provider value={{ admin, setAdmin ,loading}}>
      {children}
    </AuthStore.Provider>
  );
};

export default AuthProvider;
