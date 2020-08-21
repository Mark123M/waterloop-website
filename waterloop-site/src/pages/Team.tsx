import React from "react";
import Hero from "components/Hero/General"
import styled from 'styled-components'
import OurTeam from "components/OurTeam"
import TeamsDisplayer from "components/TeamsDisplayer"

const ContentContainer = styled.div`
  display: block;
  max-width: 1080px;
  margin: 0 auto;
`

class Teams extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Hero
          title="Meet The Team"
          description="Learn about our geese."
          anchor="#team"
        ></Hero>
        <div id={"#team"}>
          <ContentContainer>
            <OurTeam/>

            <TeamsDisplayer initFilterSetting={0} />
          </ContentContainer>
        </div>
      </div>
    );
  }
};

export default Teams;
