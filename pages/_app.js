import RootLayout from "../app/layout"; // app 디렉터리의 RootLayout 가져오기

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
