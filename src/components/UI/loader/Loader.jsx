import { AnimatePresence, motion } from 'framer-motion';
import cl from './Loader.module.css';

const item = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Loader = () => {
  let itemDelay = -0.5;

  return (
    <AnimatePresence>
      <div className={cl.container}>
        {[1, 2, 3].map((i) => {
          itemDelay += 0.5;

          return (
            <motion.div
              key={i}
              variants={item}
              animate="hidden"
              initial="visible"
              className={cl.item}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                delay: itemDelay,
                duration: 1,
              }}
            />
          );
        })}
      </div>
    </AnimatePresence>
  );
};

export default Loader;
