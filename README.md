# Quick React

---

## create-react-app

### 内容
- webpack : モジュールバンドラ
- webpack-dev-server : webpack上の開発サーバ
- Babel : JSX, ES2015以上のコードをES5に変換するトランスコンパイラ

### コマンド

| コマンド | 概要 |
|---|---|
|npm run start |サーバーを起動 |
|npm run build |プロジェクトをビルド |
|npm run test |テストを実行 |
|npm run eject| 設定情報の出力 |

- 本番環境では `/build` 以下にバンドルされるので、そのまま配置する。
- `eject` コマンドは `webpack` `babel` の設定のカスタマイズに使用する。上級者向け。