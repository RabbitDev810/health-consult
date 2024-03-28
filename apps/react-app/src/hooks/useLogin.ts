import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";

const useLogin = () => {
  const [isLogged, setIsLogged] = useState<boolean>();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsLogged(true);
      } catch (error) {
        setIsLogged(false);
      }
    }
    checkLogin();
  }, []);

  return isLogged;
};

export default useLogin;
