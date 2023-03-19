const btn = document.getElementById("submit");
btn?.addEventListener("click", click);
function click(e) {
  e.preventDefault();
    document.body.style.background= "green";
    // @ts-ignore
    btn.innerHTML = 'pressed';
}
