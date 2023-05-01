import { useContext } from "react";
import { LoaderContext } from "./Loader.context";

export function useLoader() { return useContext(LoaderContext) }