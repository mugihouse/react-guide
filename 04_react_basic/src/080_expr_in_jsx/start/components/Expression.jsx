import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const arry = ["item1", "item2", "item3"];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello JSX</h3>;
  const bool = true;

  return (
    <div className="expression">
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
      <h3>{hello("Hello")}</h3>
      {/* 画面に表示されない */}
      {jsx}
      {<h3>Hello JSX</h3>}
      {bool}
    </div>
  );
};

export default Expression;
