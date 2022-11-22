import React from "react";
import styled from "styled-components";
import {BACKGROUND} from "../util/styles/Colors";


const ExpandableTR = styled.tr` 
  transition: .5s;
  .collapsed-content {
    transition: .5s;
    max-height: 0px;
    overflow: hidden;
  }
  .expanded-content {
    transition: .5s;
    max-height: 200px;
  }
  td {
    transition: .5s;
    padding-top: ${({expanded}) => expanded ? '8px' : '0'};
    padding-bottom: ${({expanded}) => expanded ? '8px' : '0'};
  }
  border-color: ${({expanded}) => expanded ? 'black' : BACKGROUND};
  transition border-color ease-in .5s;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 16px;
  align-items: center;
  pre {
    margin: .75em 0;
  }
`;

const ExpandableTableRow = ({ testCase, isExpanded }) => (
  <ExpandableTR expanded={isExpanded}>
    <td colSpan="100">
      <div className={isExpanded ? 'expanded-content' : 'collapsed-content'}>
        <h3>
          {testCase.name}
        </h3>
        <Grid>
          <div>
            Test URL:
          </div>
          <div>
            <a target="_blank" style={{color: "lightgreen"}} href={testCase.url}>
              {testCase.url}
            </a>
          </div>
        </Grid>
      </div>
    </td>
  </ExpandableTR>
);

export default ExpandableTableRow;
