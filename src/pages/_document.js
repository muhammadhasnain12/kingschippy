import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <title>KingsChippy</title>
      <head>
      <link
        rel="shortcut icon"
        href="/kings_chippy_logo.png"
        type="image"
      />
      </head>
      <Head />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Kings Chippy fast-food-in-glasgow kingschippy rasturant fast food in glasgow food deliver fish and chips ubereats justeat indian food'
        />
        <meta
          name='author'
          content='Kings chippy fast-food-in-glasgow rasturant glasgow food deliver ubereats indian food justeat'
        />
        <meta name='author' content='Muhammad Hasnain frontend developer' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
