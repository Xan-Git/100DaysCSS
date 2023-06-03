var container = document.getElementsByClassName("container").item(0);
var barOne = document.getElementsByClassName("bar-1").item(0);
var barTwo = document.getElementsByClassName("bar-2").item(0);
var barThree = document.getElementsByClassName("bar-3").item(0);


// Animation Keyframes
const barOneAll = [
    { bottom: "16px", transform: "rotate(0)"},
    { bottom: "-8px", transform: "rotate(0)"},
    { bottom: "-8px", transform: "rotate(0)"},
    { bottom: "-8px", transform: "rotate(45deg)"}
];

const barThreeAll = [
    { top: "16px", transform: "rotate(0)"},
    { top: "-8px", transform: "rotate(0)"},
    { top: "-8px", transform: "rotate(0deg)"},
    { top: "-8px", transform: "rotate(135deg"}
];


const barCollapseOne = [
    // { transform: "translateY(0)"},
    // { transform: "translateY(24px)"}
    { bottom: "16px"},
    { bottom: "-8px"}
];

const barCollapseThree = [
    // { transform: "translateY(0)"},
    // { transform: "translateY(-24px)"}
    { top: "16px"},
    { top: "-8px"}
];

const barCollapseTwo = [
    { transform: "scale(1)"},
    { transform: "scale(0)"},
    { transform: "scale(0)"},
    { transform: "scale(0)"}
];

const twistOne = [
    { transform: "rotate(0deg)"},
    { transform: "rotate(45deg)"}
];

const twistThree = [
    { transform: "rotate(0deg)"},
    { transform: "rotate(135deg)"}
];

const collapseTiming = {
    duration: 1000,
    easing: "ease",
    fill: "both"
}

const barOneKeyframes = new KeyframeEffect(barOne, barOneAll, collapseTiming);
const barTwoKeyframes = new KeyframeEffect(barTwo, barCollapseTwo, collapseTiming);
const barThreeKeyframes = new KeyframeEffect(barThree, barThreeAll, collapseTiming);

const barOneAnimation = new Animation(barOneKeyframes, document.timeline);
const barTwoAnimation = new Animation(barTwoKeyframes, document.timeline);
const barThreeAnimation = new Animation(barThreeKeyframes, document.timeline);

// const barOneAnimation = new Animation(barOneAll, collapseTiming);
// const barTwoanimation = new Animation(barCollapseTwo, collapseTiming);
// const barThreeAnimation = new Animation(barThreeAnimation, collapseTiming);

let playForwards = true;

container.addEventListener("click", iconClick)

async function iconClick() {
    console.log("iconClick fired");

    // barOneAnimation = barOne.animate(barOneAll, collapseTiming);
    // barTwoAnimation = barTwo.animate(barCollapseTwo, collapseTiming);
    // barThreeAnimation = barThree.animate(barThreeAll, collapseTiming);
    if(playForwards)
    {
        barOneAnimation.updatePlaybackRate(1)
        barTwoAnimation.updatePlaybackRate(1);
        barThreeAnimation.updatePlaybackRate(1);
    }
    else {
        barOneAnimation.updatePlaybackRate(-1);
        barTwoAnimation.updatePlaybackRate(-1);
        barThreeAnimation.updatePlaybackRate(-1);
    }

    barOneAnimation.play();
    barTwoAnimation.play();
    barThreeAnimation.play();
    
    playForwards = !playForwards;
    await barOneAnimation.finished;


    barOneAnimation.commitStyles();
    barTwoAnimation.commitStyles();
    barThreeAnimation.commitStyles();

    barOneAnimation.cancel();
    barTwoAnimation.cancel();
    barThreeAnimation.cancel();
    

    




    /*
    const twistOneAnimation = barOne.animate(twistOne, collapseTiming);
    const twistThreeAnimation = barThree.animate(twistThree, collapseTiming);

    await twistOneAnimation.finished;

    twistOneAnimation.commitStyles();
    twistThreeAnimation.commitStyles();

    twistOneAnimation.cancel();
    twistThreeAnimation.cancel();
    */
}
