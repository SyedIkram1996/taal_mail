import { ClickAwayListener, Stack, SxProps } from "@mui/material";
import { ReactNode, useState } from "react";
import LabelTopTextField from "./LabelTopTextField";

interface Props {
  placeholder: string;
  children: ReactNode;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  setIsTyping: (isTyping: boolean) => void;
  sx?: SxProps;
  sxResult?: SxProps;
  handleSearching: () => void;
  hideSearchResult?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  onClickAway?: (event: MouseEvent | TouchEvent) => void;
  endIcon?: ReactNode;
}

const SearchResultTextField = ({
  placeholder,
  children,
  searchValue,
  setIsTyping,
  setSearchValue,
  sx,
  sxResult,
  handleSearching,
  hideSearchResult,
  autoFocus,
  onClickAway,
  readOnly,
  endIcon,
}: Props) => {
  const [openSearchResult, setOpenSearchResult] = useState(false);

  return (
    <ClickAwayListener
      onClickAway={(e) => {
        setOpenSearchResult(false);
        if (onClickAway) {
          onClickAway(e);
        }
      }}
    >
      <Stack sx={{ position: "relative", ...sx }}>
        <LabelTopTextField
          sx={{
            ".MuiInputBase-root": {
              padding: "0",
              input: {
                px: { xs: "1rem", md: "2rem" },
                pr: "0.5rem",
                fontSize: "1.25rem",
              },
            },
            "& .MuiInputBase-input": {
              overflow: "hidden",
              textOverflow: "ellipsis",
            },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              },
            },
          }}
          readOnly={readOnly}
          autoFocus={autoFocus}
          label=""
          name=""
          value={searchValue}
          onFocus={() => {
            if (searchValue) {
              setOpenSearchResult(true);
            }
          }}
          onChange={(e) => {
            setOpenSearchResult(true);
            setIsTyping(true);
            handleSearching();
            setSearchValue(e.target.value);
          }}
          placeholder={placeholder}
          endIcon={endIcon}
        />

        {searchValue && openSearchResult && !readOnly && (
          <Stack
            className="displayScrollBar"
            onClick={() => {
              if (hideSearchResult) {
                setOpenSearchResult(false);
              }
            }}
            sx={{
              borderRadius: "0.5rem",
              border: "1px solid var(--platinum)",
              minHeight: "2.75rem",
              position: "absolute",
              top: "2.7rem",
              background: "white",
              cursor: "pointer",
              flexWrap: "wrap",
              gap: "0.25rem",
              zIndex: "10000",
              ...sxResult,
            }}
          >
            {children}
          </Stack>
        )}
      </Stack>
    </ClickAwayListener>
  );
};

export default SearchResultTextField;
