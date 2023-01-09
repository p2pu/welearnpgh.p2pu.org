import React from 'react';
import { render } from 'react-dom';

import SearchProvider from 'p2pu-components/dist/Search/SearchProvider';
import LearningCircleSearch from 'p2pu-components/dist/LearningCircles/LearningCircleSearch';
import LearningCircleSignup from 'p2pu-components/dist/LearningCircleSignup/LearningCircleSignup';

import "p2pu-components/dist/build.css"

class App extends React.Component {

  constructor(props){
    super(props);
    this.handleLearningCircleSelection = this.handleLearningCircleSelection.bind(this);
    this.handleSignupDialogClose = this.handleSignupDialogClose.bind(this);
    this.state = {
      selectedLearningCircle: null,
    };
  }

  handleLearningCircleSelection(learningCircle) {
    console.log(`Clicked on ${learningCircle.url}`);
    this.setState({...this.state, selectedLearningCircle: learningCircle});
  }

  handleSignupDialogClose(learningCircle){
    this.setState({...this.state, selectedLearningCircle: null});
  }

  render() {
    return (
      <div>
        {
          this.state.selectedLearningCircle &&
            <LearningCircleSignup
              onCancel={this.handleSignupDialogClose}
              learningCircle={this.state.selectedLearningCircle}
              signUpUrl='https://learningcircles.p2pu.org/api/signup/'
            /> 
        }
        <div className={this.state.selectedLearningCircle?'d-none':''}>
          <SearchProvider
            initialState={{team_id: 28}}
            searchSubject={'learningCircles'}
            locale="en"
            onSelectResult={this.handleLearningCircleSelection}
          >
            <BrowseLearningCircles />
          </SearchProvider>
        </div>
      </div>
    );
  }
};

render(<App />, document.getElementById("learning-circle-search"));
