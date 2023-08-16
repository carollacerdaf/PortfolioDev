import { CheckBox, Container, Title, Icon, TitleContainer } from "./styles";
import { Trash } from 'phosphor-react-native';
import { useTheme } from "styled-components";

type Props = {
    title: string;
    onRemove: () => void;
    isChecked: boolean;
    onCheck: () => void;
}

export function TodoCard({ title, onRemove, isChecked, onCheck }: Props) {
    const { COLORS } = useTheme();
    return (
        <Container>
            <CheckBox 
            isChecked={isChecked}
            onPress={onCheck}
            />
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <Icon onPress={onRemove}>
                <Trash color={COLORS.GRAY_300} size={20} />
            </Icon>
        </Container>
    );
}