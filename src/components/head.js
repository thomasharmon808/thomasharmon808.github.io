import React from 'react';
import Helmet from 'react-helmet';
import config from '@config';
import favicon from '@images/favicons/favicon.ico';
import ogImage from '@images/og.png';
import { appleIcon57x57, appleIcon60x60, appleIcon72x72, appleIcon76x76, appleIcon114x114, appleIcon120x120, appleIcon144x144, appleIcon152x152, appleIcon180x180,
androidIcon192x192, favicon32x32, favicon96x96, favicon16x16, msIcon144x144 }
from '@images/favicons/';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang={config.siteLanguage} prefix="og: http://ogp.me/ns#" />
		// react helmet head attributes
    <title itemProp="name" lang={config.siteLanguage}>
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <meta name="description" content={config.siteDescription} />
    <meta name="keywords" content={config.siteKeywords} />
		// TODO:google-site-verification
    //<meta name="google-site-verification" content={config.googleVerification} />
		// FB Open Graph https://ogp.me
		// Open Graph Required Properties:
    <meta property="og:title" content={config.siteTitle} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={`${config.siteUrl}${ogImage}`} />
    <meta property="og:url" content={config.siteUrl} />
		// Open Graph Optional Properties
		<meta property="og:description" content={config.siteDescription} />
    <meta property="og:site_name" content={config.siteTitle} />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="533" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={config.siteTitle} />
    <meta itemProp="description" content={config.siteDescription} />
    <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} />
		// favicon images
    <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
    <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60x60} />
    <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
    <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
    <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114x114} />
    <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120x120} />
    <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
    <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
    <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192x192} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
    <meta name="msapplication-TileColor" content={config.genoaBlue} />
    <meta name="msapplication-TileImage" content={msIcon144x144} />
    <meta name="theme-color" content={config.genoaBlue} />
  </Helmet>
);

export default Head;
