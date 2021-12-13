const submitBtn = document.getElementById('button');
submitBtn.addEventListener('click', (e) => {
  const p = parseFloat(document.getElementById('principal').value);
  const r = parseFloat(document.getElementById('interest-rate').value);
  const n = parseFloat(document.getElementById('n').value);
  const t = parseFloat(document.getElementById('years').value);

  const interest = "$" + (p * Math.pow(1 + (r/n), n*t)).toFixed(2);

  const output = document.getElementById('output');
  output.innerHTML=interest;
});

const state = [false, false, false, false];
const p_field = document.getElementById('principal');
const r_field = document.getElementById('interest-rate');
const n_field = document.getElementById('n');
const t_field = document.getElementById('years');
const progressBar = document.getElementById('file');

function updateProgress() {
  let cnt = 0;
  for (let i = 0; i < 4; ++i) {
    if (state[i]) {
      ++cnt;
    }
  }
  progressBar.value = cnt*25;
}

p_field.addEventListener('change', (e) => {
  state[0] = p_field.value !== '';
  updateProgress();
});
r_field.addEventListener('change', (e) => {
  state[1] = p_field.value !== '';
  updateProgress();
});
n_field.addEventListener('change', (e) => {
  state[2] = p_field.value !== '';
  updateProgress();
});
t_field.addEventListener('change', (e) => {
  state[3] = p_field.value !== '';
  updateProgress();
});