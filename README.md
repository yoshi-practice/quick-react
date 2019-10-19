# Quick React

---

## `create-react-app`

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

## `React.js` の構文

### `render` メソッド

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
- HTMLタグを複数並べての `render` はできない。その場合、 `<div>` タグで囲む。

### コンポーネントの定義

- コンポーネントを定義するには、 `Component` クラスを継承( `extends` )する。
- `class` `extends` などは `ES2015` ~導入の新しい構文。
- 名前は `Pascal形式` (すべて頭文字が大文字, ex) `SampleApp` )
- `camelCase` はHTMLと区別がつかないため不可。

### レンダリング

- ビューの再利用生を高めるために、コンポーネントを経由した描画が基本だが、HTMLタグを指定しても問題はない。

### 更新
- renderを複数回行う事で、要素を更新することも可能である。
- `setInterval` で1000msおきに `render` する例

```
setInterval(() => {
    ReactDOM.render(<div>現在: {(new Date()).toLocaleString()}</div>, document.getElementById('root'));
},1000);
```

この場合、指定の要素すべてが置き換わるのではなく、変更された箇所のみが変更される。

これにより、`Virtual DOM` はビューの更新にかかるオーバーヘッドを最小化している。

### `Virtual DOM`

- メモリ上に置かれたDOMのコピー（のようなもの）
- 実際のDOMより先に `Virtual DOM` が先に操作され、タイミングを合わせて実際のDOMに反映される。

→ パフォーマンスの改善が可能。
