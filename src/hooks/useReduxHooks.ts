import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/features/store";
import type { TypedUseSelectorHook } from "react-redux/es/types";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch: () => AppDispatch = useDispatch;

export { useAppDispatch, useAppSelector }