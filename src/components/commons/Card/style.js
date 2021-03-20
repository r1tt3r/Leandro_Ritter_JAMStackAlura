import styled from 'styled-components';

export const CardItem = styled.div`
  font-size: 24px;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 #e4e4e4;
  color: #25262a;
  transition: all 0.3s ease;
  margin-bottom: 25px;
  margin-right: 0;
  border-radius: 0 0 5px 5px;
  padding: 10px;
`;

CardItem.Image = styled.figure`
  position: relative;
  margin: 0;
  img {
    width: 100%;
  }
`;

CardItem.Content = styled.div`
  padding: 0 20px 20px 20px;
`;

CardItem.Description = styled.p`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: left;
`;
