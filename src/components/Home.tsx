interface HomeProps {
  title: string;
}

const Home = (props: HomeProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Home;
