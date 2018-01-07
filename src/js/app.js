import '../css/main.scss';

const classes = {
    smallCircle: 't-home__small-circle',
}

const smallCircle = document.getElementById(classes.smallCircle);

document.addEventListener('mousemove', evt => onMouseMove(evt));

function onMouseMove(evt){
    const transformValueX = evt.screenY * 0.04;
    const transformValueY = evt.screenY * 0.02;
    smallCircle.style.transform = `translate3d(${transformValueX}px, ${transformValueY}px, 0)`;
};
