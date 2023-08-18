import { SafeAreaView } from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex:1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 24px;
    margin-top: 50px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.LG}px;
  color: ${theme.COLORS.GRAY_1};
  margin-top: 24px;
  `}`;