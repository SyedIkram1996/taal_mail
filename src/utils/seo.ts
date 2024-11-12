import { EMAIL_TEMPLATE_LOGO, WEBSITE_URL } from "@/constants/environment";

export const WEBSITE_TITLE = "Taal Mail";
export const LAYOUT_OPEN_GRAPH = {
  url: WEBSITE_URL,
  type: "website",
  siteName: WEBSITE_TITLE,
  images: [
    {
      url: EMAIL_TEMPLATE_LOGO,
      width: 1200,
      height: 630,
      alt: "taal-mail",
    },
  ],
};

export const META_DATA = ({
  title = "Taal Mail",
  description = "Taal Mail",
}: {
  title: string;
  description: string;
}) => {
  return {
    title: title,
    description: description,
    openGraph: {
      title,
      description,
      url: WEBSITE_URL,
      type: "website",
      siteName: WEBSITE_TITLE,
      images: [
        {
          url: EMAIL_TEMPLATE_LOGO,
          width: 1200,
          height: 630,
          alt: "taal-mail",
        },
      ],
    },
  };
};
