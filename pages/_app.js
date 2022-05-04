import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from '@mui/material/styles';
import { ToastyProvider } from '../src/contexts/Toasty';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';

import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import CheckAuth from '../src/components/checkAuth/CheckAuth';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const { Component, emotionCache =
		clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<SessionProvider session={pageProps.session}>
				<ThemeProvider theme={theme}>
					<ToastyProvider>
						<CssBaseline />
						{
							Component.requireAuth
								? <CheckAuth Component={Component} pageProps={pageProps}/>
								: <Component {...pageProps} />
						}
					</ToastyProvider>
				</ThemeProvider>
			</SessionProvider>
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
