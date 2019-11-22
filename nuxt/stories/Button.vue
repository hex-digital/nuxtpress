<template>
  <main>
    <Stack>
      <h1>Button</h1>
      <p>A basic button component. Can be customised in a few different ways</p>
      <h2>Accessibility</h2>
      <p>
        <strong>aria-label</strong> <br />
        Add an aria-label when the content on the button doesn't portray what the button will do.<br />
        For example, when the button is icon-only. Read by screenreaders as "click {label}".
      </p>
      <p>
        <strong>aria-role</strong> <br />
        When not using &lt;button&gt; tag, if the element will do something in response to user input, add
        aria-role="button".<br />
        Examples include when using an &lt;a&gt; tag to display a modal, rather than to navigate.
      </p>

      <h2>Props</h2>
      <p>
        <strong>theme</strong>: ?string ('primary') ['primary', 'secondary', 'white', 'dark']<br />
        Set the colour theme of the button
      </p>
      <div>
        <BaseButton>primary (default)</BaseButton>
        <BaseButton theme="secondary">secondary</BaseButton>
        <BaseButton theme="white">white</BaseButton>
        <BaseButton theme="black">black</BaseButton>
      </div>
      <br />

      <p>
        <strong>outline</strong>: ?boolean (false)<br />
        If true, use the outline version of the button
      </p>
      <div>
        <BaseButton outline>primary (default)</BaseButton>
        <BaseButton theme="secondary" outline>secondary</BaseButton>
        <BaseButton theme="white" outline>white</BaseButton>
        <BaseButton theme="black" outline>black</BaseButton>
      </div>
      <br />

      <p>
        <strong>text</strong>: ?boolean (false)<br />
        If true, make the button just a text variant
      </p>
      <div>
        <BaseButton text>primary</BaseButton>
        <BaseButton theme="secondary" text>secondary</BaseButton>
        <BaseButton theme="white" text>white</BaseButton>
        <BaseButton theme="black" text>black</BaseButton>
      </div>

      <p>
        <strong>size</strong>: ?string (null) [null, 'tiny', 'small', 'large', 'huge']<br />
        Set the size of the button. Affects both spacing and font size.
      </p>
      <Cluster justify="flex-start">
        <div>
          <BaseButton size="tiny">Tiny</BaseButton>
          <BaseButton size="small">Small</BaseButton>
          <BaseButton>Null</BaseButton>
          <BaseButton size="large">Large</BaseButton>
          <BaseButton size="huge">Huge</BaseButton>
        </div>
      </Cluster>

      <p>
        <strong>disabled</strong>: ?boolean (false)<br />
        If true, disable all interactions for this element.
      </p>
      <div>
        <Stack space="0.5rem">
          <div>
            <BaseButton disabled>default</BaseButton>
            <BaseButton theme="secondary" disabled>secondary</BaseButton>
            <BaseButton theme="white" disabled>default</BaseButton>
            <BaseButton theme="black" disabled>black</BaseButton>
          </div>
          <div>
            <BaseButton outline disabled>outline</BaseButton>
            <BaseButton theme="secondary" outline disabled>secondary</BaseButton>
            <BaseButton theme="white" outline disabled>default</BaseButton>
            <BaseButton theme="black" outline disabled>black</BaseButton>
          </div>
          <div>
            <BaseButton text disabled>text</BaseButton>
            <BaseButton theme="secondary" text disabled>secondary</BaseButton>
            <BaseButton theme="white" text disabled>default</BaseButton>
            <BaseButton theme="black" text disabled>black</BaseButton>
          </div>
        </Stack>
      </div>

      <p>
        <strong>loading</strong>: ?boolean (false) <br />
        If true, replace the button text with a loading spinner
      </p>
      <div>
        <BaseButton loading>primary</BaseButton>
        <BaseButton theme="secondary" loading>secondary</BaseButton>
        <BaseButton theme="white" loading>default</BaseButton>
        <BaseButton theme="black" loading>black</BaseButton>
      </div>
      <p>Can also be both disabled and loading</p>
      <div>
        <BaseButton loading disabled>primary</BaseButton>
        <BaseButton theme="secondary" loading disabled>secondary</BaseButton>
        <BaseButton theme="white" loading disabled>default</BaseButton>
        <BaseButton theme="black" loading disabled>black</BaseButton>
      </div>
      <br />

      <p>
        <strong>block</strong>: ?boolean (false)<br />
        If true, make this button a block element.
      </p>
      <div>
        <BaseButton block>primary</BaseButton>
        <BaseButton theme="secondary" block>secondary</BaseButton>
        <BaseButton theme="white" block>white</BaseButton>
        <BaseButton theme="black" block>black</BaseButton>
      </div>
      <br />

      <p>
        <strong>nativeType</strong>: ?string ('button') ['button', 'submit', 'reset']<br />
        Sets the native 'type' field for the button to a valid button type.
      </p>
      <div>
        <BaseButton native-type="button">button (default)</BaseButton>
        <BaseButton native-type="submit">submit</BaseButton>
        <BaseButton native-type="reset">reset</BaseButton>
      </div>
      <br />

      <p>
        <strong>tag</strong>: ?string ('button') ['button', 'a', 'input', 'router-link', 'nuxt-link',
        'n-link', 'NuxtLink', 'NLink']<br />
        Sets the root element for the button to a valid tag. If using a, pass along the href="" which will be
        bound.
      </p>
      <div>
        <BaseButton tag="a" href="#">&lt;a&gt;</BaseButton>
        <BaseButton tag="input" value="&lt;input&gt;" />
      </div>
      <br />
      <p>
        Can also be used to create router-link or nuxt-link elements (and you can pass to="/path" for the link
        too).
      </p>
      <div>
        <BaseButton tag="router-link" to="#">&lt;router-link&gt;</BaseButton>
        <BaseButton tag="nuxt-link" to="#">&lt;nuxt-link&gt;</BaseButton>
      </div>
      <br />
    </Stack>
  </main>
</template>

<style scoped></style>
