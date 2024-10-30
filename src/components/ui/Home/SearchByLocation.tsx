"use client";

import SearchResultTextField from "@/components/common/Input/SearchResultTextField";
import MUILink from "@/components/common/MUILink/MUILink";
import TextMd from "@/components/common/Text/TextMd";
import TextSm from "@/components/common/Text/TextSm";
import TextXs from "@/components/common/Text/TextXs";
import { SearchBlueBgIcon } from "@/constants/images.routes";
import { PROPERTY } from "@/constants/page.routes";
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
        top: { xs: "3rem", md: "4.25rem" },
        width: "100%",
        maxHeight: "15rem",
        overflow: "auto",
        flexWrap: "nowrap",
        zIndex: "1000000000000",
        // left: "0",
      }}
      hideSearchResult
      endIcon={
        <Image
          priority
          className="endIcon"
          src={SearchBlueBgIcon}
          alt="Search"
          width={93}
          height={65}
        />
      }
      sx={{
        minWidth: { xs: "95%", sm: "80%", md: "58.6875rem" },
        ".endIcon": {
          width: { xs: "60px", md: "93px" },
          height: "100%",
        },
      }}
    >
      {isTyping ? (
        <TextXs
          text="Searching..."
          sx={{
            p: "0.5rem 0.75rem",
            mt: "0.25rem",
            color: "var(--text-black)",
            fontSize: "1rem",
          }}
        />
      ) : searchResult.length > 0 ? (
        <Stack>
          {searchResult.map((result, index: number) => (
            <Stack
              component={MUILink}
              href={`${PROPERTY}/${result.id}`}
              key={result.id}
              direction={"row"}
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                p: "0.5rem 0.75rem",
                ":hover": { backgroundColor: "var(--anti-flash-white)" },
              }}
            >
              <TextSm text={result.name} sx={{ color: "var(--text-black)" }} />
              <TextMd text={result.location} />
            </Stack>
          ))}
        </Stack>
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
