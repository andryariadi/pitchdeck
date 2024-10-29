"use client";

import InputField from "@/components/InputField";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <form action="" className="b-amber-500 w-full flex items-center justify-center">
      <InputField isSearch icon={<BiSearchAlt size={24} />} type="text" placeholder="Search Startup..." />
    </form>
  );
};

export default Search;
