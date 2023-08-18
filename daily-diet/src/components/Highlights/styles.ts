import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  width: 327px;
  height: 102px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  `;

export const ContainerData = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.XXXL}px;
  color: ${theme.COLORS.GRAY_100};
`};`;

export const Subtitle = styled.Text`
${({ theme }) => css`
font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_200};
`};`;

export const Arrow = styled(TouchableOpacity)`
  margin-top: 4px;
  margin-left: 300px;
`;