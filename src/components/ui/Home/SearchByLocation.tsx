"use client";

import SearchResultTextField from "@/components/common/Input/SearchResultTextField";
import MUILink from "@/components/common/MUILink/MUILink";
import SearchIcon from "@/components/common/SvgIcons/SearchIcon";
import TextMd from "@/components/common/Text/TextMd";
import TextSm from "@/components/common/Text/TextSm";
import TextXs from "@/components/common/Text/TextXs";
import { PROPERTY } from "@/constants/page.routes";
import useSearchByLocationDebounce from "@/hooks/useSearchByLocationDebounce";
import { Stack } from "@mui/material";
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
        <Stack
          sx={{
            backgroundColor: "var(--text-secondary)",
            padding: "0.5rem",
            width: "120px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0 0.9rem 0.9rem 0",
            cursor: "pointer",
          }}
        >
          <SearchIcon
            sx={{
              path: { stroke: "white", strokeWidth: "0.25rem" },
              width: { xs: "30px", md: "40px" },
              height: { xs: "30px", md: "40px" },
              mt: "0.25rem",
            }}
          />
        </Stack>
      }
      sx={{
        minWidth: { xs: "95%", sm: "80%", md: "58.6875rem" },
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
