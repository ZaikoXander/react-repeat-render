# @zaikoxander/react-map-render

## Overview

`@zaikoxander/react-map-render` is a simple React component that helps you render arrays using a render prop pattern. It provides a clean and reusable way to map over arrays and render their items.

## Installation

To install the package, use npm or pnpm:

```sh
npm i @zaikoxander/react-map-render
```
or
```sh
pnpm i @zaikoxander/react-map-render
```

## Usage

Here is an example of how to use the `Map` component:

```jsx
import Map from '@zaikoxander/react-map-render';

const items = ['Item 1', 'Item 2', 'Item 3'];

export default function App() {
  return (
    <div>
      <h1>Items List</h1>
      <Map
        array={items}
        render={(item, index) => (
          <div key={index}>{item}</div>
        )}
      />
    </div>
  );
}
```

## Props

The `Map` component accepts the following props:

- `array`: An array of items to map over.
- `render`: A function that receives the item and its index as arguments and returns the JSX to render.

## Example

Here is a more detailed example:

```tsx
import Map from '@zaikoxander/react-map-render';

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

export default function UserList() {
  return (
    <div>
      <h1>User List</h1>
      <Map
        array={users}
        render={({ id, name }, index) => (
          <div key={id}>
            {index + 1}. {name}
          </div>
        )}
      />
    </div>
  );
}
```
