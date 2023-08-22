import { Container, Subtitle, Title } from "./styles";
import { useTheme } from 'styled-components/native'

type Props = {
    title: string;
    subtitle: string;
}

export function MealsCard({ title, subtitle }: Props) {
    const { COLORS } = useTheme();
    return (
        <Container theme={COLORS.GREEN_LIGHT}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    );
}