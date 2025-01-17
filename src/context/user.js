// src/context/user.js
import React from "react";

const UserContext = React.createContext(); 

// create a provider component
function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  } 
  
  export { UserContext, UserProvider }; 