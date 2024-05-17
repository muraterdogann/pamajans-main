import styled from 'styled-components';

export const TitleSection = styled.div`
  padding-top: 24px;
  padding-bottom: 4px;
  background-color: var(--main-bg-color);
  text-align: center;
`;

export const Title = styled.h1`
  font-family: 'font-display';
  color: #37c8ae;
  margin-bottom: 6px;
  margin-top: 4rem;
  font-size: 4rem;
`;

export const Subtitle = styled.p`
  color: var(--jacarta-300);
  margin-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Divider = styled.div`
  margin-left: 15rem;
  margin-right: 15rem;
  border-bottom: 2px solid white;
`;

export const LoadMoreButton = styled.button`
  background-color: var(--accent-color);
  box-shadow: var(--accent-box-shadow);
  border-radius: 9999px;
  padding: 12px 32px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent-dark-color);
  }
`;
