<!-- @charset "Shift_JIS"; -->

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

### コンポーネントの記述方法
記述方法には２通りあり、

1. `Function` コンポーネント
2. `Class` コンポーネント

1の方ができることが少なく、 `Stateオブジェクト（データ保持）` `ライフサイクルメソッド` を使用することはできない。

ex) `***.js`

```
import React, {Component} from 'react';

class コンポーネント名 extends Component {
    constructor(props){
        super(props);

        this.state = {
            プロパティ名: 直
        };
    }

    メソッド

    render() {
        return (
            JSX
        );
    }
}

export default コンポーネント名;
```

### データ保持 `State`
ReactではStateというオブジェクトを使ってデータを保持している。

保存するデータが更新されるとReactが自動でテンプレートの表示を更新してくれる特殊なオブジェクト。

注意すべきことが２点。

1. `constructor` の中では `state` に直接アクセスして初期値を設定する
2. それ以外では `setState`メソッドで値を設定する

ex) 直接アクセス

```
this.state = {
            name:  "egg",
            greet: "hello"
        };
```

Reactのテンプレートからは、 `{}` を使ってデータにアクセスすることができる。

ex) 

```
{this.state.name}    // egg
```

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

## `JSX` の構文

### ルール

- HTMLの **ような** タグの埋め込みが可能
- 唯一のルートをもつ。複数の要素の列挙には `<div>` を用いる。
- 階層を増やせない場合は、 `<react.Fragment>` 要素を使用しても良い。最終的なレンダーには反映されない。
- 空要素は `~~ />` で終わる。 ex) `<img src="~" />`, `<br />`
- 属性名に `class` `for` などの属性は使えず、 `className` `htmlFor` で代替する。
- コメント `<!-- -->` は使用できず、 `{/* ... */}` を使用する。

### テンプレートにJavaScript構文を埋め込む

テンプレートには `{}` で式を埋め込むことができる。

ex)

```
const name = 'yoshi';

ReactDOM.render(
    <p>Hello, {name}!</p>,
    document.getElementById('root')
);
```

もちろん、演算子などもそのまま埋め込むことが可能（だが、視認性が悪くなるため基本的にはしない）。

### エスケープ処理

```
const str = "hello!"

ReactDOM.render(
    <p>{str}</p>,
    document.getElementById('root')
);
```

この場合、タグがそのまま表示されてしまうため、クロスサイトスクリプティングなどの脆弱性の原因になる。

動的にHTMLを作成し、反映させたい時は、 `dangerouslySetInnnerHTML` で式の値を指定する。

ここで指定された物は、エスケープされずにそのまま要素配下に埋め込まれる。

ex)

```
<p dagngerouslySetInnerHTML={{__html: str}}></p>
```

ただし、これは **適切なエスケープ処理がなされていることが分かっているコンテンツのみに使用する。**