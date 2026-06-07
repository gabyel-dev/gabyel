import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  const certifications: { href: string; title: string; issuer: string }[] = [];

  return (
    <>
      <main className="animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Profile Header */}
          <section className="mb-8 animate-fade-in">
            <div className="flex items-center gap-4 md:gap-6">
              <img
                alt="Bryl Lim"
                width={160}
                height={160}
                className=" w-40 h-40 md:w-40 md:h-40 object-cover flex-shrink-0"
                src="https://avatars.githubusercontent.com/u/184721807?v=4"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h1 className="text-lg md:text-2xl font-bold truncate">
                      Gabriel Guban
                    </h1>
                    <svg
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 flex-shrink-0"
                      aria-label="Verified user"
                    >
                      <path
                        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                        fill="#1d9bf0"
                      />
                    </svg>
                  </div>
                  <ModeToggle />
                </div>
                <p className="text-xs md:text-sm text-foreground/70 mt-0.5 flex items-center gap-1">
                  <svg
                    className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="truncate">Metro Manila, Philippines</span>
                </p>
                <div className="flex items-center justify-between mt-1.5 md:mt-2">
                  <p className="text-[10px] md:text-base">
                    AI <span className="text-gray-400">\</span> Web Developer
                  </p>
                </div>
                <div className="space-y-2 mt-3 md:mt-4">
                  <div className="flex gap-2">
                    <a
                      className="inline-flex h-7 md:h-8 items-center bg-foreground px-2.5 md:px-4 text-[8px] md:text-xs font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
                      href="/gab-guban-cv.pdf"
                      download
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="text-left">Download CV</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                    <a
                      className="hidden md:inline-flex h-7 md:h-8 items-center  px-2.5 md:px-4 text-[8px] md:text-xs font-medium transition-all duration-200 hover:bg-black/2 hover:-translate-y-0.5 hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
                      href="mailto:gabguban7777@gmail.com"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-left">Send Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
            <About />

            {/* Right Sidebar */}
            <div className="col-span-1 md:col-span-2 md:row-span-3 space-y-2 animate-fade-in animation-delay-200">
              {/* Quick Info */}
              <div className="bento-card p-4 space-y-3 group">
                <h2 className="text-lg font-bold">Quick Info</h2>
                <div className="space-y-2.5">
                  <InfoRow label="Location" value="Metro Manila, Philippines" />
                  <InfoRow label="Focus" value="AI / Full-Stack " />
                  <InfoRow label="Availability" value="Open to opportunities" />
                  <InfoRow label="Stack" value="JavaScript" />
                  <InfoRow label="Response" value="Within 24 hours" />
                </div>
              </div>

              {/* Current Focus */}
              <div className="bento-card p-4 space-y-3 group">
                <h2 className="text-lg font-bold">Currently</h2>
                <ul className="space-y-2.5">
                  {[
                    "Building AI-powered applications",
                    "Exploring generative AI workflows",
                    "Creating Websites",
                  ].map((g) => (
                    <li
                      key={g}
                      className="flex items-start gap-2  text-sm text-foreground/70"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5  bg-black shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              <ExperienceTimeline />
            </div>

            <TechStack />
            <Projects />

            {/* Recent Certifications */}
            <div className="bento-card p-4 space-y-2 group animate-fade-in animation-delay-400 col-span-1 md:col-span-3">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-lg font-bold">Recent Certifications</h2>
              </div>
              {certifications.length > 0 ? (
                <div className="space-y-1.5">
                  {certifications.map((cert) => (
                    <CertItem key={cert.title} {...cert} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-foreground/70">No current certifications yet.</p>
              )}
            </div>

            {/* Contact / Social */}
            <div className="bento-card p-4 space-y-4 group animate-fade-in animation-delay-500 col-span-1 md:col-span-3">
              {/* Social Links */}
              <div className="space-y-1.5">
                <p className="text-xs text-foreground/70 font-medium mb-2">
                  Social Links
                </p>
                <div className="grid grid-cols-1 gap-1">
                  <SocialLink
                    href="https://linkedin.com/in/gabyel"
                    label="LinkedIn"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </SocialLink>
                  <SocialLink
                    href="https://github.com/gabyel-dev"
                    label="GitHub"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </SocialLink>
                  <SocialLink
                    href="https://www.instagram.com/_grbley/"
                    label="Instagram"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </SocialLink>

                  <SocialLink
                    href="https://web.facebook.com/gab.guban"
                    label="Facebook"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </SocialLink>
                </div>
              </div>
            </div>

            {/* Currently Reading / Learning */}
            <div className="bento-card p-4 space-y-3 group animate-fade-in animation-delay-600 col-span-1 md:col-span-3">
              <h2 className="text-lg font-bold">Currently Reading</h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <div>
                    <p className="font-medium text-foreground/80">Designing Data-Intensive Applications</p>
                    <p className="text-[11px]">Martin Kleppmann</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <div>
                    <p className="font-medium text-foreground/80">The Pragmatic Programmer</p>
                    <p className="text-[11px]">Andrew Hunt & David Thomas</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-foreground/50">{label}</span>
      <span className="font-medium text-foreground/80">{value}</span>
    </div>
  );
}

function CertItem({ href, title, issuer }: { href: string; title: string; issuer: string }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="block p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      href={href}
    >
      <h3 className="text-xs font-semibold">{title}</h3>
      <p className="text-[11px] text-foreground/70">{issuer}</p>
    </a>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-1.5  shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] hover:bg-foreground/10 hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 group"
      aria-label={`Visit ${label} profile`}
      title={`Visit ${label} profile`}
      href={href}
    >
      <div className="text-foreground transition-colors">
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {children}
        </svg>
      </div>
      <p className="text-[10px] font-medium text-foreground transition-colors">
        {label}
      </p>
    </a>
  );
}

function ContactItem({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  const LinkOrAnchor = external ? "a" : "a";
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};

  return (
    <LinkOrAnchor
      {...linkProps}
      className="group p-1.5  shadow-[0_1px_2px_rgba(0,0,0,0.03),0_1px_1px_rgba(0,0,0,0.04)] hover:bg-foreground/10 hover:shadow-[0_3px_10px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 block"
      href={href}
    >
      <div className="flex items-center gap-1 mb-0.5">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
        <p className="text-[9px] text-foreground/70 font-medium">{label}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-medium text-foreground  transition-colors">
          {value}
        </span>
        {external && (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </div>
    </LinkOrAnchor>
  );
}
