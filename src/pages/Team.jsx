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
    name: "CHRISTOPHER EHUMADU OKEKE, SAN.",
    role: "Partner",
    position: "Founding Partner",
    image: "/assets/images/team/barChris.jpg",
    bio: `Christopher Ehumadu Okeke, SAN., practicing law as Chris Okeke Esqr, is a Legal Practitioner, Notary Public and Economist. He is the Head and Managing Partner of Chris Okeke, SAN & Co. He is an alumni of the Rivers State University, Port Harcourt, Nigeria, where he earned a Bachelor's degree of laws in 1992. He was subsequently called to the Nigerian Bar in 1993.
He thereafter attended ESUT (Enugu State University of Technology), Business School, Enugu, Nigeria, where he earned a Post Graduate Diploma in Economics in 2022. 
In the past three decades, he has acquired an unbroken experience in such critical areas of the Nigerian law and practice such as Court-room Litigation in all the Appellate and Courts of record in Nigeria. He also served on Committees that reformed some important laws in Nigeria, including the Administration of Criminal Justice Act. This is in addition to being the official Biographer of the legendary late Honourable Justice Chukwudifu Akunne Oputa, CFR, D.Litt, K.t.C, SGG, Kt.CSS, KSM, a retired Justice of the Supreme Court of Nigeria of no mean repute.
`,
    education: "Rivers State University, Port Harcourt, Nigeria",
    contact: {
      email: "chris@chrisokeke.com",
      phone: "0803 201 2944",
    },
  },
  {
    name: "NKWOCHA CHIDI UZOMA ESQR.",
    role: "Partner",
    position: "Litigation Partner",
    image: "/assets/images/team/chidi.jpg",
    bio: `Nkwocha Chidi Uzoma Esqr., is a Legal Practitioner and the Head of Chambers of the Law Firm. He is one of the senior lawyers in the Litigation and Corporate Practice Department of the Firm. Before he joined the firm in 2006, he worked in  a reputable Law Firm - A.A. Brown & Co., in Port Harcourt, Rivers State.
Within these periods, he has acquired vast and valuable skills and experiences in areas such as Civil Litigations, Criminal matters as well as Corporate Practices, spanning over 15 years. He has represented both individual and corporate clients in diverse areas of law vide land matters, property and tenancy matters, recovery of debts, drafting of legal documents, matrimonial causes and labour related matters. He has also rendered legal opinions on several legal issues on Nigerian Laws.
He has an LL.B degree from Imo State University and B.L from the Nigerian Law School. He was called to the Nigerian Bar in 2002.
`,
    education: "B.L, Nigerian Law School",
    contact: {
      email: "chidi@chrisokeke.com",
      phone: "+234 805 611 1743",
    },
  },
  {
    name: "OKEKE GODSON CHUKWUDI LLM, B.L, LLB, DIP-IN-LAW",
    role: "Partner",
    position: "Litigation Partner",
    image: "/assets/images/common/6.jpg",
    bio: `Godson Chukwudi Okeke, Esq. is a Legal Practitioner. He is at present, one of the Senior Associates in the Law Firm of Chris Okeke, SAN & Co. He has made a remarkable contribution in the practice of law and legal knowledge. 
G. C. Okeke holds the following degrees, Masters-in-Law (LLM) and Bachelor of Law LLB from Lagos State University and Barrister at Law B.L from Nigerian Law School, Abuja. 
He has served in various capacities in law such as a one-time coordinator of team of lawyers and volunteers of Free Legal Services and Human Right Advocates to indigent citizens under the umbrella of REPLACE (Public Law Enforcement Centre) in collaboration with the National Human Right Commission in conjunction with International British Human Right Enforcement Organisation and many more. 
G. C. Okeke Esq is skilled in Advocacy, Solicitorship, Mediation, Arbitration and debt recovery. Other areas of his interest in law include litigations in areas of law such as Criminal, Civil, Property, Family, Matrimonial causes, Employment, Commercial and Maritime law. 
G. C. Okeke Esq. has contributed remarkably in the field of law assisting the indigent citizens, vulnerable citizens and the physically challenged persons in the enforcement of their legal rights.
`,
    education: "B.L, Nigerian Law School",
    contact: {
      email: "godson@chrisokeke.com",
      phone: "+1-555-100-1003",
    },
  },

  {
    name: "AMARACHI UCHECHI NJOKU, ESQR.",
    role: "Associate",
    position: "Litigation Partner",
    image: "/assets/images/team/bar-amara.jpg",
    bio: `Amarachi Uchechi Njoku, is a Legal Practitioner and a Senior Associate in the Firm.
She holds a Bachelor of Law Degree from Madonna University, Okija, Anambra State and a Barrister-At-Law from the Nigerian Law School was called to the Nigerian Bar in 2014. She thereafter proceeded to obtain Masters in Law from the University of Lagos, Akoka, Lagos State.
She is in the Firm’s Corporate Practice Unit and over the years, has provided Legal Advisory Services to various clients in several sectors of the economy.
Her areas of practice cut across Corporate and Private Business Transactions, Regulatory Compliance and Corporate Governance.
She is thorough and persistent in exceeding clients’ needs and achieving set goals and objectives
Her Professional Associations include the Nigerian Bar Association and the Institute of Chartered Secretaries and Administrators of Nigeria.
`,
    education: "B.L, Nigerian Law School",
    contact: {
      email: "amara@chrisokeke.com",
      phone: "+234 803 700 5869",
    },
  },
  {
    name: "VIVIAN EZINNE OKOROAFOR, ESQR (NEE EMEKAM)",
    role: "Associate",
    position: "Litigation Partner",
    image: "/assets/images/team/amara.jpg",
    bio: `Vivian Ezinne Okoroafor, Esqr is a dedicated and skilled legal practitioner with a robust background in Corporate Law, Property and Real Estate Management. 
She is in the Drafting, Property and Litigation Unit of the firm as she is very proficient in legal research, contract drafting and compliance management, with a keen eye to details and a strong analytical mindset. She is also experienced in conducting comprehensive legal litigation, implementing preventive measures to safeguard businesses. 
Over the years more so, she has acquired an excellent, communicative and negotiating skill with a proven ability to give legal advice on complex corporate matters.
Vivian obtained her LL.B degree from Madonna University, B.L from  Nigerian Law School, Abuja  and was subsequently called to the Nigerian Bar in 2017.`,
    education: "B.L, Nigerian Law School",
    contact: {
      email: "vivian@chrisokeke.com",
      phone: "+234 803 700 5869",
    },
  },
  // {
  //   name: "Robert Thompson",
  //   role: "Of Counsel",
  //   position: "Senior Counsel",
  //   image: "/assets/images/common/1.jpg",
  //   bio: "With 35 years of experience, Robert provides strategic counsel on complex legal matters and serves as a mentor to our junior attorneys.",
  //   education: "JD, University of Virginia School of Law",
  //   contact: {
  //     email: "robert@chrisokeke.com",
  //     phone: "+1-555-100-3001",
  //   },
  // },
];
