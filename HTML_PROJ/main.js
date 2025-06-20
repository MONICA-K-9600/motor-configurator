function calculate() {
  const g = 9.81;
  const usefulMass = parseFloat(document.getElementById('usefulMass').value) || 0;
  const structureMass = parseFloat(document.getElementById('structureMass').value) || 0;
  const ropeDiameter = parseFloat(document.getElementById('ropeDiameter').value) || 0;
  const drumDiameter = parseFloat(document.getElementById('drumDiameter').value) || 0;
  const liftingSpeed = parseFloat(document.getElementById('liftingSpeed').value) || 0;

  const totalMass = usefulMass + structureMass;
  const radius = drumDiameter / 2000;
  const force = totalMass * g;
  const torque = force * radius;
  const drumSpeed = liftingSpeed / (Math.PI * drumDiameter / 1000) * 60;
  const power = (force * liftingSpeed) / (60 * 1000);

  document.getElementById('torqueResult').innerText = torque.toFixed(2);
  document.getElementById('speedResult').innerText = drumSpeed.toFixed(2);
  document.getElementById('powerResult').innerText = power.toFixed(2);
}
