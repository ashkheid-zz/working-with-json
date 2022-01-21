let element = 'section[ashkan]';

function selector(str) {
  let hasElement, hasAttribute, element, attribute, arr, items;

  const validArgRegex = /^([A-Za-z0-9]+|\[)+[A-Za-z0-9]([A-Za-z0-9]+|\])$/g;
  try {
    if (!validArgRegex.test(str)) {
      throw new Error("Please check the element you've passed in!");
    }

    items = str.split(/[\[\]]/g).filter(Boolean); //trimming the array after splitting it
    console.log(items);

    switch (str.indexOf('[')) {
      case 0:
        // 0: it is only an attribute
        [hasElement, hasAttribute, element, attribute] = [
          false,
          true,
          null,
          items[0],
        ];
        break;
      case -1:
        // -1: it is only an element
        [hasElement, hasAttribute, element, attribute] = [
          true,
          false,
          items[0],
          null,
        ];
        break;
      default:
        // any positive number: it is a element with an attribute
        [hasElement, hasAttribute, element, attribute] = [
          true,
          true,
          items[0],
          items[1],
        ];
        break;
    }

    console.log(hasElement, hasAttribute, element, attribute);
  } catch (err) {
    err.name = 'Invalide Selector Error';
    console.error(err.stack);
  }
}

selector(element);
