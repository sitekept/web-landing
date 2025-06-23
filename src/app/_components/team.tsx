import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Chen",
    role: "Lead Developer",
    bio: "Full-stack wizard with 8+ years building scalable web applications. Next.js expert.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    bio: "Design systems architect who creates beautiful, conversion-focused user experiences.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Mike Rodriguez",
    role: "DevOps Engineer",
    bio: "Cloud infrastructure specialist ensuring your sites are fast, secure, and always online.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Emma Thompson",
    role: "Project Manager",
    bio: "Agile expert who keeps projects on track and ensures seamless client communication.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function Team() {
  return (
    <section id="team" className="bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Seasoned professionals with a track record of delivering exceptional
            results for clients across industries.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-0 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6 text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                />
                <h3 className="mb-1 text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="mb-3 text-sm font-medium text-blue-600">
                  {member.role}
                </p>
                <p className="mb-4 text-sm text-slate-600">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.github}
                    className="text-slate-400 transition-colors hover:text-slate-600"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-slate-400 transition-colors hover:text-slate-600"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-slate-400 transition-colors hover:text-slate-600"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              Why Experience Matters
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-slate-600">
                  Years Combined Experience
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
