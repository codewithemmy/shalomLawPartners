import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="min-h-screen py-12 bg-white text-black">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-sky-400 mb-6"
          >
            Our Legal Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive legal solution(s) tailored to your specific needs and
            objectives.
          </motion.p>
        </section>

        {/* Services List */}
        <section className="mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col md:flex-row gap-8 items-center`}
            >
              <div className="md:w-1/3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-sky-400 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-sky-400 mr-2">✓</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-pink-400 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to discuss your legal needs?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with one of our
            experienced attorneys.
          </p>
          <a
            href="/contact"
            className="bg-white text-sky-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-300 transition inline-block"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Corporate Law",
    image: "/assets/images/common/7.jpg",
    description:
      "We provide comprehensive legal services to businesses of all sizes, from startups to established corporations. Our corporate practice helps clients navigate complex legal landscapes while achieving their business objectives.",
    details: [
      "Business formation and structuring",
      "Contract drafting and negotiation",
      "Mergers and acquisitions",
      "Corporate governance",
      "Regulatory compliance",
      "Insolvency",
    ],
  },
  {
    title: "Litigation",
    image: "/assets/images/common/8.jpg",
    description:
      "Our experienced litigators represent clients in state and federal courts, as well as in arbitration and mediation proceedings. We develop aggressive, cost-effective strategies to protect our clients' interests.",
    details: [
      "Commercial disputes",
      "Contract disputes",
      "Employment litigation",
      "Professional liability",
      "Appellate practice",
    ],
  },
  {
    title: "Real Estate Law",
    image: "/assets/images/common/9.jpg",
    description:
      "We guide clients through all aspects of real estate transactions and disputes, from residential purchases to complex commercial developments.",
    details: [
      "Purchase and sale agreements",
      "Leasing and landlord-tenant matters",
      "Zoning and land use",
      "Real estate financing",
      "Title disputes",
    ],
  },
  {
    title: "Employment Law",
    image: "/assets/images/common/10.jpg",
    description:
      "We advise both employers and employees on navigating the complex web of employment laws and regulations.",
    details: [
      "Employment contracts",
      "Discrimination claims",
      "Wage and hour compliance",
      "Workplace policies",
      "Severance agreements",
    ],
  },
];
