import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabase/supabase.config";

const AuthContex = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  async function signInWhitGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWhitGoogle({
        provider: "google",
      });
      if (error) throw new Error("ah ocurrido algo");
    } catch (error) {
      console.log(error);
    }
  }
  async function signout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw Error("ah ocurrido algo");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContex.Provider value={{ user, signInWhitGoogle, signout }}>
      {children}
    </AuthContex.Provider>
  );
};
