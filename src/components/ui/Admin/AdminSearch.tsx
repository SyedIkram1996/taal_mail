import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import SearchIcon from "@/components/common/SvgIcons/SearchIcon";
import TextLg from "@/components/common/Text/TextLg";
import useTextFieldPropertyFiltersDebounce from "@/hooks/useTextFieldPropertyFiltersDebounce";
import { Stack } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const AdminSearch = ({ title, children }: Props) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const { handleTextFieldChange } = useTextFieldPropertyFiltersDebounce({
    searchParams,
    replace,
    pathname,
  });
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "var(--text-secondary)",
          padding: "2.31rem 2.31rem 2.31rem 4.12rem",
        }}
      >
        <TextLg
          text={title}
          sx={{
            fontSize: "2rem",
            color: "var(--text-white)",
            mb: "3.31rem",
            ml: "2.38rem",
          }}
        />

        <LabelTopTextField
          name="search"
          defaultValue={searchParams.get("search") || ""}
          placeholder="Search"
          onChange={(e) => {
            handleTextFieldChange(e);
          }}
          endIcon={
            <SearchIcon
              sx={{
                cursor: "pointer",
                width: { xs: "30px", md: "70px" },
                height: "100%",
                mt: "0.25rem",
                pr: "2rem",
              }}
            />
          }
          sx={{
            maxWidth: "70.6875rem",
            // minHeight: "3.625",
            ".MuiOutlinedInput-root": {
              height: "3.625rem",
              backgroundColor: "var(--anti-flash-white)",
              borderRadius: "0.625rem",
              fieldset: {
                border: "1px solid var(--platinum)",
                borderRadius: "0.625rem",
              },
              // input: {
              //   height: "1.9rem",
              // },
              "input::placeholder": {
                fontSize: "1rem",
                color: "var(--spanish-gray)",
                // opacity: "1",
              },
            },
            ".MuiInputBase-root": {
              padding: "0",
            },
          }}
        />
      </Stack>

      <Stack
        sx={{
          padding: "3.19rem 5.19rem",
          // height: "calc(100vh - 235px)",
          // overflowY: "auto",
        }}
      >
        {children}
      </Stack>
    </>
  );
};

export default AdminSearch;
