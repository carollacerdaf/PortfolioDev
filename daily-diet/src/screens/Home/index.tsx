import { useState } from "react";
import { FlatList } from "react-native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";

import { Container, Title } from "./styles";
import { FoodList } from "@components/FoodList";

type Props = {
    time: string;
    food: string;
}

export function Home() {
    return (
        <Container>
            <Header />
            <Highlights title="90,86%" subtitle="das refeições dentro da dieta" />
            <Title>Refeições</Title>
            <Button title="Nova refeição" />
            <FoodList/>
            
        </Container>
    );
}