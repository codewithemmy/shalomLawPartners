import { motion } from "framer-motion";

export default function TeamCard({ member }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-pink-100"
    >
      {/* Member Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover"
      />

      {/* Member Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-sky-600">{member.name}</h3>
          <span className="bg-pink-400 text-white text-xs px-2 py-1 rounded shadow-sm">
            {member.role}
          </span>
        </div>

        <p className="text-pink-500 font-medium mb-2">{member.position}</p>
        <p className="text-gray-700 mb-3">{member.bio}</p>
        <p className="text-sm text-sky-500 mb-4">{member.education}</p>

        <div className="border-t border-sky-100 pt-4">
          <h4 className="text-sm font-semibold text-pink-600 mb-2">Contact:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-sky-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {member.contact.email}
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-sky-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {member.contact.phone}
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
