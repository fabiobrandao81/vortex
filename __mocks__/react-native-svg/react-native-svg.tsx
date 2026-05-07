const React = require('react');
const mock = ({children}: {children?: React.ReactNode}) =>
  React.createElement('svg', null, children);

export default mock;
export const Circle = mock;
export const Path = mock;
export const Line = mock;
export const Rect = mock;
export const G = mock;