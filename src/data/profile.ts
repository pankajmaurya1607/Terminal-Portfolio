export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
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
  role: "Software Engineer",
  tagline: "Focused on backend systems, distributed systems, and full-stack development.",
  bio: "Computer Science graduate from MNNIT Allahabad interested in building scalable backend systems, reliable distributed architectures, and high-performance full-stack products. Experienced in asynchronous event-driven pipelines at Razorpay and competitive problem solving.",
  location: "Bangalore / Prayagraj, India",
  email: "pankajmaurya1607@gmail.com",
  links: {
    github: "https://github.com/pankajmaurya1607",
    linkedin: "https://www.linkedin.com/in/pankaj-maurya-a2a635281/",
    leetcode: "https://leetcode.com/u/pankajmaurya1607/",
    codeforces: "https://codeforces.com/profile/pankajmaurya1607",
  },
  statsSummary: {
    dsaCount: "1800+",
    experienceRole: "SDE Intern @ Razorpay",
    college: "MNNIT Allahabad",
    cpi: "8.12 / 10",
  },
};
