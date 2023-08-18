import { Container, Title, Time, Divider, Status } from './styles'
import { Circle } from 'phosphor-react-native'

type Props = {
    time: string;
    food: string;
}

export function FoodCard({ time, food }: Props) {
    return (
        <Container>
            <Time>{time}</Time>
            <Divider>|</Divider>
            <Title>{food}</Title>
            <Status />
        </Container>
    );
}