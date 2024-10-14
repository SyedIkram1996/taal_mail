"use client";

import IconText from "@/components/common/IconText";
import TextLg from "@/components/common/Text/TextLg";
import TextSm from "@/components/common/Text/TextSm";
import { rentSell } from "@/constants/filters";
import { Stack } from "@mui/material";
import { useState } from "react";

interface Props {
  title: string;
  desc: string;
}

const TitleDesc = ({ title, desc }: Props) => {
  return (
    <Stack direction={"row"} sx={{ alignItems: "center", gap: "0.62rem" }}>
      <TextLg
        text={title}
        sx={{ fontWeight: "400", color: "var(--text-black)" }}
      />
      <TextSm
        text={desc}
        sx={{ fontWeight: "400", color: "var(--spanish-gray)" }}
      />
    </Stack>
  );
};

const AddPropertyDetails = () => {
  const [propertyPurpose, setPropertyPurpose] = useState("");
  return (
    <Stack sx={{ pt: "2.38rem", px: "8.81rem" }}>
      <TitleDesc
        title="Purpose:"
        desc="What do you do to with your property?"
      />

      <Stack
        direction={"row"}
        sx={{
          flexWrap: "wrap",
          gap: "2.69rem",
          mt: "3.13rem",
        }}
      >
        {rentSell.map((val) => (
          <IconText
            onClick={() => setPropertyPurpose(val.value)}
            text={val.title}
            icon={val.icon}
            iconWidth={30}
            iconHeight={30}
            sxRow={{
              cursor: "pointer",
              gap: "0.63rem",
              borderRadius: "0.9375rem",
              padding: "0.75rem 1.69rem",
              boxShadow:
                propertyPurpose === val.value
                  ? "0px 0px 0px 4px var(--text-primary) inset"
                  : "0px 0px 0px 1px var(--spanish-gray) inset",
            }}
            sxText={{
              fontSize: "1.25rem",
              color: "var(--text-primary)",
            }}
          />
        ))}
      </Stack>

      <Stack sx={{ gap: "6.25rem", mt: "6.25rem" }}>
        <TitleDesc title="Property Type:" desc="Choose you property type." />

        <TitleDesc title="Dues:" desc="Are all your dues cleared?" />

        <TitleDesc
          title="Status:"
          desc="What is the status of your property?"
        />
        <TitleDesc
          title="City:"
          desc="Which city is your property located in?"
        />
        <TitleDesc
          title="Location:"
          desc="What is the location of your property?"
        />
        <TitleDesc title="Area:" desc="Wat is the size of your property?" />
        <TitleDesc
          title="Asking Price:"
          desc="How much do you want for your property?"
        />
        <TitleDesc
          title="No. of Bedrooms:"
          desc="How many bed rooms does your property have?"
        />
        <TitleDesc
          title="No. of Bathrooms:"
          desc="How many bathrooms does your property have?"
        />
        <TitleDesc
          title="Features:"
          desc="what features does yor property have?"
        />
        <TitleDesc
          title="Name of Property:"
          desc="Add the Title of your post."
        />
        <TitleDesc title="Description:" desc="Add any description required." />
        <TitleDesc
          title="Upload Images:"
          desc="what features does yor property have?"
        />
        <Stack>
          <TitleDesc title="Upload Allotment Letter:" desc="" />
          <TextLg
            text={"(Optional)"}
            sx={{ fontWeight: "400", color: "var(--text-black)" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AddPropertyDetails;
