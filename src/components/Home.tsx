import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft, faUsers, faUser, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ContainerHome = styled.main`
display: block;
justify-content:center;
background-color: #1E1E1E;

flex: 3;
`;

const Containerheader = styled.header`
 display: flex;
 justify-content: space-between;
 > div {
  padding: 20px 10px;
 }
`;

const IconCotainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function Home() {
  return (
    <ContainerHome>
      <Containerheader>
        <IconCotainer>
          <FontAwesomeIcon icon={faCircleChevronLeft} />
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </IconCotainer>
        <IconCotainer>
          <button>Ver Planos Premium</button>
          <FontAwesomeIcon icon={faUsers} />
          <FontAwesomeIcon icon={faUser} />
        </IconCotainer>
      </Containerheader>
      <div>
        <img src="" alt="" />
        <p>Eletronicas 2023 Mais Tocadas</p>
        <button>Play</button>
        <button>Seguir</button>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </ContainerHome>
  )
}

export default Home