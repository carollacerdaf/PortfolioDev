import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

type Props = TextInputProps;

export function Input({placeholderTextColor}: Props) {
    const { COLORS } = useTheme();
    return(
            <Container 
                placeholderTextColor={COLORS.GRAY_300}
                placeholder="Adicione uma nova tarefa"
            />
    );
}