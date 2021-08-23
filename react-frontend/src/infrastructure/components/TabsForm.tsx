import { FC } from "react";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";

export interface TabsFromProps {
    variants: Variants,
    isVisible: boolean,
    transition: Transition,
    initial: string,
    animate: string
}


export const TabsFormWrapper: FC<TabsFromProps> = ({ isVisible, animate, transition, variants, initial, children }) => {
    return (
        <AnimatePresence>
            {
                <motion.div
                    variants={ variants }
                    transition={ transition }
                    initial={ initial }
                    animate={ animate }>
                    { children }
                </motion.div>
            }
        </AnimatePresence>
    )
}