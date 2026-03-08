import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, DollarSign } from "lucide-react";

const awards = [
  { year: "2023", title: "Best Paper Award", org: "ACL 2023" },
  { year: "2021", title: "Distinguished Researcher Award", org: "University of Technology" },
  { year: "2018", title: "Young Scientist Award", org: "Association for Computational Linguistics" },
];

const grants = [
  { year: "2022–2025", title: "Neural Approaches to Multilingual NLP", amount: "$850,000", org: "National Science Foundation" },
  { year: "2020–2023", title: "Conversational AI for Healthcare", amount: "$420,000", org: "National Institutes of Health" },
  { year: "2018–2021", title: "Low-Resource Language Translation", amount: "$350,000", org: "DARPA" },
];

export function HeroSection() {
  return (
    <section id="about" className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <Avatar className="w-48 h-48 md:w-56 md:h-56 border-4 border-border shadow-lg">
                <AvatarImage
                  src="/placeholder.svg"
                  alt="Dr. Jane Smith"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-serif bg-secondary text-secondary-foreground">
                  JS
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Bio Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                Dr. Jane Smith
              </h1>
              <p className="text-xl text-accent font-medium mb-4">
                Associate Professor of Computer Science
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                University of Technology • Department of Computer Science
              </p>
              <div className="w-16 h-1 bg-accent mx-auto md:mx-0 mb-6" />
              <p className="text-foreground/90 leading-relaxed max-w-2xl">
                I am an Associate Professor specializing in artificial intelligence and machine learning,
                with a focus on natural language processing and human-computer interaction. My research
                aims to develop intelligent systems that can understand and generate human language,
                making technology more accessible and intuitive for everyone. I have published over 50
                peer-reviewed papers and received multiple grants from leading research foundations.
              </p>
            </div>
          </div>

          {/* Awards & Grants */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Awards */}
            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-serif font-semibold text-primary">Awards & Honors</h3>
              </div>
              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-sm font-medium text-accent whitespace-nowrap">{award.year}</span>
                    <div>
                      <p className="font-medium text-foreground">{award.title}</p>
                      <p className="text-sm text-muted-foreground">{award.org}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grants */}
            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-serif font-semibold text-primary">Research Grants</h3>
              </div>
              <ul className="space-y-3">
                {grants.map((grant, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-sm font-medium text-accent whitespace-nowrap">{grant.year}</span>
                    <div>
                      <p className="font-medium text-foreground">{grant.title}</p>
                      <p className="text-sm text-muted-foreground">{grant.org} • {grant.amount}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
