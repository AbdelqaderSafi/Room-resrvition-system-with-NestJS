import { PaginationQueryType } from "src/types/util.types";

export type RoomQuery = PaginationQueryType & {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  capacity?: number;
};
