import { FC } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { RegisterOrganizationSectionProps, useRegisterOrganizationFormStyles } from "./RegisterOrganizationPage";
import { Variants } from "framer-motion";
import { TabsFormWrapper } from "../../../../infrastructure/components/TabsForm";

export const AboutOrganizationRegisterOrganizationSection: FC<RegisterOrganizationSectionProps> = ({
                                                                                                       isVisible,
                                                                                                       register,
                                                                                                       getValues
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
            display: "none",
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
                label="Nazwa organizacji"
                { ...register("organizationName") }/>
            <FormControl variant="outlined" className={ classes.formControl }>
                <InputLabel id="organization-type">Typ organizacji</InputLabel>
                <Select
                    defaultValue=""
                    label="Typ organizacji"
                    { ...register("organizationType") }>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Koło naukowe">Koło naukowe</MenuItem>
                    <MenuItem value="Agenda kultury">Agenda kultury</MenuItem>
                    <MenuItem value="Samorząd">Samorząd</MenuItem>
                </Select>
            </FormControl>
            <TextField
                variant={ "outlined" }
                className={ classes.formControl }
                label="E-mail organizacji"
                { ...register("organizationEmail") }
            />
            <TextField
                variant={ "outlined" }
                className={ classes.formControl }
                label="Opis"
                size={ "medium" }
                multiline={ true }
                rows={ 6 }
                { ...register("organizationAbout") }
            />
        </TabsFormWrapper>
    )
}