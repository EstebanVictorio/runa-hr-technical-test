import styled from "styled-components";

const StyledDashboardPanels = styled.div`
  bottom: 0;
  width: 100vw;
  display: flex;
  position: absolute;
  justify-content: space-between;

  .left-panel,
  .right-panel {
    border: 1px solid skyblue;
    width: 100px;
    height: 100px;
  }
`;

const DashboardPanels = () => (
  <StyledDashboardPanels>
    <div className="left-panel" />
    <div className="right-panel" />
  </StyledDashboardPanels>
);

export default DashboardPanels;
