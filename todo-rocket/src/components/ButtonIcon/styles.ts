import styled, {css} from 'styled-components/native';

export const AddButton = styled.Button`
    border-radius: 6;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        background-color: ${theme.COLORS.BLUE_DARK};
    `};
`;