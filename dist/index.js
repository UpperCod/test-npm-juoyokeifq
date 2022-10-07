// src/index.tsx
import { c } from "atomico";
import { jsx, jsxs } from "atomico/jsx-runtime";
function testNpm({ color, width }) {
  return /* @__PURE__ */ jsxs("host", {
    shadowDom: true,
    children: [
      /* @__PURE__ */ jsx("h1", {
        children: "@atomico/exports example!"
      }),
      /* @__PURE__ */ jsxs("strong", {
        children: [
          "color:",
          color,
          /* @__PURE__ */ jsx("br", {})
        ]
      }),
      /* @__PURE__ */ jsxs("strong", {
        children: [
          "width:",
          width
        ]
      })
    ]
  });
}
testNpm.props = {
  color: {
    type: String,
    value: "#232323"
  },
  width: {
    type: String,
    value: "20rem"
  }
};
var TestNpm = c(testNpm);
customElements.define("test-npm-juoyokeifq", TestNpm);
export {
  TestNpm
};
