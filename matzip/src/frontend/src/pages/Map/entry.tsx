import { Container, MapWrapper, MapCategory, CategoryBtn } from "./styled";
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";
import ExcelLoader from "./ExcelLoader";
import koreanFood from '../../assets/img/icon/korean_food.png';
import snackFood from '../../assets/img/icon/snack_food.png';
import chineseFood from '../../assets/img/icon/chinese_food.png';
import japaneseFood from '../../assets/img/icon/japanese_food.png';
import modrenFood from '../../assets/img/icon/modren_food.png';

interface DataItem {
  id: number;
  title: string;
  address: string;
  cateName: string;
  cateId: number;
  lat: number;
  lng: number;
}

export default function Entry() {
  useKakaoLoader();

  // 엑셀
  const [jsonData, setJsonData] = useState<DataItem[]>([]);

  const handleJsonData = (data: DataItem[]) => {
    setJsonData(data);
  }

  // 마커 이미지 주소
  const markerImageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png";
  const imageSize = { width: 30, height: 30 };

  // 카테고리
  const mapCategory = [
    { title: '한식', id: 1 },
    { title: '분식', id: 2 },
    { title: '중국식', id: 3 },
    { title: '일식', id: 4 },
    { title: '경양식', id: 5 },
  ];

  const [selectedCategory, setSelectedCategory] = useState<number>(-1);

  useEffect(() => {
    setSelectedCategory(-1); // 초기 선택값 설정
  }, [jsonData]);

  return (
    <Container>
      <ExcelLoader onJSONData={handleJsonData} />
      <MapWrapper>
        <Map
          id="map"
          center={{ lat: 37.498004414546934, lng: 127.02770621963765 }}
          style={{ width: "100%", height: "100%" }}
          level={7}
        >
          {jsonData && jsonData
            .filter((item) => selectedCategory === -1 || item.cateId === selectedCategory)
            .map((position) => (
              <MapMarker
                key={position.id}
                position={{ lat: position.lat, lng: position.lng }}
                image={{
                  src: getCategoryImage(position.cateId),
                  size: imageSize,
                }}
              />
            ))}
        </Map>
        <MapCategory>
          <li>
            <CategoryBtn onClick={() => setSelectedCategory(-1)} className={selectedCategory === -1 ? 'menu_selected' : ''}>
              전체
            </CategoryBtn>
          </li>
          {mapCategory.map((category) => (
            <li key={category.id}>
              <CategoryBtn
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'menu_selected' : ''}
              >
                {category.title}
              </CategoryBtn>
            </li>
          ))}
        </MapCategory>
      </MapWrapper>
    </Container>
  );
}

// 카테고리에 따른 이미지 리턴 함수
function getCategoryImage(cateId: number): string {
  switch (cateId) {
    case 1: return koreanFood;
    case 2: return snackFood;
    case 3: return chineseFood;
    case 4: return japaneseFood;
    case 5: return modrenFood;
    default: return ''; // 기본 이미지
  }
}