// contexts/AuthContext.jsx
import { createContext, useState } from "react";
// import { auth } from '../lib/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: "admin",
  });

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
  //       if (firebaseUser) {
  //         setUser({ uid: firebaseUser.uid, email: firebaseUser.email });
  //       } else {
  //         setUser(null);
  //       }
  //     });
  //     return unsubscribe;
  //   }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
