import { MY_INFO_AVATAR } from "@/constants/api.routes";
import { makeApiRequest } from "@/utils/servicesHelper";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const uploadUserAvatar = async (
  image: string,
  token?: RequestCookie,
) => {
  return await makeApiRequest({
    method: "PUT",
    url: MY_INFO_AVATAR,
    token,
    data: {
      image,
    },
  });
};
