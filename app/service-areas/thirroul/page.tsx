import type { Metadata } from "next";
import SuburbPage from "@/components/SuburbPage";
import { getSuburb } from "@/lib/suburbs";

const suburb = getSuburb("thirroul");

export const metadata: Metadata = {
  title: suburb.metaTitle,
  description: suburb.metaDescription,
};

export default function ThirroulPage() {
  return <SuburbPage suburb={suburb} />;
}
