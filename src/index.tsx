import { Host, Props, c } from "atomico";

function brand({ color, width }: Props<typeof brand>): Host<{
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

brand.props = {
  color: {
    type: String,
    value: "#232323",
  },
  width: {
    type: String,
    value: "20rem",
  },
};

export const Brand = c(brand);

customElements.define("atomico-brand", Brand);
