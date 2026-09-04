export interface CodingMetric {
  label: string;
  value: string;
  detail: string;
  highlight?: boolean;
}

export interface PlatformLink {
  name: string;
  handle: string;
  url: string;
  description: string;
  statBadge: string;
}

export interface CodingData {
  headline: string;
  subheadline: string;
  metrics: CodingMetric[];
  platforms: PlatformLink[];
}

export const codingData: CodingData = {
  headline: "1800+ Problems Solved",
  subheadline:
    "Disciplined algorithmic practice across arrays, graphs, trees, dynamic programming, and systems thinking.",
  metrics: [
    {
      label: "Total Algorithmic Problems",
      value: "1800+",
      detail: "Solved across LeetCode, Codeforces, GFG, and contest environments",
      highlight: true,
    },
    {
      label: "LeetCode Contest Rating",
      value: "1877",
      detail: "Consistent contest participation and knight-tier problem solving",
      highlight: true,
    },
    {
      label: "Codeforces Rating",
      value: "1239",
      detail: "Pupil rank solving time-pressured mathematical and graph problems",
      highlight: false,
    },
    {
      label: "Academic Focus",
      value: "MNNIT CSE",
      detail: "Rigorous theoretical CS coursework and systems foundations",
      highlight: false,
    },
  ],
  platforms: [
    {
      name: "LeetCode",
      handle: "pankajmaurya1607",
      url: "https://leetcode.com/u/pankajmaurya1607/",
      description: "Data structures, algorithms, and weekly contest challenges",
      statBadge: "Rating: 1877",
    },
    {
      name: "Codeforces",
      handle: "pankajmaurya1607",
      url: "https://codeforces.com/profile/pankajmaurya1607",
      description: "Competitive programming contests, math, and greedy strategies",
      statBadge: "Rating: 1239",
    },
    {
      name: "GeeksforGeeks",
      handle: "pankajmaurya1607",
      url: "https://www.geeksforgeeks.org/user/pankajmaurya1607/",
      description: "Foundational DSA, practice problems, and core CS articles",
      statBadge: "Active Contributor",
    },
    {
      name: "GitHub",
      handle: "pankajmaurya1607",
      url: "https://github.com/pankajmaurya1607",
      description: "Open-source implementations, system design, and repositories",
      statBadge: "Repositories",
    },
  ],
};
