import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Message from "./Message";

describe("Messageコンポーネントの動作確認", () => {
  describe("初期表示の正常性確認", () => {
    test("input要素が存在しているか", () => {
      render(<Message />);
      const inputEl = screen.getByRole("textbox");

      expect(inputEl).toBeInTheDocument();
    });
  });

  describe("画面操作時の正常性確認", () => {
    test("inputのstateが更新され、値が正しく更新されるか", async () => {
      const user = userEvent.setup();
      render(<Message />);
      const inputEl = screen.getByRole("textbox");

      await user.type(inputEl, "メッセージ");

      expect(inputEl.value).toBe("メッセージ");
    });
  });
});
