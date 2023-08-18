import styled, { css } from 'styled-components/native';
import { Circle } from 'phosphor-react-native'

export const Container = styled.View`
${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_5};
`};
  width: 327px;
  border-radius: 6px;
  border-width: 1px;
  padding: 14px;
  margin-bottom: 14px;
  flex-direction: row;
  align-items: center;`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    width: 217px;
  `}`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}`;

export const Divider = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_4};
    padding: 12px;
  `;

export const Status = styled(Circle).attrs(({ theme }) => ({
    size: 14,
    color: theme.COLORS.RED_MID,
    weight: 'fill'
}))`
`;