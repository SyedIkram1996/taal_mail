import { CONTACT_US } from "@/constants/api.routes";
import { makeApiRequest } from "@/utils/servicesHelper";

export const contactUs = (email: string, feedback: string) => {
  return makeApiRequest({
    method: "POST",
    url: CONTACT_US,
    data: {
      email,
      feedback,
    },
  });
};
