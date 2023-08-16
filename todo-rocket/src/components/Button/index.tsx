import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styles';

export function Button({onPress}: TouchableOpacityProps) {
    return(
        <Container onPress={onPress}>
            <Icon />
        </Container> 
    );
}