import React from 'react';
import styled from 'styled-components';
import airbnbLogo from '../assets/icon/Airbnb_Logo.svg';
import { ReactComponent as Search } from '../assets/icon/search.svg';

const HeaderView = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
`;
const MainLogo = styled.a`
  width: 118px;
  height: 64px;
  background-image: url(${airbnbLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const SearchBoxWrap = styled.div`
  padding: 0 24px;
`;
const SearchBox = styled.div`
  min-width: 348px;
  display: flex;
  align-items: center;
  border-radius: 40px;
  border: 1px solid #dddddd;
`;
const AnyWhere = styled.button`
  height: 48px;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  cursor: pointer;
  margin: -1px;
`;
const WhenEver = styled.button`
  height: 48px;
  cursor: pointer;
  margin: -1px;
`;
const AddGuest = styled.button`
  height: 48px;
  cursor: pointer;
  margin: -1px;
`;
const SearchText = styled.div<{ bold?: boolean }>`
  padding: 0 16px;
  line-height: 18px;
  font-size: 14px;
  color: #222222;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
`;

const Divide = styled.div`
  width: 1px;
  height: 24px;
  background-color: #dddddd;
`;
const SearchIconWrap = styled.button`
  width: 32px;
  height: 32px;
  border-radius: inherit;
  margin: 7px 7px 7px 0;
  background-color: #ff385c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
`;
const HostWrap = styled.a`
  display: flex;
  align-items: center;
  padding: 12px;
  vertical-align: center;
  background-color: transparent;
  z-index: 1;
`;
const HostText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #222222;
  text-align: inherit;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderView>
      <MainLogo />
      <SearchBoxWrap>
        <SearchBox>
          <AnyWhere>
            <SearchText bold>어디든지</SearchText>
          </AnyWhere>
          <Divide />
          <WhenEver>
            <SearchText bold>언제든 일주일</SearchText>
          </WhenEver>
          <Divide />
          <AddGuest>
            <SearchText>게스트 추가</SearchText>
          </AddGuest>
          <SearchIconWrap>
            <Search width="14px" height="14px" />
          </SearchIconWrap>
        </SearchBox>
      </SearchBoxWrap>
      <RightHeader>
        <HostWrap>
          <HostText>호스트 되기</HostText>
        </HostWrap>
      </RightHeader>
    </HeaderView>
  );
};

export default Header;
