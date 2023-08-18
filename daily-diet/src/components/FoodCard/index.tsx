import { Container, Title, Time, Divider, Status, StatusIconTypeStyleProps } from './styles'

type Props = {
    time: string;
    food: string;
    type?: StatusIconTypeStyleProps;
}

export function FoodCard({ time, food, type = 'DIETA' }: Props) {
    return (
        <Container>
            <Time>{time}</Time>
            <Divider>|</Divider>
            <Title>{food}</Title>
            <Status type={type} />
        </Container>
    );
}