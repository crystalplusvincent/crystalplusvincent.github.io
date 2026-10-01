/* ================================= */
/* PAGE LOAD                         */
/* ================================= */

window.onload = function () {

    /*
        Original Chicago count-up clock.
    */

    countUpFromTime(
        "April 21, 2023 13:35:00",
        "counter"
    );


    /*
        Create autumn leaves.
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
    /* CLOCK ELEMENTS                    */
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

        var subtitle =
            document.getElementById(
                "subtitle"
            );


        var images =
            document.getElementById(
                "images"
            );


        if (subtitle) {

            subtitle.style.display =
                "inline-block";

        }


        if (images) {

            images.style.display =
                "inline-block";

        }

    }



    /* ================================= */
    /* UPDATE CLOCK                      */
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
/* CREATE AUTUMN LEAVES              */
/* ================================= */

function createAutumnLeaves() {

    const leafLayer =
        document.getElementById(
            "leaf-layer"
        );


    if (!leafLayer) {
        return;
    }



    /*
        Keep this relatively sparse.

        Enough leaves for atmosphere
        without covering the counter.
    */

    const leafCount = 16;



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
        /* START POSITION                    */
        /* ================================= */

        /*
            Actual CSS position instead of
            transform position.

            This distributes leaves across
            the entire screen, including
            the far left.
        */

        const startPosition =
            Math.random() *
            100;


        leaf.style.left =
            `${startPosition}%`;



        /* ================================= */
        /* FALL SPEED                        */
        /* ================================= */

        const duration =
            6 +
            Math.random() *
            5;



        /* ================================= */
        /* START AT RANDOM HEIGHT            */
        /* ================================= */

        const delay =
            -Math.random() *
            duration;



        /* ================================= */
        /* SIZE                              */
        /* ================================= */

        const scale =
            0.65 +
            Math.random() *
            0.9;



        /* ================================= */
        /* OPACITY                           */
        /* ================================= */

        const opacity =
            0.55 +
            Math.random() *
            0.40;



        /* ================================= */
        /* OLD-GAME FRAME RATE               */
        /* ================================= */

        /*
            Approximately 8–10 visible
            movement updates per second.

            The browser still refreshes
            normally, but the leaf only
            changes position at these
            discrete steps.
        */

        const framesPerSecond =
            8 +
            Math.floor(
                Math.random() *
                3
            );


        const frames =
            Math.round(
                duration *
                framesPerSecond
            );



        /* ================================= */
        /* WIND                              */
        /* ================================= */

        const direction =
            Math.random() < 0.5
                ? -1
                : 1;


        const windStrength =
            25 +
            Math.random() *
            55;



        /*
            Alternating drift makes each
            leaf flutter from side to side.
        */

        const driftOne =
            direction *
            windStrength;


        const driftTwo =
            direction *
            -windStrength *
            0.55;


        const driftThree =
            direction *
            windStrength *
            1.15;


        const driftFour =
            direction *
            -windStrength *
            0.35;


        const driftFive =
            direction *
            windStrength *
            0.75;



        /* ================================= */
        /* APPLY VARIABLES                   */
        /* ================================= */

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



        /* ================================= */
        /* ADD LEAF                          */
        /* ================================= */

        leafLayer.appendChild(
            leaf
        );

    }

}
