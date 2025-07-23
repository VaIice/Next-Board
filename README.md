## 📝 Next.js 게시판 구현

#### Next.js와 Jest를 활용한 게시판 프로젝트

---

## 🛠️ Tools and Technologies

### 🎨 Frontend 🎨
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### 🧪 Test
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![React Testing Library](https://img.shields.io/badge/React_Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)

---

## 📁 프로젝트 구조 설명

```bash
/app
 ├─ layout.tsx         # 전체 레이아웃
 ├─ page.tsx           # 메인 페이지
 ├─ /components        # 공통 및 메인 페이지 컴포넌트
 ├─ /post              # 상세 페이지 관련 컴포넌트
 └─ /write             # 글쓰기 페이지 관련 컴포넌트

/public                # 정적 파일
/constants             # 상수 정의
/libs                  # 라이브러리 설정
/styles                # 스타일 및 테마
/types                 # 타입 정의
/utils                 # 유틸 함수
```

---

## ⚙ 설치 및 실행

```bash
# 프로젝트 클론
git clone https://github.com/VaIice/Next-Board.git

# 프로젝트 디렉토리로 이동
cd Next-Board

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 테스트 실행
npm test

# 브라우저에서 http://localhost:3000 접속
```

---

## 🔍 구현 사항

- 게시글 목록 조회
- 게시글 검색 및 정렬
- 게시글 작성
- 게시글 상세 조회
- 댓글 작성 및 조회
- 컴포넌트 단위 테스트

---

## 🎞 웹 페이지 화면

### 메인 화면

<img width="705" height="889" alt="메인 화면" src="https://github.com/user-attachments/assets/1927b1f0-1d70-459d-b234-cfaf9e2a6b2e" />

---

### 상세 화면

<img width="657" height="567" alt="상세 화면" src="https://github.com/user-attachments/assets/8a200da9-cba2-4477-9d6c-eeed5466fc56" />

---

### 작성 화면

<img width="646" height="535" alt="작성 화면" src="https://github.com/user-attachments/assets/94a72850-909a-4862-83b6-4335e2d53ecf" />
