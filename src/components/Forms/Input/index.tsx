import React from "react";
import { TextInputProps } from "react-native";

type Props = TextInputProps;

import { 
  Container,
} from "./style";

export function Input({ ...rest }: Props) {
  return (
    <Container { ...rest} />

    
  )
}