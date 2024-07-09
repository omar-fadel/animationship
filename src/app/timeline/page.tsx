import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("@/components/Timeline"), {
  ssr: false,
});
const LenisSmooth = dynamic(() => import("@/components/LenisSmooth"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Timeline />
      <LenisSmooth />
    </>
  );
}
