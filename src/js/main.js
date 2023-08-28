const btn = document.querySelector('.bones');
const descr = document.querySelector('.descr');
const numberAdvice = document.querySelector('.advice');

const getAdvice = async () => {
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      numberAdvice.innerHTML = `Advice #${data.slip.id}`;
      descr.innerHTML = `"${data.slip.advice}"`;
    })
    .catch(err => {
      console.log(err);
    });
};

btn.addEventListener('click', getAdvice);
