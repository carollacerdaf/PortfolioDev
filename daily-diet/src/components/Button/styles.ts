import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native'
import { Plus } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
  background-color: ${theme.COLORS.GRAY_2};
  `}
  margin: 5px 0;
  border-radius: 6px;
  width: 327px;
  height: 50px;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  `;

export const Title = styled.Text`
  ${({ theme }) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.WHITE};
  `}`;

  export const Icon = styled(Plus).attrs(({theme}) => ({
    size: 14,
    color: theme.COLORS.WHITE,
    weight: 'regular'
  }))`
  margin-right: 4px;
  `;