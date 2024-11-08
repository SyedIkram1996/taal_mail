import MUILink from "@/components/common/MUILink/MUILink";
import ArrowIcon from "@/components/common/SvgIcons/ArrowIcon";
import SvgIconText from "@/components/common/SvgIconText";
import { Stack } from "@mui/material";

interface Props {
  title: string;
  link: string;
}

const AdminHeader = ({ title, link }: Props) => {
  return (
    <Stack
      sx={{
        backgroundColor: "var(--text-secondary)",
        padding: "1.75rem 1.38rem",
      }}
    >
      <SvgIconText
        text={title}
        icon={
          <MUILink href={link}>
            <ArrowIcon sx={{ width: "60px", height: "60px" }} />
          </MUILink>
        }
        sxRow={{ gap: "0.62rem" }}
        sxText={{ fontSize: "2rem", fontWeight: "600", color: "white" }}
      />
    </Stack>
  );
};

export default AdminHeader;
