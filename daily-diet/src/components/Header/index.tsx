import { BackButton, BackIcon, Container, ContainerFilled, Logo, ProfileImage } from './styles'
import logo from '@assets/logo.png'
import ellipse from '@assets/ellipse.png'

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton }: Props) {
    return (
        <Container>
            {showBackButton &&
                <ContainerFilled>
                    <BackButton onPress={() => { }}>
                        <BackIcon />
                    </BackButton>
                </ContainerFilled>
            }
            {!showBackButton &&
                <>
                    <Logo source={logo} />
                    <ProfileImage source={ellipse} />
                </>
            }
        </Container>
    );
}