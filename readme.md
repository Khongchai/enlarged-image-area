Usage:

Just import the component like so:
```js

export default ({ children }) => (
   <>
    <EnlargedImage />
    <Flex justify="center">
      <GridContainer width="100%" height="100%" maxWidth="2000px">
        <Box className="markdown" gridColumn="content-begin / content-end">
          {children}
        </Box>
      </GridContainer>
    </Flex>
  </>
);

```

Any image with the className of "enlargeable" will be enlarged when clicked on.

The component is a fixed-position element, so just place practically anywhere. However, it's still better to place it outside of its sibling's group if possible. It may still affect the flow of elements that rely on siblings relationship like the lobotomzied-owl selector or Flex.
