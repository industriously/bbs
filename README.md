# NestJS Bulletin Board System

<div align=center>

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

[![Release 🔖](https://github.com/rojiwon123/bbs/actions/workflows/push_to_release.yml/badge.svg)](https://github.com/rojiwon123/bbs/actions/workflows/push_to_release.yml)

</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#소개">소개</a></li>
    <li><a href="#api-문서화">API 문서화 방식</a></li>
    <li><a href="#요구사항">요구사항</a></li>
    <li><a href="./ERD.md">ERD 문서</a></li>
    <li><a href="https://rojiwon123.github.io/bbs/">Swagger UI</a></li>
    <li><a href="#커밋-컨벤션">커밋 컨벤션</a></li>
  </ol>
</details>

## 소개

NestJS 기반의 전자 게시판(BBS) API 서버

### 특징

-   type-safe
-   시나리오 테스트 코드 보유
-   ERD/API 문서 자동화

## API 문서화

-   swagger, sdk 빌드 명령어

```bash
npm run build:nestia
```

-   swagger-ui 서버 실행

```bash
npm run swagger
```

## 요구사항

## 필수 사항

-   소셜 간편 로그인
-   게시글 변경이력 저장
-   게시글 첨부파일 제공
-   위지윅 에디터 연동

## 추가 사항

-   권한 관리(비공개 게시판)
-   소셜 간편가입 추가 프로세스
-   임시 게시글 저장

## 커밋 컨벤션

1. 유다시티 컨벤션을 기반으로 깃모지를 활용한 깃 컨벤션을 적용한다.

-   [유다시티 스타일 설명 블로그](https://haesoo9410.tistory.com/300)

-   [깃모지 설명 블로그](https://treasurebear.tistory.com/70)

## 컨벤션 표기 예시

| Udacity  | Gitmoji               | emoji | description                 |
| -------- | --------------------- | ----- | --------------------------- |
| feat     | :sparkles:            | ✨    | 기능 추가                   |
| fix      | :bug:                 | 🐛    | 버그 수정                   |
| hotfix   | :ambulance:           | 🚑    | 긴급 수정                   |
| (hot)fix | :lock:                | 🔒    | 보안 이슈 해결              |
| docs     | :memo:                | 📝    | 문서 업데이트               |
| style    | :art:                 | 🎨    | 코드 구조, 포매팅 관련 수정 |
| style    | :truck:               | 🚚    | 리소스 이동, 이름 변경      |
| refactor | :recycle:             | ♻️    | 프로덕션 코드 리팩토링      |
| test     | :white_check_mark:    | ✅    | 테스트 추가/수정            |
| chore    | :arrow_up:            | ⬆    | dependencies 업데이트       |
| chore    | :construction_worker: | 👷    | CI 빌드 시스템 추가/수정    |
| chore    | :wrench:              | 🔧    | 설정 파일 추가/수정         |
| chore    | :heavy_plus_sign:     | ➕    | dependency 추가             |
| chore    | :heavy_minus_sign:    | ➖    | dependency 제거             |
| chore    | :card_file_box:       | 🗃️    | DB 관련 수정 사항 적용      |
| release  | :bookmark:            | 🔖    | 새로운 버전 출시            |

## Appendix

-   [Nestia 공식 가이드](https://nestia.io/docs/)
-   [Typia 공식 가이드](https://typia.io/docs/)
-   [prisma-markdown](https://www.npmjs.com/package/prisma-markdown)
