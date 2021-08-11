import React, { FC } from 'react'
import { TextField, TextFieldProps } from "@material-ui/core";
import { CommonProps } from "@material-ui/core/OverridableComponent";

export const Input: FC<TextFieldProps> = ({...props}) => <TextField { ...props } id="outlined-basic" variant="outlined"/>

export const X: FC = ({}) => {
    return <div>dsaads</div>
}
