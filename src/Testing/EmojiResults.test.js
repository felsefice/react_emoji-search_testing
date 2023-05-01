import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import App from "../App";


describe("Emoji Results Testi", () => {


  beforeEach(() => {
    act(() => {
      render(<App />)
    });
  });

  test("Uygulama ilk açıldığında emoji listesi başarılı bir şekilde render ediliyor mu?", () => {

    const emojiList = [
      {
        "title": "100",
        "symbol": "💯",
        "keywords":
          "hundred points symbol symbol wow wow win win perfect perfect parties parties"
      },
      {
        "title": "1234",
        "symbol": "🔢",
        "keywords": "input symbol for numbers symbol"
      },
      {
        "title": "Grinning",
        "symbol": "😀",
        "keywords": "grinning face happy smiley emotion emotion"
      },
    ];
    emojiList.map((emoji) => {
      expect(screen.getByText(emoji.title)).toBeInTheDocument()
    })
  });

});