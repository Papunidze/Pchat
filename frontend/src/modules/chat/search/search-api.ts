import { rest } from "@/lib/request";
import { TSearch } from "./searching-codec";

export type SearchInput = {
  member: string;
};

export const search = ({ member }: SearchInput) =>
  rest.get(`/user/search?member=${member}`).decode(TSearch);
