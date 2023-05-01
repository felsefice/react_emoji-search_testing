import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom/extend-expect';
import Header from "../Header";


describe("Header Testi", () => {
    let header;

    beforeEach(() => {
        act(() => {
            render(<Header />);
        });
        header = screen.getByText("Emoji Search");
    });

    test("Başlık kısmı başarılı bir şekilde render edildi mi?", ()=>{

        expect(header).toBeInTheDocument();
    });

});