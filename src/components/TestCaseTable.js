import TestCase from "./TestCase";
import {useEffect, useState} from "react";
import {Input} from "../util/styles";
import styled from "styled-components";

const FilterRow = styled.tr`
  th, td {
    padding: 8px;
  }
  input {
    margin: 0;
  }
`;

const TestCaseTable = ({tests, setTests, editTest}) => {
  const [filters, setFilters] = useState({ name: "", value: "" });
  const [filteredTests, setFilteredTests] = useState([...tests]);

  const sortTests = () => {

  }

  const filterTests = () => {
    console.log("filtering...");

    setFilteredTests(tests.filter(test =>
      test.name.toLowerCase().includes(filters.name.toLowerCase()) && test.value.toLowerCase().includes(filters.value.toLowerCase())));
  }

  const updateFilters = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFilters(prevState => ({...prevState, [name]: value }));
    }
  }

  useEffect(() => {
    filterTests();
  }, [filters]);

  useEffect(() => {
    setFilteredTests([...tests]);
  }, [tests]);

  return (
    <div>
      <div>
      <table>
        <thead>
        <tr>
          <th>Customer</th>
          <th style={{maxWidth: "250px"}}>Text to Find</th>
          <th className="centered">Failures</th>
          <th className="centered">Result</th>
          <th>Time of Previous Run</th>
          <th/>
        </tr>
        <FilterRow>
          <th><Input name="name" value={filters.name} onChange={updateFilters}/></th>
          <th><Input name="value" value={filters.value} onChange={updateFilters}/></th>
          <th/>
          <th/>
          <th/>
          <th/>
        </FilterRow>
        </thead>
        <tbody>
        {
          filteredTests.map(test =>
            <TestCase editTest={editTest} key={test.id} testCase={test} setTests={setTests}/>)
        }
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default TestCaseTable;