import { Text } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Input } from "@components/Input";

export function Todo() {
    return (
        <Container>
            <Header />
            <Input placeholder="Aqui"/>
        </Container>
    );
}