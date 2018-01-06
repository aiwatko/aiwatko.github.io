import '../css/main.scss';

const classes = {
    smallCircle: 't-home__small-circle',
    largeCircle: 't-home__large-circle'
}

const smallCircle = document.getElementById(classes.smallCircle);
const largeCircle = document.getElementById(classes.largeCircle);

document.addEventListener('mousemove', evt => onMouseMove(evt));

function onMouseMove(evt){
 if(window.innerWidth > 768){
    smallCircle.style.left = evt.screenY * 0.14;
    largeCircle.style.right = evt.screenY * 0.04;
 }
};
