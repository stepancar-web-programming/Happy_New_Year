function garland() {
  const nums = document.getElementById('nums-1').innerHTML;
  if (nums == 1) {
    document.getElementById('garland').className = 'garland-1';
    document.getElementById('nums-1').innerHTML = '2';
  }
  if (nums == 2) {
    document.getElementById('garland').className = 'garland-2';
    document.getElementById('nums-1').innerHTML = '3';
  }
  if (nums == 3) {
    document.getElementById('garland').className = 'garland-3';
    document.getElementById('nums-1').innerHTML = '4';
  }
  if (nums == 4) {
    document.getElementById('garland').className = 'garland-4';
    document.getElementById('nums-1').innerHTML = '1';
  }
}

setInterval(() => {
  garland();
}, 600);
