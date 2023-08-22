import { ArrowLeft } from 'phosphor-react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const ProfileImage = styled.Image`
    width: 40px;
    height: 40px;
    margin-right: 14px;
`;

export const ContainerFilled = styled.View`
background-color: ${({theme}) => theme.COLORS.RED_DARK}
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs(({theme}) => ({
    color: theme.COLORS.RED_DARK,
    size: 32,
}))`

`