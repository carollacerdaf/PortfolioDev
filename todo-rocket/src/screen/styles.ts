import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-top: 70px;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    align-items: center;
    justify-content: center;
`;