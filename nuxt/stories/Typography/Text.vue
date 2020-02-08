<template>
  <main>
    <Stack>
      <h1>BaseText</h1>
      <p>The basic text component. Can be customised in a few different ways.</p>
      <div>
        <BaseText>The Default Body Text</BaseText>
      </div>

      <h2>Props</h2>
      <p>
        <strong>color</strong>: ?string ('black') ['black', 'white', 'primary', 'secondary']<br />
        Sets the colour of the text, from the theme's available colours.
      </p>
      <div>
        <BaseText color="primary">Body text with Primary color</BaseText>
      </div>
      <br />

      <p>
        <strong>size</strong>: ?string|null (null) [null, 'massive', 'huge', 'large', 'small']<br />
        Sets the size of the title, from the theme's available sizes.
      </p>
      <div>
        <BaseText size="small">Some small body text</BaseText>
      </div>
      <br />

      <p>
        <strong>uppercase</strong>: ?boolean (false)<br />
        If true, makes the text uppercase.
      </p>
      <div>
        <BaseText uppercase>Some uppercase content</BaseText>
      </div>
      <br />

      <p>
        <strong>static</strong>: ?boolean (false)<br />
        If true, will not resize the font size as the screen width changes.
      </p>
      <div>
        <BaseText static>Static body text</BaseText>
      </div>
      <br />

      <p>
        <strong>bold</strong>: ?boolean (true)<br />
        If true, will make the text bold.
      </p>
      <div>
        <BaseText bold>Some bold text</BaseText>
      </div>
      <br />
    </Stack>
  </main>
</template>

<style scoped></style>
