import BouncyCheckbox from "react-native-bouncy-checkbox";
import styled, { css } from 'styled-components/native';
import {Trash} from 'phosphor-react-native';

export const Container = styled.View`
  width: 327px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  min-height: 64px;
  max-height: 64px;
  margin-bottom: 8px;
  ${({ theme }) => css`
        font-size   : ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
        background-color: ${theme.COLORS.GRAY_500};
        border-color: ${theme.COLORS.GRAY_400};
    `};
  `;

  export const Title = styled.Text`
  width: 235px;
  ${({ theme }) => css`
        font-size   : ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
    `};
  `;

  export const CheckBox = styled(BouncyCheckbox).attrs(({theme}) => ({
    size: 17,
    fillColor: theme.COLORS.PURPLE_DARK,

  }))``;

  export const TrashIcon = styled(Trash).attrs(({theme}) => ({
    size: 20,
    color: theme.COLORS.GRAY_300,
  }))``;