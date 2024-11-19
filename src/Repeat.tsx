import { ReactNode } from 'react';

interface RepeatProps {
  times: number
  render: (index: number) => ReactNode
}

export default function Repeat({ times, render }: RepeatProps) {
  return Array.from({ length: times }, (_, index) => render(index))
}
