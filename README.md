# react-hook-mouse

A React hook to access data from the mouse events.

## Installation

Using `npm`:

```sh
npm install --save react-hook-mouse
```

Using `yarn`:

```sh
yarn add react-hook-mouse
```

## Usage

```jsx
import React from 'react'
import useMouse from 'react-hook-mouse'

const ComponentWithMouse = () => {
  const mouse = useMouse()

  return (
    <ul>
      <li>
        Mouse position in viewport:
        {mouse.position.client.x} : {mouse.position.client.y}
      </li>
      <li>
        Mouse position on page:
        {mouse.position.page.x} : {mouse.position.page.y}
      </li>
      <li>
        Mouse position on screen:
        {mouse.position.screen.x}: {mouse.position.screen.y}
      </li>
      <li>
        Mouse movement:
        {mouse.movement.x} : {mouse.movement.y}
      </li>
      <li>Left button was pressed: {mouse.buttons.left}</li>
      <li>Right button was pressed: {mouse.buttons.right}</li>
      <li>Middle button was pressed: {mouse.buttons.middle}</li>
      <li>Alt key was pressed: {mouse.keyboard.alt}</li>
      <li>Ctrl key was pressed: {mouse.keyboard.ctrl}</li>
      <li>Meta key was pressed: {mouse.keyboard.meta}</li>
      <li>Shift key was pressed: {mouse.keyboard.shift}</li>
    </ul>
  )
}
```

## Caveats

Data in `mouse.keyboard` is alrways read from a `MouseEvent` and therefore it will only get updated on mouse events, not when the keys are actually pressed on the keyboard.

## Contributions

Contributions are welcome. File bug reports, create pull requests, feel free to reach out at tothab@gmail.com.

## Licence

LGPL-3.0
