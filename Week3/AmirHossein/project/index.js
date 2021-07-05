// Your code goes in here
function calculateTip() {
  const billPrice = document.getElementById('billPrice').value;
  const servicQual = document.getElementById('serviceQual').value;
  let peopleNum = document.getElementById('peopleNum').value;

  if (billPrice === '' || serviceQual == 0) {
    alert('Please enter values');
    return;
  }

  if (peopleNum === '' || peopleNum <= 1) {
    peopleNum = 1;
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }

  let total = (billPrice * servicQual) / peopleNum;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById('totalTip').style.display = 'block';
  document.getElementById('tip').innerHTML = total;

}

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById("calculate-btn").onclick = function() {
    calculateTip();

  };
