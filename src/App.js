import './App.scss';
import {useEffect, useState} from "react";
import {getAllTests} from "./services/TestService";
import Header from "./components/Header";
import TestCaseTable from "./components/TestCaseTable";
import styled from "styled-components";
import Form from "./components/Form";
import {BUTTON_BLUE} from "./util/styles/Colors";
import Footer from "./components/Footer";

const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 16px;
`;

const AddNewButton = styled.button`
  width: fit-content;
  padding: 8px 16px;
  border: 2px solid ${BUTTON_BLUE};
  border-radius: 8px;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: background .25s;
  font-size: 16px;
  &:hover {
    transition .25s;
    background: ${BUTTON_BLUE};
  }
  box-shadow: 2px 4px 4px #111111;
`;

const App = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState({});
  const [updateTests, setUpdateTests] = useState(false);
  const [test, setTest] = useState({});
  const [showForm, setShowForm] = useState(false);

  const editTest = (id) => {
    const foundTest = {...tests.find(t => t.id === id)};
    console.log("found test: ", foundTest);
    setTest(foundTest);
  }

  useEffect(() => {
    if (test?.id) {
      setShowForm(true);
    }
  }, [test]);


  const reset = () => {
    setShowForm(false);
    setTest({});
  }

  const closeForm = () => {
    reset();
  }

  const submitForm = () => {
    reset();
    setUpdateTests(true);
  }

  useEffect(() => {
    const getTests = async () => {
      const theTests = await (await getAllTests()).json();
      setTests(theTests);
      setUpdateTests(false);
    }

    if (!tests.length || updateTests) {
      getTests();
    }
  }, [updateTests]);

  useEffect(() => {
    if (tests && tests.length) {
      setLoading(prevState => {
        const newLoading = {...prevState};

        tests.forEach(test => {
          if (!newLoading.hasOwnProperty(test.id)) {
            newLoading[test.id] = false;
          }
        })
      });
    }
  }, [tests]);

  return (
    <div className="App">
      <Header/>
      <Container>
        <AddNewButton className="hoverable" onClick={() => setShowForm(true)}>
          Add URL
        </AddNewButton>
        <TestCaseTable tests={tests} editTest={editTest} setTests={setTests} setSelectedTest={setTest}/>
        {
          showForm &&
          <Form test={test}
                close={closeForm}
                onSubmit={submitForm}
          />
        }
        <Footer />
      </Container>
    </div>
  );
}

export default App;
