import './wrapper.css';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const Wrapper = ({ children }: Props) => {
  return <div className="wrapper">{children}</div>;
};
