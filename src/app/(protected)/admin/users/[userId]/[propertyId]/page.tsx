import TextLg from "@/components/common/Text/TextLg";
import AdminHeader from "@/components/ui/Admin/AdminHeader";
import PropertyDetails from "@/components/ui/Admin/Users/User/PropertyDetails/PropertyDetails";
import { USER_PROPERTY } from "@/constants/api.routes";
import { ADMIN_USERS_PAGE } from "@/constants/page.routes";
import { formatAmountToPKR } from "@/utils/maths";
import { cookies } from "next/headers";

interface Params {
  params: { propertyId: string; userId: string };
}

export default async function UserPropertyPage({ params }: Params) {
  const token = cookies().get("token");

  const response = await fetch(`${USER_PROPERTY}?id=${params.propertyId}`, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return (
    <>
      <AdminHeader
        title={
          data && !data.error
            ? `${data.property.price.currency} ${formatAmountToPKR(Number(data.property.price.askingPrice))}`
            : ""
        }
        link={`${ADMIN_USERS_PAGE}/${params.userId}`}
      />
      {data && !data.error ? (
        <PropertyDetails property={data.property} />
      ) : (
        <TextLg text={data.message} sx={{ mt: "3rem", textAlign: "center" }} />
      )}
    </>
  );
}
