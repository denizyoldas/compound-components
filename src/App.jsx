import Popover from "./components/popover";

function App() {
  return (
    <>
      <Popover>
        <Popover.Button>
          {({ isOpen }) => (
            <>
              <span>Popover</span>
              <span>{isOpen ? " Open" : ""}</span>
            </>
          )}
        </Popover.Button>
        <Popover.Panel>Panel</Popover.Panel>
      </Popover>
    </>
  );
}

export default App;
