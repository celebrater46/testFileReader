"use strict";

const testLine = "「これは……テストでーす――」";
const div = document.getElementById("p-1");

const createLines = (line) => {
    let str = "";
    for (let i = 0; i < 15; i++){
        str += "<p id='line-" + i + "'>" + line + "</p>";
    }
    return str;
}

div.innerHTML = createLines(testLine);

// 結論：サーバー側の TXT ファイルを読み込ませるには、AJAX が必要