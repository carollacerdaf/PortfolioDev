import { Input } from "@components/Input";
import { Container } from "./styles";
import { Button } from "@components/Button";

export function AddTodo() {
    return (
        <Container>
            <Input />
            <Button onPress={() => {}}/>
        </Container>
    );
}