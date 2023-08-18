import { Container, Title, Subtitle, Arrow, ContainerData } from "./styles";
import { ArrowUpRight } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

type Props = {
    title: string;
    subtitle: string;
}

export function Highlights({ title, subtitle }: Props) {
    const { COLORS } = useTheme();
    return (
        <Container>
            <Arrow>
                <ArrowUpRight size={24} color={COLORS.GREEN_DARK}/>
            </Arrow>
            <ContainerData>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </ContainerData>
        </Container>
    );
}