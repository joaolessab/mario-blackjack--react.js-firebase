declare module "*.svg" {
  const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const src: string;
  export { ReactComponent, src };
}
