import { ReactNode } from 'react';
interface RepeatProps {
    times: number;
    render: (index: number) => ReactNode;
}
export default function Repeat({ times, render }: RepeatProps): ReactNode[];
export {};
