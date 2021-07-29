Usage:

Just import the component like so:
```js

export default ({ children }) => (
  <Flex justify="center">
    <EnlargedImage />
    <GridContainer width="100%" height="100%" maxWidth="2000px">
      <Box className="markdown" gridColumn="content-begin / content-end">
        {children}
      </Box>
    </GridContainer>
  </Flex>
);

```

Any image with the className of "enlargeable" will be enlarged when clicked on.
