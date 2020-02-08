<template>
  <main>
    <Stack>
      <h1>BaseTitle</h1>
      <p>The basic title component. Can be customised in a few different ways.</p>
      <div>
        <BaseTitle>The Default Title</BaseTitle>
      </div>

      <h2>Props</h2>
      <p>
        <strong>color</strong>: ?string ('black') ['primary', 'black']<br />
        Sets the colour of the title, from the theme's available colours.
      </p>
      <div>
        <BaseTitle color="primary">Title with Primary color</BaseTitle>
      </div>
      <br />

      <p>
        <strong>size</strong>: ?string|null ('base') [null, 'large', 'big', 'intermediate', 'medium',
        'base']<br />
        Sets the size of the title, from the theme's available sizes.
      </p>
      <div>
        <BaseTitle size="large">A Large title</BaseTitle>
      </div>
      <br />

      <p>
        <strong>uppercase</strong>: ?boolean (false)<br />
        If true, makes the text uppercase.
      </p>
      <div>
        <BaseTitle uppercase>An Uppercase Title</BaseTitle>
      </div>
      <br />

      <p>
        <strong>static</strong>: ?boolean (false)<br />
        If true, will not resize the font size as the screen width changes.
      </p>
      <div>
        <BaseTitle static>A static title</BaseTitle>
      </div>
      <br />

      <p>
        <strong>bold</strong>: ?boolean (true)<br />
        If false, will make the title no longer bold.
      </p>
      <div>
        <BaseTitle :bold="false">A non-bold title</BaseTitle>
      </div>
      <br />
    </Stack>
  </main>
</template>

<style scoped></style>
