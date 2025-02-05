// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

// next.js 13 이후로는 pages 폴더의 형태를 권장하지 않음
// 그대신 app 라우팅은 폴더 형식으로 제공됨
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav>공통 네비게이션</nav>
        <section>{children}</section>
        <footer>공통 푸터</footer>
      </body>
    </html>
  );
}
