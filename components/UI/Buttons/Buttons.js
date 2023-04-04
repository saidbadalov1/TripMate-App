export const GradientButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`outline-none shadow-xl px-4 py-1 text-white rounded bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500  font-bold  ${props?.className}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export const SimpleButton = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`outline-none shadow-xl px-4 py-1 text-white rounded font-bold  ${props.className}`}
    >
      {props.children}
    </button>
  );
};
