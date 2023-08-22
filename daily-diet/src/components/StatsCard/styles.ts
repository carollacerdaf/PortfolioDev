import styled, { css } from 'styled-components/native';

export const Container = styled.View`
background-color: ${props => props.theme};
width: 327px;
height: 89px;
margin-top: 60px;
margin-bottom: 24px;
align-items : center;
justify-content : center;
padding: 16px;
`;

export const Title = styled.Text`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.XXL};
font-weight: ${theme.FONT_FAMILY.BOLD};
color: ${theme.COLORS.GRAY_1};
`}`;

export const Subtitle = styled.Text`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.MD};
font-weight: ${theme.FONT_FAMILY.BOLD};
color: ${theme.COLORS.GRAY_1};
`};`;