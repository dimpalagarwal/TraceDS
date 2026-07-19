function ArrayCanvas({ array, activeIndex, accessValue, shiftIndex, operationText }) {
    const boxes = array;
    return (
        <>
            <h2 className="visualizer-heading"> Array Visualization </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
                {operationText && (
                    <div className="mb-4 sm:mb-6 rounded-xl border p-3 sm:p-4 md:p-5 text-center" style={{borderColor: "var(--border)", background: "var(--card)", color: "var(--heading)"}}>
                        {operationText}
                    </div>
                )}

                {array.length === 0 ? (
                    <p className="text-base sm:text-lg" style={{ color: "var(--muted)", }}>Array is Empty</p>
                ) : (
                    array.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg border flex items-center justify-center
          font-semibold text-base sm:text-lg transition-all duration-300 ${activeIndex === index? "bg-emerald-500 text-white scale-110": shiftIndex === index? "bg-blue-500 text-white": ""}`} style={{ borderColor: "var(--border)", color: activeIndex === index ? "white" : "var(--heading)", }} >
                                {item === null ? "_" : item}
                            </div>
                            <span className="mt-1 sm:mt-2 text-xs sm:text-sm" style={{ color: "var(--muted)", }}>
                                {index}
                            </span>
                        </div>
                    ))
                )}
            </div>

            {accessValue !== null && (
                <div className="mt-8 sm:mt-10 text-center">
                    <p className="text-base sm:text-lg font-medium" style={{ color: "var(--heading)", }}> Access Result </p>
                    <div className="mt-3 inline-flex items-center justify-center
            px-4 py-2 sm:py-6 sm:px-3 rounded-xl border  text-sm sm:text-base" style={{ borderColor: "var(--border)", color: "var(--primary)", }}>
                        Value = {accessValue}
                    </div>
                </div>
            )}
        </>
    );
}

export default ArrayCanvas;