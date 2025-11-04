document.querySelectorAll('[data-link]').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = btn.dataset.link;
  });
});
// document.getElementById('bxtwo').addEventListener('click', function () {
//     window.location.href = 'js-focus2.html'; 
// });
// document.getElementById('signUpme').addEventListener('click', function () {
//     window.location.href = '/Profile/index.html'; 
// });
(function(){
  const STORAGE_KEY = 'favorite_state_multi';

  // Load saved data for all hearts
  let data = {};
  try {
    data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    data = {};
  }

  function save(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function initHeart(btn){
    const id = btn.dataset.id || crypto.randomUUID();
    if(!btn.dataset.id) btn.dataset.id = id;

    let liked = !!data[id];

    function updateUI(){
      btn.setAttribute('aria-pressed', String(liked));
      btn.classList.toggle('liked', liked);
    }

    function toggle(){
      liked = !liked;
      data[id] = liked;
      save();
      btn.classList.remove('animate');
      void btn.offsetWidth;
      btn.classList.add('animate');
      updateUI();
    }

    btn.addEventListener('click', toggle);
    btn.addEventListener('keydown', (e)=>{
      if(e.key==='Enter'||e.key===' '){
        e.preventDefault();
        toggle();
      }
    });

    updateUI();
  }

  document.querySelectorAll('.fav-btn').forEach(initHeart);
})();