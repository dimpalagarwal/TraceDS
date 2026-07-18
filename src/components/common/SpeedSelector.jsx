import {
    useSpeed,
} from "../../context/SpeedContext";

function SpeedSelector() {

    const {
        speed,
        setSpeed,
    } = useSpeed();

    const speeds = [
        0.5,
        1,
        2,
        4,
    ];

    return (

        <div className="mt-5">

            <p
                className="mb-3 text-sm"
                style={{
                    color:
                    "var(--muted)"
                }}
            >
                Animation Speed
            </p>

            <div className="flex gap-2">

                {
                    speeds.map(
                        value => (

                            <button
                                key={value}
                                onClick={() =>
                                    setSpeed(
                                        value
                                    )
                                }
                                className="
                                px-3
                                py-2
                                rounded-lg
                                text-sm
                                "
                                style={{
                                    background:
                                        speed === value
                                        ?
                                        "#10B981"
                                        :
                                        "var(--surface)",

                                    color:
                                        speed === value
                                        ?
                                        "white"
                                        :
                                        "var(--heading)",

                                    border:
                                        "1px solid var(--border)",
                                }}
                            >
                                {value}x
                            </button>

                        )
                    )
                }

            </div>

        </div>

    );
}

export default SpeedSelector;