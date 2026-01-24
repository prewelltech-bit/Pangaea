import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useRevealAnimation, staggerContainerVariants, getDirectionVariants } from '../../../../hooks/useRevealAnimation'
import "./Welcome.css";
import "./Welcome.css";

const Welcome = () => {
    const { ref, isInView } = useRevealAnimation(0.2);
    const [scrollY, setScrollY] = useState(0);
    return (
        <>
             <motion.section
                    className="welcome-section"
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainerVariants}
                  >
                <div className="welcome-overlay">
                    <motion.div 
                        className="welcome-card"
                        variants={staggerContainerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.h1 
                            className="welcome-h1"
                            variants={getDirectionVariants('down', 50)}
                        >
                            Welcome To Pangaea
                        </motion.h1>

                        <motion.h3 variants={getDirectionVariants('left', 40)}>Abroad Institute</motion.h3>
                        
                        <motion.p variants={getDirectionVariants('right', 40)}>
                            is a Dallas Fort Worth, Texas based global agency for student
                            advising, college preparation, and admission counseling. We advise
                            both international and domestic students to assist college and
                            university admission and recruitment teams with complete
                            application packages for evaluation and decision making.
                        </motion.p>

                        <motion.p variants={getDirectionVariants('left', 40)}>
                            Honesty, Integrity, and professional commitment are our company
                            philosophy. We exceed the expectation of our students, partners,
                            and educational institutions we partner with.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}

export default Welcome