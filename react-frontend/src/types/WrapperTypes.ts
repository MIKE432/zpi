import { FC } from "react";
import { BlurOptions, ModalOptions } from "../components/Wrappers";

export type WithBlur = (Component: any, blurOptions?: BlurOptions) => FC
export type WithModal = (Component: any, modalOptions?: ModalOptions) => FC

