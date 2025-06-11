import TeamCard from "../components/TeamCard";

export default function Team() {
  return (
    <div className="min-h-screen py-12 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-sky-500 mb-6">
            Our Legal Team
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Experienced attorneys dedicated to providing exceptional legal
            representation with personalized attention.
          </p>
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-sky-500 mb-8 border-b pb-2 border-sky-400">
            Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers
              .filter((member) => member.role === "Partner")
              .map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
          </div>
        </section>

        {/* Associates Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-sky-500 mb-8 border-b pb-2 border-sky-400">
            Associates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers
              .filter((member) => member.role === "Associate")
              .map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
          </div>
        </section>

        {/* Of Counsel Section */}
        <section>
          <h2 className="text-2xl font-bold text-sky-500 mb-8 border-b pb-2 border-sky-400">
            Of Counsel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers
              .filter((member) => member.role === "Of Counsel")
              .map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: "Chris Okeke",
    role: "Partner",
    position: "Founding Partner",
    image: "/assets/images/common/3.jpg",
    bio: "With over 20 years of experience in corporate law, Chris founded the firm in 1996. He specializes in mergers and acquisitions and corporate governance.",
    education: "JD, Harvard Law School",
    contact: {
      email: "chris@chrisokeke.com",
      phone: "0803 201 2944",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Partner",
    position: "Litigation Partner",
    image: "/assets/images/common/4.jpg",
    bio: "Sarah leads our litigation practice with a focus on complex commercial disputes. She has successfully argued cases before state and federal appellate courts.",
    education: "JD, Yale Law School",
    contact: {
      email: "sarah@chrisokeke.com",
      phone: "+1-555-100-1002",
    },
  },
  {
    name: "Michael Chen",
    role: "Partner",
    position: "Real Estate Partner",
    image: "/assets/images/common/6.jpg",
    bio: "Michael's real estate practice encompasses transactional work and dispute resolution for both residential and commercial properties.",
    education: "JD, Stanford Law School",
    contact: {
      email: "michael@chrisokeke.com",
      phone: "+1-555-100-1003",
    },
  },
  {
    name: "David Rodriguez",
    role: "Associate",
    position: "Corporate Associate",
    image: "/assets/images/common/5.jpg",
    bio: "David focuses on corporate transactions and securities law, assisting clients with financing rounds and regulatory compliance.",
    education: "JD, Columbia Law School",
    contact: {
      email: "david@chrisokeke.com",
      phone: "+1-555-100-2001",
    },
  },
  {
    name: "Emily Wilson",
    role: "Associate",
    position: "Litigation Associate",
    image: "/assets/images/common/2.jpg",
    bio: "Emily handles a variety of civil litigation matters with particular expertise in employment disputes and contract claims.",
    education: "JD, University of Chicago Law School",
    contact: {
      email: "emily@chrisokeke.com",
      phone: "+1-555-100-2002",
    },
  },
  {
    name: "Robert Thompson",
    role: "Of Counsel",
    position: "Senior Counsel",
    image: "/assets/images/common/1.jpg",
    bio: "With 35 years of experience, Robert provides strategic counsel on complex legal matters and serves as a mentor to our junior attorneys.",
    education: "JD, University of Virginia School of Law",
    contact: {
      email: "robert@chrisokeke.com",
      phone: "+1-555-100-3001",
    },
  },
];
