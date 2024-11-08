import MUILink from "@/components/common/MUILink/MUILink";
import PropertiesSkeleton from "@/components/common/Skeletons/PropertiesSkeleton";
import ArrowIcon from "@/components/common/SvgIcons/ArrowIcon";
import SvgIconText from "@/components/common/SvgIconText";
import User from "@/components/ui/Admin/Users/User/User";
import { USER } from "@/constants/api.routes";
import { ADMIN_USERS_PAGE } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { cookies } from "next/headers";
import { Suspense } from "react";

interface Params {
  params: { id: string };
}

export default async function UserPage({ params }: Params) {
  const token = cookies().get("token");

  const response = await fetch(`${USER}?id=${params.id}`, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();

  return (
    <>
      {!res.error && (
        <>
          {" "}
          <Stack
            sx={{
              backgroundColor: "var(--text-secondary)",
              padding: "1.75rem 1.38rem",
            }}
          >
            <SvgIconText
              text={res.user.name}
              icon={
                <MUILink href={ADMIN_USERS_PAGE}>
                  <ArrowIcon sx={{ width: "60px", height: "60px" }} />
                </MUILink>
              }
              sxRow={{ gap: "0.62rem" }}
              sxText={{ fontSize: "2rem", fontWeight: "600", color: "white" }}
            />
          </Stack>
          <Suspense fallback={<PropertiesSkeleton />}>
            <User userId={params.id} />
          </Suspense>
        </>
      )}
    </>
  );
}
