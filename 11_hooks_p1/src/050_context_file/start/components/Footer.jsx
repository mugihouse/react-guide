import { useUpdateTheme } from "../context/themeContext";

const Footer = () => {
  const setTheme = useUpdateTheme();

  console.log("フッター");
  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
