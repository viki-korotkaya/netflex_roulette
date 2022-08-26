import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "store/store";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const useMovieSearchParams = () => {
//   const [searchParams] = useSearchParams();
//
//   return {
//     selectedMovieId: searchParams.get("movie"),
//     filterQuery: searchParams.get("filter"),
//     sortQuery: searchParams.get("sortBy"),
//     searchKey: searchParams.get("searchKey"),
//   };
// };
