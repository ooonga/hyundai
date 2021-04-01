window.addEventListener('DOMContentLoaded', function(){

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div

        mapOption = {
          center: new kakao.maps.LatLng(37.48223253083606, 127.0119088913427), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };
        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성
        var markerPosition  = new kakao.maps.LatLng(37.48223253083606, 127.0119088913427); // 마커 표시
        var marker = new kakao.maps.Marker({
          position: markerPosition
        }); // 마커 생성

        marker.setMap(map); //지도 표시

}); //event ready;
