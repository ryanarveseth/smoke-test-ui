import React, {useState} from 'react';
import styled from "styled-components";
import {deleteTestById, runOneTestByTestId} from "../services/TestService";
import {ClockLoader} from "react-spinners";
import {BUTTON_BLUE, GREEN, RED} from "../util/styles/Colors";
import {BiChevronDown} from "react-icons/bi";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import {getDateDiff, getDateTime, getShortDate} from "../util/DateUtil";
import {Dot} from "../util/styles";


const StyledClockLoader = styled(ClockLoader)`
  margin: 0 auto;
`;

const TestButton = styled.button`
  color: white;
  background: transparent;
  height: 32px;
  border-radius: 6px;
  border: 2px solid ${GREEN};
  padding: 4px 16px;
  transition: background .25s;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    transition .25s;
    background: ${GREEN};
  }
`;

const Relative = styled.div`
  position: relative;
  height: fit-content;
  transition: .25s;
  .expanded {
    transform: rotate(-180deg);
  }
  margin: 0 auto;
`;

const Chevron = styled(BiChevronDown)`
  font-size: 25px;
  width: 25px;
  margin: 0 auto;
  transition: .25s;
  color: white;
`;

const EditButton = styled(AiFillEdit)`
  width: fit-content;
  margin-left: 16px;
  display: inline-block;
  cursor: pointer;
  color: ${BUTTON_BLUE};
`;

const DeleteButton = styled(AiFillDelete)`
  width: 25px;
  margin-left: 12px;
  position: relative;
  top: 2px;
  display: inline-block;
  cursor: pointer;
  color: ${RED};
`;


const TestCase = ({testCase, setTests, editTest}) => {
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [deleteTestActive, setDeleteTestActive] = useState(false);

  const runTest = () => {
    const run = async () => {
      setLoading(true);
      const result = await (await runOneTestByTestId(testCase.id)).json();
      setLoading(false);
      const {passed, lastChecked} = result[0];
      setTests(prevState => prevState
        .map(test => test.id === testCase.id
          ? ({
            ...test,
            previousResult: passed
              ? "passed"
              : "failed",
            lastChecked
          })
          : test
        ));
    }

    if (!loading) {
      run();
    }
  }

  const deleteTest = () => {
    if (testCase && testCase.id) {
      deleteTestById(testCase.id).then(result => {
        setTests(prevState => prevState.filter(test => test.id !== testCase.id));
      });
    }
  }


  return <>
    <tr>
      {/*<td>*/}
      {/*  <Relative style={{width: "fit-content"}}>*/}
      {/*    <Chevron className={'hoverable ' + (expanded ? 'expanded' : '')}*/}
      {/*             result={testCase.previousResult}*/}
      {/*             onClick={() => setExpanded(prevState => !prevState)}*/}
      {/*    />*/}
      {/*  </Relative>*/}
      {/*</td>*/}
      <td className="centered"><Dot status={testCase?.statusCode}/></td>
      <td>{getDateTime(testCase.lastChecked)}</td>
      <td>{testCase.name}</td>
      <td>{testCase?.whoIsData?.domain}</td>
      <td>{getShortDate(testCase?.whoIsData?.expiresOn)}</td>
      <td className="centered">{getDateDiff(testCase?.whoIsData?.expiresOn)}</td>
      <td>
        <EditButton className="hoverable" size={16} onClick={() => editTest(testCase.id)}/>
        <DeleteButton className="hoverable" size={20} onClick={() => setDeleteTestActive(true)}/>
        <DeleteConfirmationModal onDelete={deleteTest}
                                 setActive={setDeleteTestActive}
                                 active={deleteTestActive}/>
      </td>
    </tr>
    {/*<ExpandableTableRow testCase={testCase} isExpanded={expanded} />*/}
  </>
}

export default TestCase;
