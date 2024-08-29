"use client";

import { createItem } from "@/actions/createItem";
import { useState } from "react";

export default function ArticleForm() {
  const [newId, setNewId] = useState();
  const [newTitle, setNewTitle] = useState();

  return (
    // server actionを使用するときにはaction属性にサーバでの処理を定義した関数を設定
    // method属性を定義するとエラーになるので注意
    <form action={createItem}>
      <div>
        <label>
          {" "}
          Id:
          <input
            type="number"
            name="id"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Title:
          <input
            name="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">送信</button>
      <div style={{ color: "red" }}></div>
    </form>
  );
}
