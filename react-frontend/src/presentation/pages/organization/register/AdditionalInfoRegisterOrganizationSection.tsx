import { FC } from "react";
import { RegisterOrganizationSectionProps, useRegisterOrganizationFormStyles } from "./RegisterOrganizationPage";
import { Variants } from "framer-motion";
import { TabsFormWrapper } from "../../../../infrastructure/components/TabsForm";
import { TextField } from "@material-ui/core";

export const AdditionalInfoRegisterOrganizationSection: FC<RegisterOrganizationSectionProps> = ({
                                                                                                    isVisible,
                                                                                                    register
                                                                                                }) => {
    const classes = useRegisterOrganizationFormStyles();

    const variants: Variants = {
        visible: {
            opacity: 1,
            display: "flex",
            flexDirection: "column",
        },
        hidden: {
            opacity: 0,
            display: "none"
        }
    }

    return (
        <TabsFormWrapper
            variants={ variants }
            transition={ { duration: .5 } }
            initial="hidden"
            animate={ isVisible ? "visible" : "hidden" }
            isVisible={ isVisible }>
            <TextField
                variant={ "outlined" }
                className={ classes.formControl }
                label="Opiekun"
                { ...register("careProvider") }/>

        </TabsFormWrapper>
    )
}