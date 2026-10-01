/* ================================= */
/* PAGE LOAD                         */
/* ================================= */

window.onload = function () {

    /*
        Your original count-up date.
    */

    countUpFromTime(
        "April 21, 2023 13:35:00",
        "counter"
    );


    /*
        Create the falling
        pixel maple leaves.
    */

    createAutumnLeaves();

};



/* ================================= */
/* COUNT-UP CLOCK                    */
/* ================================= */

function countUpFromTime(
    countFrom,
    id
) {

    countFrom =
        new Date(
            countFrom
        ).getTime();


    var now =
        new Date();


    var startDate =
        new Date(
            countFrom
        );


    var timeDifference =
        now -
        startDate;


    var millisecondsInADay =
        60 *
        60 *
        1000 *
        24;


    var millisecondsInAnHour =
        60 *
        60 *
        1000;



    /* ================================= */
    /* CALCULATE TIME                    */
    /* ================================= */

    var days =
        Math.floor(
            timeDifference /
            millisecondsInADay
        );


    var years =
        Math.floor(
            days /
            365
        );


    if (
        years >= 1
    ) {

        days =
            days -
            (
                years *
                365
            );

    }


    var hours =
        Math.floor(

            (
                timeDifference %
                millisecondsInADay
            )

            /

            millisecondsInAnHour

        );


    var mins =
        Math.floor(

            (
                (
                    timeDifference %
                    millisecondsInADay
                )

                %

                millisecondsInAnHour
            )

            /

            (
                60 *
                1000
            )

        );


    var secs =
        Math.floor(

            (
                (
                    (
                        timeDifference %
                        millisecondsInADay
                    )

                    %

                    millisecondsInAnHour
                )

                %

                (
                    60 *
                    1000
                )
            )

            /

            1000

        );



    /* ================================= */
    /* ELEMENTS                          */
    /* ================================= */

    var yearID =
        document.getElementById(
            "year"
        );


    var dayID =
        document.getElementById(
            "day"
        );


    var hourID =
        document.getElementById(
            "hour"
        );


    var minID =
        document.getElementById(
            "minute"
        );


    var secID =
        document.getElementById(
            "second"
        );



    /* ================================= */
    /* YEARS                             */
    /* ================================= */

    if (
        years === 1
    ) {

        yearID.innerHTML =
            years +
            " Year";

    }

    else {

        yearID.innerHTML =
            years +
            " Years";

    }



    /* ================================= */
    /* DAYS                              */
    /* ================================= */

    if (
        days === 1
    ) {

        dayID.innerHTML =
            days +
            " Day";

    }

    else {

        dayID.innerHTML =
            days +
            " Days";

    }



    /* ================================= */
    /* HOURS                             */
    /* ================================= */

    if (
        hours === 1
    ) {

        hourID.innerHTML =
            hours +
            " Hour";

    }

    else {

        hourID.innerHTML =
            hours +
            " Hours";

    }



    /* ================================= */
    /* MINUTES                           */
    /* ================================= */

    if (
        mins === 1
    ) {

        minID.innerHTML =
            mins +
            " Minute";

    }

    else {

        minID.innerHTML =
            mins +
            " Minutes";

    }



    /* ================================= */
    /* SECONDS                           */
    /* ================================= */

    if (
        secs === 1
    ) {

        secID.innerHTML =
            secs +
            " Second";

    }

    else {

        secID.innerHTML =
            secs +
            " Seconds";

    }



    /* ================================= */
    /* ORIGINAL SPECIAL CONDITION        */
    /* ================================= */

    if (
        years >= 1 &&
        days === 0
    ) {

        document
            .getElementById(
                "subtitle"
            )
            .style
            .display =
                "inline-block";


        document
            .getElementById(
                "images"
            )
            .style
            .display =
                "inline-block";

    }



    /* ================================= */
    /* UPDATE EVERY SECOND               */
    /* ================================= */

    clearTimeout(
        countUpFromTime.interval
    );


    countUpFromTime.interval =
        setTimeout(
            function () {

                countUpFromTime(
                    countFrom,
                    id
                );

            },

            1000
        );

}



/* ================================= */
/* AUTUMN LEAVES                     */
/* ================================= */

