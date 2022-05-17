import { render, screen } from "@testing-library/react";
import RemainTimeBar from "./RemainTimeBar";

describe("<RemainTimeBar/> should", () => {
    
    test("render properly", () => {
        render(<RemainTimeBar globalState={{}}/>)
        const remainTimeBar = screen.getByTestId("remain-time-bar");
        expect(remainTimeBar).toBeInTheDocument();
    })

    test("has length proportional to remain time", () => {

        render(
            <RemainTimeBar 
                globalState={{
                    initLearnTime: 200,
                    isLearnPhaseActive: true,
                }}
                remainLearnTime={100}
            />
        )
        const remainTimeBarStroke = screen.getByTestId("remain-time-bar__stroke");
        const remainPath = Number(remainTimeBarStroke.style.strokeDashoffset);
        expect(remainPath).toBe(1458/2)

    })
})