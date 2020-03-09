import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  // intercept ajax calls
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [
      {
        name: "Fetched #1"
      },
      {
        name: "fetched #2"
      }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // attempt to render the entire app
  // find the fetchComments button and click it
  // expect to find a list of comments

  // NOTE the done callback indicates that the test is done

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find(".fetch-comments").simulate("click");
  // introduce a tiny pausse for async

  //moxios.wait knows how async calls behave
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
