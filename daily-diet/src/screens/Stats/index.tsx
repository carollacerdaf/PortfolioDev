import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { StatsCard } from "@components/StatsCard";
import { Container, ContainerRow } from "./styles";
import { MealsCard } from "@components/MealsCard";

export function Stats() {
    return (
        <Container>
            <Header showBackButton />
            <Highlights title="30,21%" subtitle="das refeições dentro da dieta" />
            <StatsCard title="4" subtitle="melhor sequência de pratos dentro da dieta" />
            <StatsCard title="109" subtitle="refeições registradas" />
            <ContainerRow>
                <MealsCard title="4" subtitle="melhor sequência de pratos dentro da dieta" />
                <MealsCard title="109" subtitle="refeições registradas" />
            </ContainerRow>
        </Container>
    );
}