function createAutumnLeaves() {

    const leafLayer =
        document.getElementById(
            "leaf-layer"
        );


    if (
        !leafLayer
    ) {

        return;

    }



    /*
        Number of leaves visible
        in the animation.

        Keep this relatively low so
        the page stays minimalist.
    */

    const leafCount = 14;



    /*
        Four autumn colors.
    */

    const colors = [

        "orange",

        "burnt",

        "gold",

        "red"

    ];



    for (
        let i = 0;
        i < leafCount;
        i++
    ) {

        const leaf =
            document.createElement(
                "span"
            );


        leaf.classList.add(
            "pixel-leaf"
        );



        /* ================================= */
        /* COLOR                             */
        /* ================================= */

        const color =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        leaf.classList.add(
            color
        );



        /* ================================= */
        /* HORIZONTAL START                  */
        /* ================================= */

        const startX =
            Math.random() *
            window.innerWidth;



        /* ================================= */
        /* FALL SPEED                        */
        /* ================================= */

        /*
            6–11 seconds.

            Larger variation makes some
            leaves feel closer/farther.
        */

        const duration =
            6 +
            Math.random() *
            5;



        /* ================================= */
        /* START DELAY                       */
        /* ================================= */

        /*
            Negative delay means the page
            begins with leaves already at
            different heights.
        */

        const delay =
            -Math.random() *
            duration;



        /* ================================= */
        /* LEAF SIZE                         */
        /* ================================= */

        const scale =
            0.65 +
            Math.random() *
            0.9;



        /* ================================= */
        /* OPACITY                           */
        /* ================================= */

        const opacity =
            0.50 +
            Math.random() *
            0.45;



        /* ================================= */
        /* OLD-GAME FRAME RATE               */
        /* ================================= */

        /*
            Roughly 8–11 visual updates
            every second.

            Example:

            8 second animation
            x 9 FPS
            = 72 visible steps.

            This deliberately makes the
            leaf "jump" between frames.
        */

        const framesPerSecond =
            8 +
            Math.floor(
                Math.random() *
                4
            );


        const frames =
            Math.round(
                duration *
                framesPerSecond
            );



        /* ================================= */
        /* WIND / SIDE-TO-SIDE DRIFT         */
        /* ================================= */

        /*
            Different values at each stage
            make the leaf weave rather than
            falling diagonally in one line.
        */

        const driftOne =
            randomDrift(
                25,
                85
            );


        const driftTwo =
            randomDrift(
                20,
                100
            );


        const driftThree =
            randomDrift(
                30,
                110
            );


        const driftFour =
            randomDrift(
                20,
                90
            );


        const driftFive =
            randomDrift(
                25,
                120
            );



        /* ================================= */
        /* APPLY VARIABLES                   */
        /* ================================= */

        leaf.style.setProperty(
            "--start-x",
            `${startX}px`
        );


        leaf.style.setProperty(
            "--fall-duration",
            `${duration}s`
        );


        leaf.style.setProperty(
            "--fall-delay",
            `${delay}s`
        );


        leaf.style.setProperty(
            "--leaf-scale",
            scale.toFixed(2)
        );


        leaf.style.setProperty(
            "--leaf-opacity",
            opacity.toFixed(2)
        );


        leaf.style.setProperty(
            "--fall-frames",
            frames
        );


        leaf.style.setProperty(
            "--drift-one",
            `${driftOne}px`
        );


        leaf.style.setProperty(
            "--drift-two",
            `${driftTwo}px`
        );


        leaf.style.setProperty(
            "--drift-three",
            `${driftThree}px`
        );


        leaf.style.setProperty(
            "--drift-four",
            `${driftFour}px`
        );


        leaf.style.setProperty(
            "--drift-five",
            `${driftFive}px`
        );



        leafLayer.appendChild(
            leaf
        );

    }

}



/* ================================= */
/* RANDOM WIND                       */
/* ================================= */

function randomDrift(
    minimum,
    maximum
) {

    const amount =
        minimum +
        Math.random() *
        (
            maximum -
            minimum
        );


    /*
        Randomly drift
        left or right.
    */

    return (
        Math.random() <
        0.5
    )

        ? -amount

        : amount;

}
