const header = document.getElementById('h-scro');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scroll-shadow'); 
        } else {
            header.classList.remove('scroll-shadow');
        }
    });

    function toggleNav() {
        const sideNav = document.getElementById('sideNav');
        const menuBtn = document.getElementById('menu-icon'); 
    
        sideNav.classList.toggle('open');
        document.body.classList.toggle('overlay-active'); 
    
        if (sideNav.classList.contains('open')) {
            menuBtn.innerHTML = "&#10005;";
        } else {
            menuBtn.innerHTML = "&#9776;";
        }
    }
    
    document.addEventListener('click', function (event) {
        const sideNav = document.getElementById('sideNav');
        const menuBtn = document.getElementById('menu-icon');
    
        if (!sideNav.contains(event.target) && !menuBtn.contains(event.target)) {
            sideNav.classList.remove('open');
            document.body.classList.remove('overlay-active'); 
            menuBtn.innerHTML = "&#9776;"; 
        }
    });
    
    
const backToTopButton = document.getElementById('backToTop');
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
const myDiv1 = document.querySelector('.top-g-1');
myDiv1.innerHTML =' <div class="t-layout-cnt" style="width: 100%; height: 100%; padding-top: 15px; padding-right: 15px;"><div class="capture-p" style="width: 100%; height: auto; display: flex;"><div class="brk-n-cont" style="width: 90%; height: auto; display: flex; justify-content: start; align-items: start;"><div class="brk-n" style="display: flex; align-items: center; color: white; font-size: 12px; font-weight: 600; padding-right: 5px; padding-bottom: 2px; padding-left: 5px; background-color: red; border-radius: 2px;">Breaking news</div></div><div class="cap-view" style="display: flex; justify-content: center;  align-items: center; border-radius: 4px; background: rgba(59, 60, 66, 0.5); backdrop-filter: blur(2px); font-weight: 600; width: auto; height: auto; font-size: 11px; color: #ffffff; letter-spacing: 1px;"><div class="eye-view" style="width: auto; height: auto; display: flex; justify-content: center; align-items: center;   margin-right: 5px;"><i class="fa-regular fa-eye"></i></div>17.5k</div></div><div class="t-layout-c" style="width: 100%; height: 95%; padding-bottom: 15px; display: flex; align-items: end; justify-content: center;"><div class="t-layout" style="width: 98%; height: auto; display: block; font-size: 20px; font-weight: 700; padding-left: 10px; color: #ffffff;"><span>Nigerians back in darkness as national grid collapses again</span></div></div></div>';
const myDiv2 = document.querySelector('.top-g-2');
myDiv2.innerHTML =' <div class="t-layout-cnt" style="width: 100%; height: 100%; padding-top: 15px; padding-right: 15px;"><div class="capture-p" style="width: 100%; height: auto; display: flex; justify-content: end;"><div class="brk-n-cont" style="width: 90%; height: auto; display: flex; justify-content: start; align-items: start;"><div class="brk-n" style="display: flex; align-items: center; color: white; font-size: 12px; font-weight: 600; padding-right: 5px; padding-bottom: 2px; padding-left: 5px; background-color: red; border-radius: 2px;">Breaking news</div></div><div class="cap-view" style="display: flex; justify-content: center;  align-items: center; border-radius: 4px; background: rgba(59, 60, 66, 0.5); backdrop-filter: blur(2px); font-weight: 600; width: auto; height: auto; font-size: 11px; color: #ffffff; letter-spacing: 1px;"><div class="eye-view" style="width: auto; height: auto; display: flex; justify-content: center; align-items: center;   margin-right: 5px;"><i class="fa-regular fa-eye"></i></div>36.2k</div></div><div class="t-layout-c" style="width: 100%; height: 95%; padding-bottom: 15px; display: flex; align-items: end; justify-content: center;"><div class="t-layout" style="width: 98%; height: auto; display: block; font-size: 20px; font-weight: 700; padding-left: 10px; color: #ffffff;"><span>Elon Musk’s SpaceX Starship launches, booster returns intact</span></div></div></div>';
const myDiv3 = document.querySelector('.top-g-x');
myDiv3.innerHTML = ' <div class="t-layout-cnt" style="width: 100%; height: 100%; padding-top: 15px; padding-right: 15px;"><div class="capture-p" style="width: 100%; height: auto; display: flex; justify-content: end;"><div class="brk-n-cont" style="width: 90%; height: auto; display: flex; justify-content: start; align-items: start; "><div class="brk-n" style="display: flex; align-items: center; color: white; font-size: 12px; font-weight: 600; padding-right: 5px; padding-bottom: 2px; padding-left: 5px; background-color: red; border-radius: 2px;">Breaking news</div></div><div class="cap-view" style="display: flex; justify-content: center;  align-items: center; border-radius: 4px; background: rgba(59, 60, 66, 0.5); backdrop-filter: blur(2px); font-weight: 600; width: auto; height: auto; font-size: 11px; color: #ffffff; letter-spacing: 1px;"><div class="eye-view" style="width: auto; height: auto; display: flex; justify-content: center; align-items: center;   margin-right: 5px;"><i class="fa-regular fa-eye"></i></div>55k</div></div><div class="t-layout-c" style="width: 100%; height: 95%; padding-bottom: 15px; display: flex; align-items: end; justify-content: center;"><div class="t-layout" style="width: 98%; height: auto; display: block; font-size: 20px; font-weight: 700; padding-left: 10px; color: #ffffff;"><span>Food prices and others to ease pressure in November inflation rate  - National Bureau of Statistics</span></div></div></div>';
document.getElementById('myTgone').addEventListener('click', function () {
    window.location.href = 'news-block-1.html'; 
});
document.getElementById('myTgtwo').addEventListener('click', function () {
    window.location.href = 'news-block-2.html'; 
});
document.getElementById('myTgthree').addEventListener('click', function () {
    window.location.href = 'news-block-3.html'; 
});

