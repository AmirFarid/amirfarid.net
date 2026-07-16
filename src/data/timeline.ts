export interface ManualTimelineEntry {
  id: string;
  displayDate: string;
  datetime: string;
  sortDate: string;
  category: "Education" | "Mentoring" | "Service";
  text: string;
}

export const manualTimelineEntries: ManualTimelineEntry[] = [
  {
    id: "expected-ms-cs-mtu-2026",
    displayDate: "Fall 2026",
    datetime: "2026",
    sortDate: "2026-09-01",
    category: "Education",
    text: "Expected M.S. in Computer Science, Michigan Technological University",
  },
  {
    id: "reviewer-icc-2026",
    displayDate: "2026",
    datetime: "2026",
    sortDate: "2026-01-06",
    category: "Service",
    text: "Reviewer, IEEE International Conference on Communications (ICC), 2026",
  },
  {
    id: "reviewer-milcom-2026",
    displayDate: "2026",
    datetime: "2026",
    sortDate: "2026-01-05",
    category: "Service",
    text: "Reviewer, IEEE Military Communications Conference (MILCOM), 2026",
  },
  {
    id: "mentor-noah-strekow-mcnair-2026",
    displayDate: "2026",
    datetime: "2026",
    sortDate: "2026-01-04",
    category: "Mentoring",
    text: "Mentored Noah Strekow through the McNair Summer Research Program",
  },
  {
    id: "mentor-jada-hamilton-micup-2026",
    displayDate: "2026",
    datetime: "2026",
    sortDate: "2026-01-03",
    category: "Mentoring",
    text: "Mentored Jada Hamilton through the MICUP Mentor Program",
  },
  {
    id: "reviewer-iccc-2025",
    displayDate: "2025",
    datetime: "2025",
    sortDate: "2025-01-02",
    category: "Service",
    text: "Reviewer, ICCC 2025",
  },
  {
    id: "joined-mtu-spring-2025",
    displayDate: "Spring 2025",
    datetime: "2025",
    sortDate: "2025-01-01",
    category: "Education",
    text: "Joined Michigan Technological University",
  },
];
