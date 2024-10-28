"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import TextMd from "@/components/common/Text/TextMd";
import { CrossWhiteIcon } from "@/constants/images.routes";
import { IProperty } from "@/interfaces/IProperty";
import Image from "next/image";

interface Props {
  val: IProperty;
}

const MyBid = ({ val }: Props) => {
  return (
    <PropertyCard property={val}>
      <TextMd
        text={`Bid: PKR 1.9 Crore`}
        sx={{
          paddingX: "1.94rem",
          color: "var(--text-black)",
          mb: "1.75rem",
        }}
      />
      <FilledButton
        onClick={(e) => e.preventDefault()}
        text="Cancel Bid"
        startIcon={
          <Image
            priority
            src={CrossWhiteIcon}
            alt={"close icon"}
            width={40}
            height={40}
          />
        }
        sx={{
          alignSelf: "center",
          width: "10.625rem",
          height: "3.4375rem",
          padding: "0",
          mb: "1.56rem",
        }}
      />
    </PropertyCard>
  );
};

export default MyBid;
