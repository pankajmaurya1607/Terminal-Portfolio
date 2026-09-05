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
  headline: "2000+ Problems Solved",
  subheadline:
    "Disciplined algorithmic problem solving across LeetCode, Codeforces, and GeeksforGeeks.",
  metrics: [
    {
      label: "Total Algorithmic Problems",
      value: "2000+",
      detail: "Solved across LeetCode, Codeforces, and GeeksforGeeks",
      highlight: true,
    },
    {
      label: "LeetCode Contest Rating",
      value: "Knight (1877)",
      detail: "Knight-tier badge with max rating of 1877",
      highlight: true,
    },
    {
      label: "Codeforces Rating",
      value: "1239",
      detail: "Pupil rank solving time-pressured competitive programming problems",
      highlight: false,
    },
    {
      label: "Academic Focus",
      value: "MNNIT CSE",
      detail: "B.Tech Computer Science & Engineering (CGPA: 8.12 / 10.0)",
      highlight: false,
    },
  ],
  platforms: [
    {
      name: "LeetCode",
      handle: "pankajmaurya1607",
      url: "https://leetcode.com/u/pankajmaurya1607/",
      description: "Data structures, algorithms, and weekly contest challenges",
      statBadge: "Knight • Rating: 1877",
    },
    {
      name: "Codeforces",
      handle: "pankajmaurya1607",
      url: "https://codeforces.com/profile/pankajmaurya1607",
      description: "Competitive programming contests, math, and greedy strategies",
      statBadge: "Pupil • Rating: 1239",
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
