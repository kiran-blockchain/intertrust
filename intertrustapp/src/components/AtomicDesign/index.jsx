// Atoms
const Button = ({ label }) => <button>{label}</button>;
const Input = () => <input type="text" />;

// Molecules
const SearchForm = () => (
  <div>
    <Input />
    <Button label="Search" />
  </div>
);

// Organisms
const Header = () => (
  <header>
    <h1>My App</h1>
    <SearchForm />
  </header>
);

// Templates
const MainTemplate = (props) => (
  <div>
    <Header />
    <main>{props.children}</main>
  </div>
);

// Pages
const HomePage = () => (
  <MainTemplate>
    <p>Welcome to my homepage!</p>
  </MainTemplate>
);
