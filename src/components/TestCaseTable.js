import TestCase from "./TestCase";
import {useEffect, useState} from "react";
import {SmallInput} from "../util/styles";
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
  const [filters, setFilters] = useState({name: "", url: ""});
  const [filteredTests, setFilteredTests] = useState([...tests]);

  const sortTests = () => {

  }

  const filterTests = () => {
    console.log("filtering...");

    setFilteredTests(tests.filter(test =>
      test
        .name
        .toLowerCase()
        .includes(filters.name.toLowerCase())
      && test
        .url
        .toLowerCase()
        .includes(filters.url.toLowerCase())));
  }

  const updateFilters = (e) => {
    if (e && e.target) {
      const {name, value} = e.target;
      setFilters(prevState => ({...prevState, [name]: value}));
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
            <th>Status</th>
            <th>Last Checked</th>
            <th>Name</th>
            <th>Domain</th>
            <th>Expiration</th>
            <th>Expires in (days)</th>
            <th/>
            <th/>
          </tr>
          <FilterRow>
            <th/>
            <th/>
            <th><SmallInput name="name" value={filters.name} onChange={updateFilters}/></th>
            <th/>
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