document.getElementById('rfBlock1').addEventListener('click', function () {
    window.location.href = '/RF-One/index.html'; 
});
document.getElementById('rfBlock2').addEventListener('click', function () {
    window.location.href = '/RF-Two/index.html'; 
});
document.getElementById('rfBlock3').addEventListener('click', function () {
    window.location.href = '/RF-Three/index.html'; 
});
document.getElementById('rfBlock4').addEventListener('click', function () {
    window.location.href = '/RF-Four/index.html'; 
});
document.getElementById('rfBlock5').addEventListener('click', function () {
    window.location.href = '/RF-Five/index.html'; 
});
document.getElementById('rfBlock6').addEventListener('click', function () {
    window.location.href = '/RF-Six/index.html'; 
});
document.getElementById('rfBlock7').addEventListener('click', function () {
    window.location.href = '/RF-Seven/index.html'; 
});
document.getElementById('rfBlock8').addEventListener('click', function () {
    window.location.href = '/RF-Eight/index.html'; 
});

document.getElementById('p_slide-one').addEventListener('click', function () {
    window.location.href = '/Popular-010/index.html'; 
});
document.getElementById('p_slide-two').addEventListener('click', function () {
    window.location.href = '/Popular-020/index.html'; 
});
document.getElementById('p_slide-three').addEventListener('click', function () {
    window.location.href = '/Popular-030/index.html'; 
});
document.getElementById('p_slide-four').addEventListener('click', function () {
    window.location.href = '/Popular-040/index.html'; 
});
document.getElementById('p_slide-five').addEventListener('click', function () {
    window.location.href = '/Popular-050/index.html'; 
});
document.getElementById('p_slide-six').addEventListener('click', function () {
    window.location.href = '/Popular-060/index.html'; 
});
document.getElementById('p_slide-seven').addEventListener('click', function () {
    window.location.href = '/Popular-070/index.html'; 
});
document.getElementById('p_slide-eight').addEventListener('click', function () {
    window.location.href = '/Popular-080/index.html'; 
});
document.getElementById('p_slide-nine').addEventListener('click', function () {
    window.location.href = '/Popular-090/index.html'; 
});
document.getElementById('p_slide-ten').addEventListener('click', function () {
    window.location.href = '/Popular-01-x/index.html'; 
});
document.getElementById('p_slide-eleven').addEventListener('click', function () {
    window.location.href = '/Popular-01-1b/index.html'; 
});

document.getElementById('w-xl-one').addEventListener('click', function () {
    window.location.href = '/Weekly-010/index.html'; 
});
document.getElementById('w-xl-two').addEventListener('click', function () {
    window.location.href = '/Weekly-020/index.html'; 
});
document.getElementById('w-xl-three').addEventListener('click', function () {
    window.location.href = '/Weekly-030/index.html'; 
});
document.getElementById('w-xl-four').addEventListener('click', function () {
    window.location.href = '/Weekly-040/index.html'; 
});
document.getElementById('w-xl-five').addEventListener('click', function () {
    window.location.href = '/Weekly-050/index.html'; 
});
document.getElementById('w-xl-six').addEventListener('click', function () {
    window.location.href = '/Weekly-060/index.html'; 
});
document.getElementById('w-xl-seven').addEventListener('click', function () {
    window.location.href = '/Weekly-070/index.html'; 
});
document.getElementById('w-xl-eight').addEventListener('click', function () {
    window.location.href = '/Weekly-080/index.html'; 
});

document.getElementById('myLive').addEventListener('click', function () {
    window.location.href = '/Live/index.html'; 
});
document.getElementById('myTrend').addEventListener('click', function () {
    window.location.href = '/News/index.html'; 
});
document.getElementById('myPol').addEventListener('click', function () {
    window.location.href = '/Geo-politics/index.html';
});
document.getElementById('myAgric').addEventListener('click', function () {
    window.location.href = '/Agriculture/index.html';
});
document.getElementById('myEdu').addEventListener('click', function () {
    window.location.href = '/Education/index.html';
});
document.getElementById('myHlt').addEventListener('click', function () {
    window.location.href = '/Health/index.html';
});
document.getElementById('myBiz').addEventListener('click', function () {
    window.location.href = '/Business/index.html';
});
document.getElementById('mySport').addEventListener('click', function () {
    window.location.href = '/Sports/index.html';
});
document.getElementById('myEnter').addEventListener('click', function () {
    window.location.href = '/Entertainment/index.html'; 
});
document.getElementById('myCus').addEventListener('click', function () {
    window.location.href = '/Customize/index.html';
});
document.getElementById('myEco').addEventListener('click', function () {
    window.location.href = '/Economy/index.html';
});




