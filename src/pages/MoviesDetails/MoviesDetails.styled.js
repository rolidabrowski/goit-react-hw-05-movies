import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Poster = styled.img`
  width: 250px;
  height: 350px;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  font-size: 24px;
`;

export const InfoList = styled.div`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 20px;
`;

export const InfoItem = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Vote = styled.span`
  font-size: 18px;
  color: ${props => (props.vote >= 7 ? 'green' : 'red')};
`;

export const Overview = styled.p`
  font-size: 14px;
  margin-left: 20px;
`;

export const Genres = styled.ul`
  margin: 0;
  margin-top: 14px;
  margin-left: 20px;
  padding: 0;
  display: flex;
  gap: 10px;
  list-style: none;
  font-size: 14px;
`;
