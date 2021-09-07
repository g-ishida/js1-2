'use strict'

{
while (true) {

  let prompt = window.prompt('日本の首都は?');　//修正箇所

  if (prompt === '東京') { //修正箇所
    window.alert('正解!');
    break;//正解が出たら強制終了
  } else {
    window.alert('不正解!');//正解になるまで無限ループ
  }
}
}

// 変数名は、その変数が何を表すかをはっきり分かるようにするべき
// 可読性
