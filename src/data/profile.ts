export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  phone: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    leetcode: string;
    codeforces: string;
  };
  statsSummary: {
    dsaCount: string;
    experienceRole: string;
    college: string;
    cpi: string;
  };
}

export const profileData: ProfileData = {
  name: "Pankaj Kumar Maurya",
  role: "Software Development Engineer",
  tagline: "Focused on backend systems, distributed systems, and enterprise RAG platforms.",
  bio: "Computer Science and Engineering graduate from MNNIT Allahabad. Experienced in architecting high-throughput Kafka-based asynchronous pipelines, distributed idempotency, and financial services at Razorpay. Solved 2000+ algorithmic problems across LeetCode (Knight, 1877 rating), Codeforces, and GFG.",
  location: "Bengaluru, India",
  phone: "+91-9118325180",
  email: "pankajmaurya01729@gmail.com",
  links: {
    github: "https://github.com/pankajmaurya1607",
    linkedin: "https://www.linkedin.com/in/pankaj-maurya-a2a635281/",
    leetcode: "https://leetcode.com/u/pankajmaurya1607/",
    codeforces: "https://codeforces.com/profile/pankajmaurya1607",
  },
  statsSummary: {
    dsaCount: "2000+",
    experienceRole: "SDE Intern @ Razorpay",
    college: "MNNIT Allahabad",
    cpi: "8.12 / 10.0",
  },
};
