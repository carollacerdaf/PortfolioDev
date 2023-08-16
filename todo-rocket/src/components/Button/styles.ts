import { PlusCircle } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
width: 52px;
height: 52px;
border-radius: 6px;
justify-content : center;
align-items : center;
margin-left: 12px;
background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
`;

export const Icon = styled(PlusCircle).attrs(({theme}) => ({
    size: 16,
    color: theme.COLORS.GRAY_100
}))`
`;