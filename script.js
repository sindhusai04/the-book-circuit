function toggleHeart(el){
    el.classList.toggle('bi-heart');
    el.classList.toggle('bi-heart-fill');
    el.classList.toggle('liked');
}
function toggleCart(el){
    el.classList.toggle('bi-cart');
    el.classList.toggle('bi-cart-fill');
    el.classList.toggle('added');
}

document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  alert("Thanks for subscribing!");
  document.querySelector("#subscribeForm input").value = ""; 
});

function enableDarkTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

localStorage.removeItem('theme');




