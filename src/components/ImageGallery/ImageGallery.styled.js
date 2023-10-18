import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
`;

export const Item = styled.ul`
  border: 1px solid #e7e9fc;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.3);

    transform: scale(1.05);
  }
`;
