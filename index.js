const input_js = document.querySelectorAll('input')
const btn_js = document.querySelector('button')


btn_js.onclick = () => {
    const info = [];
    input_js.forEach(input => info.push(input.value));
    console.log(info);
};
