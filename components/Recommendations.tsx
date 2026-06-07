const recommendations = [
  {
    text: "Bryl was the most talented software engineer I've mentored in a long time. He's a fast learner, and he always makes sure to deliver quality output given a period of time. He is also very keen on learning new technologies, and I find him to be objectively passionate about tech. He's definitely someone you want on your team.",
    name: "Cris Lawrence Adrian Militante",
    title: "ICT Director at GCM",
  },
  {
    text: "Intelligent software engineer. Bryl takes lead during software development and can handle and manage teams well.",
    name: "Ken Gorro",
    title: "Senior Developer at Fullscale",
  },
  {
    text: "Was an intern at PocketDevs and sir Bryl was our main trainer to the different technologies we use in the company such as Laravel, Bootstrap, etc. With his guidance, I was equipped with some of the current trends and insights in the tech industry which enabled me to be part of my current company.",
    name: "Patrick Vince Velasco",
    title: "Software Engineer, YNS",
  },
  {
    text: "Sir Bryl's teaching approach is incredibly hands-on, and the projects significantly accelerated my learning process in web development. I am truly grateful for the mentorship I received from him during my web development internship.",
    name: "John Edmerson Pizarra",
    title: "Jr. Full-stack Developer, PocketDevs",
  },
  {
    text: "Bryl is a good student and software developer who shows professionalism and dedication in whatever he does. His software projects during his academic years are up to standard and is being used by the university for some of its operations. Bryl also demonstrated social awareness and leadership skills through his involvement as an officer/member in various student and special interest groups in the university.",
    name: "Glenn Pepito",
    title: "Professor at University of San Carlos",
  },
  {
    text: "Bryl and I worked together in various projects where I saw his tenacity to deliver what he promised to do. He is able to meet deadlines without sacrificing the quality of the output, and at times even exceeding the set goals. His dedication to pursue his craft and his mindset as a lifelong learner allow him to be easily mentored, as he is eager to learn new technologies. His enthusiasm at new opportunities makes him a great asset because he does everything with renewed energy and finds ways to optimize existing processes. Bryl sure is a great addition to any team!",
    name: "Van Honoridez",
    title: "Application Development Analyst at Accenture",
  },
  {
    text: "The exposure to real projects and guidance from Sir Bryl was instrumental in my growth as a web developer. His approach to teaching and mentoring helped me to understand the intricacies of web development, and I'm now working at Quickway Holdings Inc., applying the skills I learned.",
    name: "Zinia Ma. Consuelo R. Trinidad",
    title: "Web Developer, Quickway Holdings Inc.",
  },
  {
    text: "I was just a K-12 undergrad with zero coding experience, but with the guidance of Sir Bryl, I was able to learn and grow exponentially. His mentorship helped me to develop a strong foundation in programming, and I'm now a full-stack developer working freelance projects.",
    name: "Jomar Neri",
    title: "Full-stack Developer, Freelance",
  },
];

export default function Recommendations() {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-3 space-y-2 group overflow-hidden animate-fade-in animation-delay-400">
      <h2 className="text-lg font-bold">Recommendations</h2>
      <div className="relative h-[160px]">
        {recommendations.map((rec, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-1000"
            style={{
              opacity: 0,
              visibility: "hidden",
              animation: `fade-slide-show 64s linear infinite ${i * 8}s`,
              animationFillMode: "forwards",
            }}
          >
            <p className="text-[13px] leading-relaxed text-foreground/80 font-serif line-clamp-4">
              &ldquo;{rec.text}&rdquo;
            </p>
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-xs font-semibold font-sans">{rec.name}</p>
              <p className="text-xs text-foreground/50 font-sans">{rec.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 mt-4">
        {recommendations.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-500"
            style={{
              backgroundColor: "var(--foreground)",
              opacity: 0.2,
              animation: `dot-fade 64s linear infinite ${i * 8}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
