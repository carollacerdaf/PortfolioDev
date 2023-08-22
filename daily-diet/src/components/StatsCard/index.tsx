import { Container, Subtitle, Title } from "./styles";
import { useTheme } from 'styled-components/native'

type Props = {
    title: string;
    subtitle: string;
}

export function StatsCard({ title, subtitle }: Props) {
    const { COLORS } = useTheme();
    return (
        <Container theme={COLORS.GRAY_6}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    );
}