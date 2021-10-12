import { FC } from "react";
import { Variants } from "framer-motion";
import { TabsFormWrapper } from "../../../../infrastructure/components/TabsForm";
import { TextField } from "@material-ui/core";
import { RegisterOrganizationSectionProps, useRegisterOrganizationFormStyles } from "./RegisterOrganizationPage";

export const UniversityInfoSectionRegisterOrganization: FC<RegisterOrganizationSectionProps> = ({
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
                label="Uczelnia"
                { ...register("universityName") }/>
            <TextField
                variant={ "outlined" }
                className={ classes.formControl }
                label="Wydział rejestracji"
                helperText="Na którym wydziale została zajerestrowana wasza organizacja"
                { ...register("registerFaculty") }/>
            <TextField
                variant={ "outlined" }
                className={ classes.formControl }
                label="Zakres działań"
                { ...register("activitiesArea") }/>
            <TextField
                variant={ "outlined" }
                className={ classes.formControl }
                label="Obręb działań"
                helperText="Na jakich wydziałach działa organizacja"
                { ...register("facultiesArea") }/>

        </TabsFormWrapper>
    )
}