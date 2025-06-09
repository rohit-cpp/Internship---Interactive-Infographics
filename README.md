# 📊 Interactive Infographic – Smartphone Usage by Continent

This project is an interactive infographic built using **HTML**, **Pure CSS**, and **Vanilla JavaScript**. It visualizes smartphone usage (in millions) by continent and includes a variety of advanced data visualization and interactivity features.

## 🌍 Topic Chosen
**Smartphone usage across continents** – highlighting differences between developed and developing regions.

---

## 🔧 Features

### 📈 Data Visualization
- Interactive **bar chart** showing smartphone usage (in millions) for each continent.
- Responsive canvas using HTML5 `<canvas>` and JavaScript.
- Region-based color coding for easy visual distinction.

### 🎨 Visual & UI Enhancements
- ✅ **Color Coding** – Different bar colors based on region type (developed = green, developing = blue).
- ✅ **Grid Lines** – Horizontal lines to help gauge bar heights.
- ✅ **Axis Labels** – Y-axis labeled with value markers for better readability.
- ✅ **Chart Legends** – Built into the UI (color indicates region type).
- ✅ **Bar Animations** – Smooth transitions for drawing and resizing bars.
- ✅ **Responsive Design** – Looks great on all screen sizes (mobile, tablet, desktop).
- ✅ **X-Axis Base Line** – A line to ground the bars visually.

### 🧠 User Interactions
- 🔍 **Tooltip on Hover** – Shows continent name and usage details.
- 🔄 **Filter Dropdown** – Filter by `All`, `Developed`, or `Developing` regions.
- 🔧 **Scale Range Slider** – Adjust chart scaling dynamically.
- ♻️ **Reset Button** – Reset scale and filter to default view.
- 💡 **Responsive Redraw** – Chart resizes dynamically on window resize.

---


---

## 📸 Screenshots

### Full View (Desktop)
![Screenshot 2025-06-09 232704](https://github.com/user-attachments/assets/f0cfe6dc-3840-42fe-a33d-0e41fe04c4f7)


### Mobile View
![Screenshot 2025-06-09 232742](https://github.com/user-attachments/assets/bbc72486-e0bb-4970-8f65-395443119a6c)

---

## 🧠 How It Works

- The chart is rendered using the **Canvas API**.
- On each interaction (e.g., filter or scale), the chart is redrawn with updated values.
- Tooltip shows up dynamically based on mouse coordinates and bar positions.
- All data and interactivity is handled via vanilla JavaScript (no external libraries).

---

🛠️ Tech Stack
HTML5
CSS3 (Pure, no Tailwind or frameworks)
JavaScript (ES6+)
Canvas API for drawing

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/smartphone-usage-infographic.git
cd smartphone-usage-infographic

