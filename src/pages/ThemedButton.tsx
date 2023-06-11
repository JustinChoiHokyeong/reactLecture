interface IThemedButton {
  theme: string;
  label: string;
}

const ThemedButton: React.FC<IThemedButton> = ({
  theme,
  label,
  ...restProps
}) => {
  // const addNumber = (a: number, b: number): number => {
  //   return a + b;
  // };
  return (
    <button className={`btn btn-${theme}`} {...restProps}>
      {label}
    </button>
  );
};

export default ThemedButton;
