//Search functions 
import { createAction } from "@reduxjs/toolkit";

//Actions 
export const setSearchQuery = createAction("search/setQuery");
export const clearSearchQuery = createAction("search/clearQuery");
