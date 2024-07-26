import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="順番通り渡す">
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container>
      <Container
        title="個別で渡す"
        first={<Profile {...profile[1]} />}
        second={<Profile {...profile[0]} />}
      />
    </div>
  );
};

export default Example;
