import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

type Props = TextInputProps & {
    onPress: () => void;
}

export function AddTodo({ onPress, ...rest }: Props) {
    return (
        <Container>
            <Input {...rest} />
            <Button onPress={onPress}/>
        </Container>
    );
}