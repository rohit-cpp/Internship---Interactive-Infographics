// script.js (Enhanced with Visual & UI Improvements)

const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const tooltip = document.getElementById("tooltip");
const regionSelect = document.getElementById("regionSelect");
const scaleRange = document.getElementById("scaleRange");

// Dataset with region type
const originalData = [
  { continent: "Asia", value: 2400, regionType: "developing" },
  { continent: "Europe", value: 1200, regionType: "developed" },
  { continent: "Africa", value: 900, regionType: "developing" },
  { continent: "North America", value: 1100, regionType: "developed" },
  { continent: "South America", value: 950, regionType: "developing" },
  { continent: "Oceania", value: 350, regionType: "developed" },
];

let chartData = [...originalData];
let scaleFactor = 1;

// Colors by region type
const colorMap = {
  developed: "#4ade80", // green
  developing: "#60a5fa", // blue
};

function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const padding = 60;
  const barWidth = 60;
  const chartHeight = canvas.height - padding * 2;
  const maxValue = Math.max(...chartData.map((d) => d.value)) * scaleFactor;
  const gap =
    (canvas.width - padding * 2 - barWidth * chartData.length) /
    (chartData.length - 1);

  // Draw Y-axis grid lines and labels
  ctx.strokeStyle = "#ddd";
  ctx.fillStyle = "#000";
  ctx.font = "12px Arial";
  ctx.textAlign = "right";
  const gridLines = 5;
  for (let i = 0; i <= gridLines; i++) {
    const y = padding + i * (chartHeight / gridLines);
    const value = Math.round(maxValue * (1 - i / gridLines));
    ctx.beginPath();
    ctx.moveTo(padding - 10, y);
    ctx.lineTo(canvas.width - padding + 10, y);
    ctx.stroke();
    ctx.fillText(`${value}M`, padding - 15, y + 4);
  }

  // Draw each bar
  chartData.forEach((data, i) => {
    const value = data.value * scaleFactor;
    const barHeight = (value / maxValue) * chartHeight;
    const x = padding + i * (barWidth + gap);
    const y = canvas.height - padding - barHeight;

    // Bar color based on region type
    ctx.fillStyle = colorMap[data.regionType];

    // Animated effect (grow in)
    ctx.fillRect(x, y, barWidth, barHeight);

    // Continent name
    ctx.fillStyle = "#000";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.fillText(data.continent, x + barWidth / 2, canvas.height - 10);
  });

  // Draw X-axis line
  ctx.strokeStyle = "#333";
  ctx.beginPath();
  ctx.moveTo(padding - 10, canvas.height - padding);
  ctx.lineTo(canvas.width - padding + 10, canvas.height - padding);
  ctx.stroke();
}

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const padding = 60;
  const barWidth = 60;
  const chartHeight = canvas.height - padding * 2;
  const maxValue = Math.max(...chartData.map((d) => d.value)) * scaleFactor;
  const gap =
    (canvas.width - padding * 2 - barWidth * chartData.length) /
    (chartData.length - 1);

  let found = false;
  chartData.forEach((data, i) => {
    const value = data.value * scaleFactor;
    const barHeight = (value / maxValue) * chartHeight;
    const x = padding + i * (barWidth + gap);
    const y = canvas.height - padding - barHeight;

    if (
      mouseX > x &&
      mouseX < x + barWidth &&
      mouseY > y &&
      mouseY < y + barHeight
    ) {
      tooltip.style.left = `${e.pageX + 10}px`;
      tooltip.style.top = `${e.pageY}px`;
      tooltip.innerHTML = `<strong>${
        data.continent
      }</strong><br>Usage: ${Math.round(value)}M`;
      tooltip.style.opacity = 1;
      found = true;
    }
  });

  if (!found) tooltip.style.opacity = 0;
});

// Filter chart by region
function filterData() {
  const selected = regionSelect.value;
  chartData =
    selected === "all"
      ? [...originalData]
      : originalData.filter((d) => d.regionType === selected);
  drawChart();
}

// Adjust scale with range input
function updateScale() {
  scaleFactor = parseFloat(scaleRange.value);
  drawChart();
}

// Reset everything
function resetData() {
  scaleFactor = 1;
  scaleRange.value = 1;
  regionSelect.value = "all";
  chartData = [...originalData];
  drawChart();
}

// Listeners
regionSelect.addEventListener("change", filterData);
scaleRange.addEventListener("input", updateScale);

// Redraw chart on resize
window.addEventListener("resize", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  drawChart();
});

// Initial draw
drawChart();
