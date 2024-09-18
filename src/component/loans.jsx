import { LOANS } from "../constant";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-violet-400"
      >
        LOANS
      </motion.h1>
      <div>
        {LOANS.map((loan, index) => (
          <a
            key={index}
            href={loan.url} // Project URL added here
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={loan.logo}
                width={225}
                height={200}
                alt={loan.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-center lg:text-left">
                {loan.title}
              </h6>
              <p className="mb-4 text-neutral-400 text-center lg:text-left">
                {loan.description}
              </p>
              
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;