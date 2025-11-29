// src/useQueryParameter.js
import { useLocation } from "react-router-dom";
export const useQueryParameter = (key) => {
    return (new URLSearchParams(useLocation().search)).get(key);
};
export default useQueryParameter;