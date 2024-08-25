import { useEffect } from "react";
import axios from "axios";

const Example = () => {
  useEffect(() => {
    // getメソッドで返ってくる値はPromiseオブジェクト
    // thenで繋ぐかawaitを記述
    axios.get("http://localhost:3003/user").then((res) => {
      console.log(res.data);
    });

    // const res = axios.get("http://localhost:3003/user");
    // console.log(res)と記述するとresを受け取る前にconsole.logが実行されてしまう
  }, []);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const res = await axios.get("http://localhost:3003/user");
  //     console.log(res.data);
  //   };
  //   getUser();
  // });
  return <></>;
};

export default Example;
