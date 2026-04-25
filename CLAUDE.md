# quiz-app

一般常識クイズアプリ。

## 技術スタック

- HTML5
- CSS3
- JavaScript (バニラ、フレームワーク不使用)

## プロジェクト構成

```
quiz-app/
├── index.html        # エントリーポイント
├── css/
│   └── style.css     # スタイルシート
├── js/
│   └── app.js        # アプリケーションロジック
└── data/
    └── questions.js  # クイズ問題データ
```

## 開発方針

- 外部ライブラリ・フレームワークは使用しない（バニラ HTML/CSS/JS のみ）
- ブラウザで直接 `index.html` を開いて動作する（サーバー不要）
- モバイル対応（レスポンシブデザイン）

## コーディング規約

- インデント: スペース 2 つ
- 文字コード: UTF-8
- JavaScript は `const` / `let` を使用し `var` は使わない
- DOM 操作は `querySelector` / `querySelectorAll` を使用

## 機能概要

- 一般常識クイズの出題（4 択形式）
- 正解・不正解のフィードバック表示
- スコア集計と結果画面
