/* eslint-disable react/prop-types */
import "../global.css";

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}