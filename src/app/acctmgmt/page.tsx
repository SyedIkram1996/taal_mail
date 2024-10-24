import AcctMgmt from "@/components/ui/AcctMgmt/AcctMgmt";

interface Props {
  searchParams: {
    mode: string;
    oobCode: string;
  };
}

export default function AcctmgmtPage({ searchParams }: Props) {
  return <AcctMgmt searchParams={searchParams} />;
}
