import Toast, { toastTypes } from "@/components/common/ReactHotToaster/Toast";

export const toastError = (description: string) => {
  return Toast({ type: toastTypes.error, description });
};
export const toastSuccess = (description: string) => {
  return Toast({ type: toastTypes.success, description });
};

export const toastSuccessLink = (
  description: string,
  link: string,
  linkHref: string,
) => {
  return Toast({ type: toastTypes.success, description, link, linkHref });
};
