const progressBar = document.querySelector('.progress-bar');
const main = document.querySelector('.main');

const scrollProgressBar = () => {
    let scrollDistance = -main.getBoundingClientRect().top;
    let progressPercentage =
        (scrollDistance /
            (main.getBoundingClientRect().height -
                document.documentElement.clientHeight)) *
        105;

    let val = Math.floor(progressPercentage);
    progressBar.style.width = val + '%';

    if (val < 0) {
        progressBar.style.width = '0%';
    }
};

window.addEventListener('scroll', scrollProgressBar);
