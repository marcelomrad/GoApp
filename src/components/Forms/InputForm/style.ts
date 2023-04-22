import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import { FieldErrors } from "react-hook-form/dist/types";



export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.attention};
  margin: 7px 0;
`;