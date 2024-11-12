import TextLg from "@/components/common/Text/TextLg";
import AddPropertyBanner from "@/components/ui/Property/Sell/AddPropertyBanner";
import AddPropertyDetails from "@/components/ui/Property/Sell/AddPropertyDetails";
import { MY_PROPERTY } from "@/constants/api.routes";
import { SELL_PLOT } from "@/constants/page.routes";
import { EPropertyType } from "@/enums/enums";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const { PLOT, HOUSE } = EPropertyType;

export const metadata: Metadata = {
  title: "Edit Property | Taal Mail",
};

interface Params {
  params: { plotHouse: string; id: string };
  searchParams: { query?: string; page?: string };
}

export default async function SellEditPage({ params, searchParams }: Params) {
  if (
    params.plotHouse.toLowerCase() === PLOT ||
    params.plotHouse.toLowerCase() === HOUSE
  ) {
  } else {
    redirect(SELL_PLOT);
  }

  const token = cookies().get("token");
  const id = params.id;

  const response = await fetch(`${MY_PROPERTY}?id=${id}`, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return (
    <Stack
      sx={{
        alignItems: "center",
        mt: { md: "6.5rem" },
        minHeight: "100vh",
      }}
    >
      {data && !data.error ? (
        <>
          <AddPropertyBanner id={params.id} />
          <AddPropertyDetails token={token} data={data.property} />
        </>
      ) : (
        <TextLg text={data.message} sx={{ mt: "3rem", textAlign: "center" }} />
      )}
    </Stack>
  );
}
