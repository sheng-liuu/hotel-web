import styled from 'styled-components'
import defaultBcg from '../images/room-1.jpeg'

const StyledHero = styled.header`
    min-height: 60vh;
    background: url(${props => props.img ? props.img : defaultBcg}) center/cover no-repeat;
    display: flex;
    align-item: center;
    justify-content: center;
`;

export default StyledHero;

