import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #fff;
  display: grid;
  place-items: center;
  position: relative;
`;

export const Center = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: #292423;
  margin-bottom: 3rem;

  > span {
    color: #00A9F7;
  }
`;

export const Button = styled.button`
  width: 250px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 5px;
  background: #00A9F7;
  cursor: pointer;
`;

const HomeImage = styled.img`
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  touch-action: none;
  pointer-events: none;
`;

export const Hand = styled(HomeImage)`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
`;

export const Diamond = styled(HomeImage)`
  top: 0;
  left: 0;
  height: 15%;
`;

export const Dog = styled(HomeImage)`
  bottom: -5%;
  right: 1%;
  width: 32%;
`;

export const Man = styled(HomeImage)`
  left: 5%;
  top: 5%;
  width: 25%;
`;

export const Woman = styled(HomeImage)`
  left: 4%;
  bottom: 5%;
  width: 25%;
`;

export const Laptop = styled(HomeImage)`
  width: 30%;
  top: 0;
  right: 0;
`;

export const Wave = styled(HomeImage)`
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
`;