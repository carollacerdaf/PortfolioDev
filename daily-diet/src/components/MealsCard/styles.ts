import styled, { css } from 'styled-components/native';

export const Container = styled.View`
background-color: ${props => props.theme};
width: 157.5px;
height: 107px;
margin-top: 60px;
align-items : center;
justify-content : center;
padding: 16px;
border-radius: 8px;
margin:4px;
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