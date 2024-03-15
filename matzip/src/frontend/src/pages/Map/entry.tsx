import { Container, MapWrapper, MapCategory, CategoryBtn } from "./styled"
import React, {useEffect, useState} from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"

export default function Entry() {
  useKakaoLoader();
  
  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
  const markerImageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png"

  const imageSize = { width: 22, height: 26 }
  const spriteSize = { width: 36, height: 98 }
  const mapCatgory = [
     {
      title : '전체',
      id : 'allMenu',
      cateogry : 'all'
    },
    {
      title : '커피숍',
      id : 'coffeeMenu',
      cateogry : 'coffee'
    },
    {
      title : '편의점',
      id : 'storeMenu',
      cateogry : 'store'
    },{
      title : '주차장',
      id : 'carparMenu',
      cateogry : 'carpark'
    },
  ]
  // 커피숍 마커가 표시될 좌표 배열입니다
  const coffeePositions = [
    { lat: 37.499590490909185, lng: 127.0263723554437 },
    { lat: 37.499427948430814, lng: 127.02794423197847 },
    { lat: 37.498553760499505, lng: 127.02882598822454 },
    { lat: 37.497625593121384, lng: 127.02935713582038 },
    { lat: 37.49646391248451, lng: 127.02675574250912 },
    { lat: 37.49629291770947, lng: 127.02587362608637 },
    { lat: 37.49754540521486, lng: 127.02546694890695 },
  ]
  const coffeeOrigin = { x: 10, y: 0 }

  // 편의점 마커가 표시될 좌표 배열입니다
  const storePositions = [
    { lat: 37.497535461505684, lng: 127.02948149502778 },
    { lat: 37.49671536281186, lng: 127.03020491448352 },
    { lat: 37.496201943633714, lng: 127.02959405469642 },
    { lat: 37.49640072567703, lng: 127.02726459882308 },
    { lat: 37.49640098874988, lng: 127.02609983175294 },
    { lat: 37.49932849491523, lng: 127.02935780247945 },
    { lat: 37.49996818951873, lng: 127.02943721562295 },
  ]
  const storeOrigin = { x: 10, y: 36 }

  // 주차장 마커가 표시될 좌표 배열입니다
  const carparkPositions = [
    { lat: 37.49966168796031, lng: 127.03007039430118 },
    { lat: 37.499463762912974, lng: 127.0288828824399 },
    { lat: 37.49896834100913, lng: 127.02833986892401 },
    { lat: 37.49893267508434, lng: 127.02673400572665 },
    { lat: 37.49872543597439, lng: 127.02676785815386 },
    { lat: 37.49813096097184, lng: 127.02591949495914 },
    { lat: 37.497680616783086, lng: 127.02518427952202 },
  ]
  const carparkOrigin = { x: 10, y: 72 }

  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const allMenu = document.getElementById('allMenu');
    const coffeeMenu = document.getElementById('coffeeMenu');
    const storeMenu = document.getElementById('storeMenu');
    const carparkMenu = document.getElementById('carparkMenu');

    if (allMenu && coffeeMenu && storeMenu && carparkMenu) {
      if (selectedCategory === "all") {
        allMenu.className = "menu_selected";
        coffeeMenu.className = "";
        storeMenu.className = "";
        carparkMenu.className = "";
      } else if (selectedCategory === "coffee") {
        allMenu.className = "";
        coffeeMenu.className = "menu_selected";
        storeMenu.className = "";
        carparkMenu.className = "";
      } else if (selectedCategory === "store") {
        allMenu.className = "";
        coffeeMenu.className = "";
        storeMenu.className = "menu_selected";
        carparkMenu.className = "";
      } else if (selectedCategory === "carpark") {
        allMenu.className = "";
        coffeeMenu.className = "";
        storeMenu.className = "";
        carparkMenu.className = "menu_selected";
      }
    }
  }, [selectedCategory])
	return(
		<Container>
      <MapWrapper>
		    <Map
		      id="map"
		      center={{
		    	// 지도의 중심좌표
		    	lat: 37.498004414546934,
		    	lng: 127.02770621963765,
		      }}
		      style={{
		    	// 지도의 크기
		    	width: "100%",
		    	height: "100%",
		      }}
		      level={3} // 지도의 확대 레벨
		    >
          {(selectedCategory === "coffee" || selectedCategory === 'all') &&
            coffeePositions.map((position) => (
              <MapMarker
                key={`coffee-${position.lat},${position.lng}`}
                position={position}
                image={{
                  src: markerImageSrc,
                  size: imageSize,
                  options: {
                    spriteSize: spriteSize,
                    spriteOrigin: coffeeOrigin,
                  },
                }}
              />
            ))}
          {(selectedCategory === "store" || selectedCategory === 'all') &&
            storePositions.map((position) => (
              <MapMarker
                key={`store-${position.lat},${position.lng}`}
                position={position}
                image={{
                  src: markerImageSrc,
                  size: imageSize,
                  options: {
                    spriteSize: spriteSize,
                    spriteOrigin: storeOrigin,
                  },
                }}
              />
            ))}
          {(selectedCategory === "carpark" || selectedCategory === 'all') &&
            carparkPositions.map((position) => (
              <MapMarker
                key={`carpark-${position.lat},${position.lng}`}
                position={position}
                image={{
                  src: markerImageSrc,
                  size: imageSize,
                  options: {
                    spriteSize: spriteSize,
                    spriteOrigin: carparkOrigin,
                  },
                }}
              />
            ))}
        </Map>
        {/* 지도 위에 표시될 마커 카테고리 */}
        <MapCategory>
          {
            mapCatgory.map((category, index) => {
              return(
                <li>
                  <CategoryBtn 
                  key={index} 
                  id={category.id} onClick={() => setSelectedCategory(`${category.cateogry}`)}
                  className={selectedCategory === category.cateogry ? 'menu_selected' : ''}
                  >
                    {category.title}
                  </CategoryBtn>
                </li>
              )
            })
          }
        </MapCategory>
      </MapWrapper>
		</Container>
	)
}