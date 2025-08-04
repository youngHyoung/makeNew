import React, { useEffect, useRef } from "react";

const KakaoMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // 컴포넌트가 렌더링될 때마다 window.kakao 객체를 다시 참조
    const { kakao } = window;

    // window.kakao가 없거나, maps 객체가 없으면 스크립트가 아직 로드되지 않은 것
    if (!kakao || !kakao.maps) {
      console.error("카카오맵 스크립트가 로드되지 않았습니다.");
      return; // kakao 객체가 없으면 아무것도 실행하지 않음
    }

    kakao.maps.load(() => {
      const container = mapContainer.current;
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      new kakao.maps.Map(container, options);
    });
  }, []); // 빈 배열을 전달하여 최초 렌더링 시에만 실행

  return (
    <div ref={mapContainer} style={{ width: "100%", height: "400px" }}></div>
  );
};

export default KakaoMap;
