// Page.jsx (서버 컴포넌트)
import dynamic from "next/dynamic";

// 동적 로딩을 클라이언트 컴포넌트에서만 사용
// 서버 컴포넌트에서 dynamic을 사용하면 ssr:false 불가능
const AboutClient = dynamic(() => import("./clientPage"), {
  ssr: true, // 서버 사이드 렌더링을 하지 않도록 설정
  //   서버사이드 렌더링을 false로 지정하면 에러가 뜸 해결법 못찾음
  suspense: true, // React Suspense 활성화
});

export default function Page() {
  const user = {
    name: "이름",
  };

  return <AboutClient user={user} />;
}
// 서버 컴포넌트의 장점을 살리면서 클라이언트 컴포넌트를 사용하는 방법

// 1. "use client" 컴포넌트 통째로 명시 => 구조가 복잡해질 가능성
// 2. props로 넘겨주기 => 서버 컴포넌트와 클아이언트 컴포넌트의 경계가 모호해질 가능성
// 3. next/dynamic 사용 => 렌더링 및 최적화에 적합, 초기로딩이 지연될 수 있으나 React Suspense로 해결가능
