"use client";

import SearchResultTextField from "@/components/common/Input/SearchResultTextField";
import TextXs from "@/components/common/Text/TextXs";
import { SearchBlueBgIcon } from "@/constants/images.routes";
import useSearchByLocationDebounce from "@/hooks/useSearchByLocationDebounce";
import { Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const SearchByLocation = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const { handleSearching } = useSearchByLocationDebounce(
    searchValue,
    setIsTyping,
    setSearchResult,
  );
  return (
    <SearchResultTextField
      placeholder="Search by Location"
      searchValue={searchValue}
      setIsTyping={setIsTyping}
      setSearchValue={setSearchValue}
      handleSearching={handleSearching}
      sxResult={{
        top: "4.25rem",
        width: "100%",
        maxHeight: "15rem",
        overflow: "auto",
        flexWrap: "nowrap",
        zIndex: "1000000000000",
      }}
      hideSearchResult
      endIcon={
        <Image
          className="endIcon"
          src={SearchBlueBgIcon}
          alt="Search"
          width={93}
          height={65}
        />
      }
      sx={{ minWidth: "58.6875rem" }}
    >
      {isTyping ? (
        <TextXs
          text="Searching..."
          sx={{ p: "0.5rem 0.75rem", mt: "0.25rem" }}
        />
      ) : searchResult.length > 0 ? (
        searchResult.map((result, index: number) => (
          <Stack>
            <TextXs text={result} />
          </Stack>
        ))
      ) : (
        <TextXs
          text="Not Result Found"
          sx={{ p: "0.5rem", mt: "0.25rem", color: "var(--text-black)" }}
        />
      )}
    </SearchResultTextField>
  );
};

export default SearchByLocation;
