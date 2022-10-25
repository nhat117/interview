import {ContextProvider} from "../context";
import { globalStyles} from "../stitches.config.js";
function MyApp({ Component, pageProps }) {

  globalStyles();

	return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	);
}

export default MyApp;
