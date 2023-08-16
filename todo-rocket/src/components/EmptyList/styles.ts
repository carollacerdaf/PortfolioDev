import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 48px;
  `;

export const Title = styled.Text`
     ${({ theme }) => css`
        font-size   : ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_300};
    `};
`;

export const Subtitle = styled.Text`
     ${({ theme }) => css`
        font-size   : ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    `};
`;