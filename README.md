# @zaikoxander/react-repeat-render

## Overview

`@zaikoxander/react-repeat-render` is a simple React component that helps you render components multiple times using a render prop pattern. It provides a more declarative way to render multiple components for a specified number of times.

## Installation

To install the package, use npm or pnpm:

```sh
npm i @zaikoxander/react-repeat-render
```
or
```sh
pnpm i @zaikoxander/react-repeat-render
```

## Usage

Here is an example of how to use the `Repeat` component:

```jsx
import Repeat from '@zaikoxander/react-repeat-render';

export default function App() {
  return (
    <div>
      <Repeat
        times={5}
        render={(index) => <h1 key={index}>Hello World!</h1>}
      />
    </div>
  );
}
```

## Props

The `Repeat` component accepts the following props:

- `times`: The number of times to repeat the rendering.
- `render`: A function that receives its index as arguments and returns the JSX to render.
