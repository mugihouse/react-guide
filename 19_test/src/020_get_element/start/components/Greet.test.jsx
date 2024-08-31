import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("should have h1 tag", () => {
  const { debug, container } = render(<Greet />);
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();

  // const radioEl = screen.getByRole("radio");
  // debug(radioEl);
  // expect(radioEl).toBeInTheDocument();

  // imageタグ取得
  // const imgEl = screen.getByRole("img");
  // debug(imgEl);

  // imageタグ取得（Alt属性で指定）
  // const imgEl = screen.getByAltText("React Logo");
  // debug(imgEl);

  // h1~h6タグまで検索(第二引数のオブジェクトでタグ内のメッセージを検索)
  // const headingEl = screen.getByRole("heading", { name: "こんにちは" });
  // debug(headingEl);

  // const h2El = container.querySelector("h2");
  // debug(h2El);

  const elByLabel = screen.getByLabelText("氏名");
  debug(elByLabel);

  const elByPlaceholder = screen.getByPlaceholderText("Code Mafia");
  debug(elByPlaceholder);
});
