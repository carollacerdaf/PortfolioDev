import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: 'row';
  align-items: center;
  justify-content: center;

  `;

export const TempTitle = styled.Text`
      color: ${({ theme }) => theme.COLORS.PURPLE};
  `;