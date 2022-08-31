import React from 'react';
import styled from 'styled-components';
import airbnbLogo from '../assets/icon/Airbnb_Logo.svg';
import { ReactComponent as Search } from '../assets/icon/search.svg';
import { ReactComponent as Hamburgar } from '../assets/icon/hamburgar.svg';
import { ReactComponent as Profile } from '../assets/icon/airbnb_myprofile.svg';
import airbnbImg54 from '../assets/icon/airbnb_img54.jpg';

import Filter from './Filter';

const HeaderView = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  border-bottom: 1px solid #ebebeb;
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
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  transition: box-shadow 0.2s ease;
  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  }
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
  :hover {
    background-color: #f7f7f7;
    border-radius: 22px;
  }
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
const Translation = styled.button`
  width: 46px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  :hover {
    background-color: #f7f7f7;
    border-radius: 22px;
  }
`;
const TranslationIcon = styled.img.attrs({
  src: `${airbnbImg54}`,
})`
  width: 16px;
  height: 16px;
`;
const MypageWrap = styled.button`
  padding: 5px 5px 5px 12px;
  border-radius: 21px;
  border: 1px solid #dddddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 77px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  }
`;

const Header = () => {
  return (
    <>
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
          <Translation>
            <TranslationIcon />
          </Translation>
          <MypageWrap>
            <Hamburgar />
            <Profile width="30px" height="30px" color="#717171" />
          </MypageWrap>
        </RightHeader>
      </HeaderView>
      <Filter></Filter>
    </>
  );
};

export default Header;
