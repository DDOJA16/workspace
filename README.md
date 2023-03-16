# workspace

- 03.16 _ typescript의 절대경로 webback compiled error
            - tsconfig.json 이나 webpack.config.js 방법이 안됨
            -> eject를 하지 않고 CRA 내부에 숨겨진 설정을 변경할 수 있는 craco 라이브러리를 발견
            -> craco-alias가 deprecated 되어 react-app-alias 라이브러리로 대체 사용
            -> react-app-alias 사용하여 해결 (이후 eslint, prettier설정)
