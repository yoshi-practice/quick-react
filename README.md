# Quick React

---

## create-react-app

### 内容
- `webpack` : モジュールバンドラ
- `webpack-dev-server` : `webpack` 上の開発サーバ
- `Babel` : `JSX` , `ES2015` 以上のコードを `ES5` に変換するトランスコンパイラ

### コマンド

| コマンド | 概要 |
|---|---|
|`npm run start` |サーバーを起動 |
|`npm run build` |プロジェクトをビルド |
|`npm run test` |テストを実行 |
|`npm run eject`| 設定情報の出力 |

- 本番環境では `/build` 以下にバンドルされるので、そのまま配置する。
- `eject` コマンドは `webpack` `babel` の設定のカスタマイズに使用する。上級者向け。

## 構文

### renderメソッド

```
render (comp, target)
```

- `comp` : 出力するコンポーネント
- `target` : 出力先の要素

ex) 

```
ReactDOM.render(<App />, document.getElementById('root'));
```

→ Appコンポーネントを `id="root"` に出力する

### コンポーネントの定義

- コンポーネントを定義するには、 `Component` クラスを継承( `extends` )する。
- `class` `extends` などは `ES2015` ~導入の新しい構文。
- 名前は `Pascal形式` (すべて頭文字が大文字, ex) `SampleApp` )
- `camelCase` はHTMLと区別がつかないため不可。