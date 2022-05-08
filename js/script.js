var restaurants = new Array();

restaurants = ['봉이밥','그녀의 밥상','홍콩반점','신서방 부대찌개','어랑','마음식당','내사랑돈가스','오빠네떡볶이','새벽집','김밥천국','쉐이리쿡스토리','북창동순두부','사이공쌀국수','편백집','니취8로마','신의주부대찌개','육쌈냉면','가마카레','올리덮밥','니뽕내뽕','무그수','역전우동','롯데리아','포몬스','육대장','천하일면고기국수','불백식당','열평집밥 김치찌개'];

$(document).ready(function(){
    $("button[type=button]").on("click",function(){
        var random = getRandom(0, restaurants.length);
        $("input[type=text]").val(restaurants[random]);
    });
});

function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


// 출처: https://im-first-rate.tistory.com/86 [웃으면 1류다]