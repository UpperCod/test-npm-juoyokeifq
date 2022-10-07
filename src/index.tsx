import { Host, Props, c } from "atomico";

function testNpm({ color, width }: Props<typeof testNpm>): Host<{
  onChange: CustomEvent<number>;
}> {
  return (
    <host shadowDom>
      <h1>@atomico/exports example!</h1>
      <strong>
        color:{color}
        <br />
      </strong>
      <strong>width:{width}</strong>
    </host>
  );
}

testNpm.props = {
  color: {
    type: String,
    value: "#232323",
  },
  width: {
    type: String,
    value: "20rem",
  },
};

export const TestNpm = c(testNpm);

customElements.define("test-npm-juoyokeifq", TestNpm);
