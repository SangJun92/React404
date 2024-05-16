import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  return (
    <div>
      <Comment
        imgsrc="https://cgeimage.commutil.kr/phpwas/restmb_allidxmake.php?pp=002&idx=3&simg=20220127104753003818f6b75216b2112161531.jpg&nmt=19"
        title="킹가누"
        name="서상준"
        comment="안녕 하세요, 대장입니다."
        today={new Date().toLocaleTimeString()}
      />
      <Comment
        imgsrc="https://i.namu.wiki/i/fkeQ217vGpwkEkpwVDafmc80vuZ8hiJzEZDyLKgNt2tASgFYeKEQs_1LpJ3TWneZb97xaI6ygRfhsxQMjTZ30smr61RRUVDTIsiiCGttnuBBSd3s2oVf_zZb_xCwVhzqoCC2rbuwtBE7CFN5lX3eqA.webp"
        title="로스트아크"
        name="백성훈"
        comment="안녕 하세요, 대장의 부하 모코코 입니다."
        today={new Date().toLocaleTimeString()}
      />
      <Comment
        imgsrc="https://media.bunjang.co.kr/product/243840406_1_1702417485_w360.jpg"
        title="포켓몬"
        name="김병건"
        comment="난 나옹이다 나옹"
        today={new Date().toLocaleTimeString()}
      />
      <Comment
        imgsrc="https://mblogthumb-phinf.pstatic.net/MjAyMTExMTVfMjE4/MDAxNjM2OTEzNDAwNjQ4.A3BnPI2fiWWa2wtcM9xF5BBDSjByfeVOe2IWkmNEkaEg.3F0JSZoi5s-IhM4Imv5nug1B3-T73Qt0Yq8WY5zincAg.JPEG.amoayhwh/Doraemon02.jpg?type=w800"
        title="도라에몽"
        name="김서현"
        comment="안녕 하세요, 도라이몬입니다."
        today={new Date().toLocaleTimeString()}
      />
      <Comment
        imgsrc="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cmj2/image/7ixfFRQX59tIgC3RMjoFZWZqGww"
        title="국산멸치"
        name="박성언"
        comment="안녕 하세요, 메르치 입니다."
        today={new Date().toLocaleTimeString()}
      />
    </div>
  );
}

export default CommentList;
