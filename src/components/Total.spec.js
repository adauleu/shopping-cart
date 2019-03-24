import React from "react";
import { shallow } from "enzyme";
import Total from "./Total";

describe("Total component", () => {
  it("should display total", () => {
    //Given
    const total = "5";

    //When
    const totalComponent = shallow(<Total total={total} />);

    //Then
    expect(totalComponent.find("span").text()).toBe("TOTAL: 5 €");
  });
});
