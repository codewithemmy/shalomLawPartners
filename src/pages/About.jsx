import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-sky-600 mb-6 text-center"
          >
            About Chris Okeke & Co.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-pink-600 max-w-3xl mx-auto text-center"
          >
            Delivering exceptional legal services with integrity and dedication
            since 1999.
          </motion.p>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-sky-600 mb-6">
                Our History
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 1999 by Chris Okeke, our firm began as a small
                practice specializing in corporate law. Over the years, we've
                grown into a respected full-service firm while maintaining our
                commitment to personalized client service.
              </p>
              <p className="text-gray-600 mb-4">
                In 2018, we became an affiliate of Shalom Law Partners, allowing
                us to offer our clients access to a broader network of legal
                expertise while retaining our boutique firm's attention to
                detail.
              </p>
              <p className="text-gray-600">
                Today, we serve clients across multiple states with a team of
                dedicated legal professionals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 md:h-96"
            >
              <img
                src="/assets/images/common/11.jpg"
                alt="Our law firm history"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-sky-200 opacity-20 rounded-lg"></div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-sky-600 mb-12 text-center"
          >
            Our Mission & Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-pink-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-sky-600 text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-sky-700">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Affiliate Section */}
        <section className="bg-sky-50 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-sky-600 mb-6">
              Affiliate of Shalom Law Partners
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="md:w-1/3 flex justify-center"
              >
                <img
                  src="/assets/images/common/10.jpg"
                  alt="Shalom Law Partners"
                  className="h-24 object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="md:w-2/3"
              >
                <p className="text-gray-600 mb-4">
                  As an affiliate of Shalom Law Partners, we combine the
                  resources and expertise of a large multi-lawyer firm with the
                  personalized attention of a boutique practice.
                </p>
                <p className="text-gray-600">
                  This unique relationship allows us to handle complex,
                  multi-jurisdictional matters while maintaining the close
                  client relationships that define our practice.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const values = [
  {
    icon: "⚖️",
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our dealings, ensuring our clients can trust our counsel completely.",
  },
  {
    icon: "🎯",
    title: "Excellence",
    description:
      "We strive for legal excellence in every case, combining deep expertise with meticulous attention to detail.",
  },
  {
    icon: "🤝",
    title: "Client Focus",
    description:
      "Your success is our priority. We listen carefully and tailor our approach to your unique needs and objectives.",
  },
];
