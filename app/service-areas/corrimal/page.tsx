import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { getSuburb } from "@/lib/suburbs";

const suburb = getSuburb("corrimal");

export const metadata: Metadata = {
  title: suburb.metaTitle,
  description: suburb.metaDescription,
};

export default function CorrimalPage() {
  return <SuburbPage suburb={suburb} />;
}
