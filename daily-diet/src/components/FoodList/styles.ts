import styled, {css} from 'styled-components/native';

export const Container = styled.View``;

export const DayOfTheWeek = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
font-size: ${theme.FONT_SIZE.XL}px;
color: ${theme.COLORS.GRAY_1};
margin-top: 24px;
margin-bottom: 12px;
`}
`;