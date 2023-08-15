import styled, { css } from 'styled-components/native';

export const Container = styled.TextInput`
    border-radius: 6px;
    border-width: 1px;
    min-height: 54px;
    max-height: 54px;
    width: 270px;
    padding: 16px;
    ${({ theme }) => css`
        font-size   : ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
        background-color: ${theme.COLORS.GRAY_500};
        border-color: ${theme.COLORS.GRAY_700};
    `};
`;