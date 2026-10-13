"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { FilterBar } from "@/components/FilterBar";
import { GridGroup } from "@/components/GridGroup";
import { GroupCard } from "@/components/GroupCard";
import { SearchField } from "@/components/SearchField";

const regions = [
  { value: "all", label: "All Regions" },
  { value: "bc", label: "British Columbia" },
  { value: "prairies", label: "Prairies" },
  { value: "on", label: "Ontario" },
  { value: "qc", label: "Québec" },
  { value: "atlantic", label: "Atlantic" },
];

const groups = [
  {
    regionKey: "on",
    region: "Ontario",
    name: "WordPress Toronto",
    description:
      "Canada's largest WordPress community. Monthly presentations, workshops, and networking for all skill levels.",
    members: 1200,
    cadence: "Monthly",
  },
  {
    regionKey: "bc",
    region: "British Columbia",
    name: "WordPress Vancouver",
    description:
      "A vibrant Pacific coast community for WordPress enthusiasts, from freelancers to agency teams.",
    members: 640,
    cadence: "Bi-monthly",
  },
  {
    regionKey: "qc",
    region: "Québec",
    name: "WordPress Montréal",
    description:
      "Bilingual group welcoming developers and designers from across the greater Montréal area.",
    members: 480,
    cadence: "Monthly",
  },
  {
    regionKey: "prairies",
    region: "Prairies",
    name: "WordPress Calgary",
    description:
      "Building community across southern Alberta. A welcoming space for WordPress users at any level.",
    members: 210,
    cadence: "Quarterly",
  },
  {
    regionKey: "atlantic",
    region: "Atlantic Canada",
    name: "WordPress Halifax",
    description:
      "Atlantic Canada's WordPress hub. Friendly talks, code sprints, and community events in Nova Scotia.",
    members: 145,
    cadence: "Bi-monthly",
  },
  {
    regionKey: "on",
    region: "Ontario",
    name: "WordPress Ottawa",
    description:
      "Canada's capital city community. Bringing together government, agency, and freelance WordPress talent.",
    members: 320,
    cadence: "Monthly",
  },
];

// The client-side filtering pattern the homepage will reuse: FilterBar and SearchField are
// controlled, and this wrapper owns the state and filters the list.
export function FilterDemo() {
  const [region, setRegion] = useState("all");
  const [query, setQuery] = useState("");

  const search = query.trim().toLowerCase();
  const visible = groups.filter(
    (group) =>
      (region === "all" || group.regionKey === region) &&
      group.name.toLowerCase().includes(search),
  );

  return (
    <>
      <SearchField
        label="Search groups by city"
        placeholder="Search your city..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <FilterBar label="Region" options={regions} value={region} onChange={setRegion} />
      <GridGroup columns={3} dividers="all">
        {visible.map(({ regionKey, ...group }) => (
          <GroupCard key={group.name} href={`#${regionKey}`} {...group} />
        ))}
      </GridGroup>
      <Eyebrow aria-live="polite">
        Showing {visible.length} of {groups.length} groups
      </Eyebrow>
    </>
  );
}
