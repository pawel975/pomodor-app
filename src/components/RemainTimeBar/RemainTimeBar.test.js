import { render, screen} from "../../testUtils";
import RemainTimeBar from "./RemainTimeBar";

describe("<RemainTimeBar/> should", () => {

    test("render properly", () => {
        render(<RemainTimeBar globalState={{}}/>)
        const remainTimeBar = screen.getByTestId("remain-time-bar");
        expect(remainTimeBar).toBeInTheDocument();
    })
})