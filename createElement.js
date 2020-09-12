function h(tag, props, ...children) {
  //creating an element with the input for tag e.g. "h2" will create a h2 element.
  const element = document.createElement(tag);
  //withProps is an element? assigning the props to the element stored in {}
  const withProps = Object.assign(element, props);
  /*appending children of the element to the element and it will contain all 
elements of the child as children of the parent element you append it to.
Object.assign copies all properties from the right object onto the left. So in this case
 it'll copy all the properties in the props object onto the element (DOM nodes are objects too 🤯). */
  withProps.append(...children);
  return withProps;
}

export default h;
