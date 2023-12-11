# svelte_test
svelteを学習するためのブランチ

## node
v20.8.0

## 使用ライブラリ
| type            | name                     | 
| --------------- | ------------------------ | 
| front framework | SvelteKit                | 
| ui library      | SMUI(svlete material ui) | 
| headless CMS    | Sanity                   | 

## command
`npm run prepare`によってSMUIのCSSの更新をかけることできる。そのためSMUIを更新、新たにUIを新規インストールした場合にはコマンドを入力する必要あり。

下記の通り、preapareは実行時に実施されてしまうので、変更  
https://egashira.dev/blog/npm-install-option-ignore-scripts

## 環境に関して
リポジトリ直下にapiディレクトリを置き、そちらは[sanity](https://github.com/tmo-taka/test_sanity)で管理する。
docker-compose.ymlはこちらのリポジトリで管理する。

