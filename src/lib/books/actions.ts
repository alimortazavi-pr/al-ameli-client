// import { AppThunk } from "@/lib";

//gRPC
// import { BookServiceClientSide } from "@/grpc/services/book/book.service";

//Actions of other reducers

//Reducer
import { booksReducer } from ".";

//Actions from reducer
export const {
  setBooks,
  setHasFilters,
  setSelectedBookDetail,
  setSelectedBookIdForBookDetail,
} = booksReducer.actions;

//Interfaces

//Tools

//Actions from actions
