export interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps): JSX.Element {
  return <div className="container mx-auto px-4">{props.children}</div>;
}
