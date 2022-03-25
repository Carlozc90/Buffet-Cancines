import { useContext } from "react";
import BuffetContext from "../context/BuffetProvider";

const useBuffet = () => {
  return useContext(BuffetContext);
};

export default useBuffet;
