'use strict';

window.addEventListener('DOMContentLoaded',
  function() {
    // ページ本体が読み込まれたタイミングで実行するコード
    {
      let popmsg='おはようございます'
      window.alert(popmsg);
    }

    // おみくじボタン１
    {
      let btn1 = document.getElementById('btn1');
      btn1.addEventListener('click', () => {
        let n = Math.floor(Math.random() * 3);
    
            switch (n) {
              case 0:
                btn1.textContent = 'Very Happy!!';
                btn1.style.backgroundColor = '#FF0000';
                break;
              case 1:
                btn1.textContent = 'Happy!';
                btn1.style.backgroundColor = '#fff001';
                break;
              case 2:
                btn1.textContent = 'UnHappy...';
                btn1.style.backgroundColor = '#261e1c';
                break;
            }
      });
    }
    
  }, false
);
$(document).ready(function(){
  $(document).snowfall({
    maxSpeed : 5, // 最大速度（さいだい　そくど）
    minSpeed : 1, // 最小速度（さいしょう　そくど）
    maxSize  : 20, // 最大サイズ（さいだい　サイズ）
    minSize  : 1, // 最小サイズ（さいしょう　サイズ）
    image : "img/sakura_hanabira.png"
  });
});