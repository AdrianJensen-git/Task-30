/*
Task:                App.js
Assigned to:         Admin
Date assigned:       20th July 2024
Due date:            20th July 2024
Task complete?       Yes
Task description:    Create an html file called api.js
*/

import renderer from 'react-test-renderer';
import App from './App';

//-----------------------------------------------------------
// Below is my snapshot test for my component.
test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});


// Below is my test to see if the fetch function works.
test('the fetch function works', async () => {
  
  fetch(`https://api.github.com/users/AdrianJensen-git`)
  .then(res => res.json())
  .then((result) => {
    const userName = result.login;
    console.log(userName);
    expect(userName).toBe('AdrianJensen-git');
  })

})
