import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
  `;

export const Title = styled(Text)`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
font-size: ${theme.FONT_SIZE.MD}px;
`};
`;


export const NumberContainer = styled.View`
border-radius: 999px;
align-items: center;
width : 25px;
height : 19px;
margin-left: 8px;
${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_400};
    `};
`;

export const Number = styled.Text`
     ${({ theme }) => css`
        font-size   : ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_200};
    `};
`;