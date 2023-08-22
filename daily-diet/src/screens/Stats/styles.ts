import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
    flex:1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 24px;
    margin-top: 50px;
`;

export const ContainerRow = styled.View`
flex-direction: row;
width: 100%;
`;