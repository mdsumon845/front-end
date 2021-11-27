'use strict';

window.addEventListener('DOMContentLoaded',
  function() {
    // ページ本体が読み込まれたタイミングで実行するコード
    let popmsg='お世話になっております'
    window.alert(popmsg);

    // おみくじボタン１
    {
      let btn1 = document.getElementById('btn1');
      btn1.addEventListener('click', () => {
        let n = Math.floor(Math.random() * 3);
    
            switch (n) {
              case 0:
                btn1.textContent = 'smile!!';
                btn1.style.backgroundColor = '#d4fc79';
                btn1.style.fontSize =30+'px';
                break;
              case 1:
                btn1.textContent = 'Happy!';
                btn1.style.backgroundColor = '#fbc2eb';
                btn1.style.fontSize =35+'px';
                break;
              case 2:
                btn1.textContent = 'crazy...';
                btn1.style.backgroundColor = '#a6c0fe';
                btn1.style.fontSize =40+'px';
                break;
            }
      });
    }
    
  }, false
);
$(document).ready(function(){
  $(document).snowfall({
    maxSpeed : 5, // 最大速度
    minSpeed : 1, // 最小速度
    maxSize  : 20, // 最大サイズ
    minSize  : 1, // 最小サイズ
    image : "img/sakura_hanabira.png"
  });
});