import { $, toAMPMFormat } from './helpers.js';

class HourFilter {
   constructor() {
      // DOM elements
      this.graph = $('.graph');
      this.slider = $('#hour-slider');
      this.sliderLabel = $('#hour-slider-val');
      this.noGraphLabel = $('.no-graph-text');
      
      // Event listener for slider input
      this.slider.oninput = () => {
         this.highlightBar(this.slider.value);
         this.updateLabel(this.slider.value);
      }

      // Create bars for each hour
      this.bars = [];
      for (let i = 0; i < 24; i++) {
         const barContainer = document.createElement('div');
         barContainer.classList.add('bar-container');
         const bar = document.createElement('div');
         bar.classList.add('bar');
         bar.style.height = '0%';
         barContainer.appendChild(bar);
         this.graph.appendChild(barContainer);
         this.bars.push(bar);
      }
   }

   // Set data for bars
   setData(data) {
      this.noGraphLabel.style.opacity = 0;
      this.slider.style.opacity = 1;
      this.sliderLabel.style.opacity = 1;

      const max = Math.max.apply(null, data);
      this.bars.forEach((bar, i) => {
         const percentHeight = data[i] / max * 100 + '%';
         bar.style.height = percentHeight;
      })
      
      this.highlightBar(this.slider.value);
      this.updateLabel(this.slider.value);
   }

   // Update slider label
   updateLabel(value) {
      this.sliderLabel.innerText = toAMPMFormat(value);
   }

   // Highlight selected hour bar
   highlightBar(value) {
      this.bars.forEach(b => b.style.background = '');
      this.bars[value].style.background = 'var(--accent)';
   }

   // Hide graph and slider
   hideData() {
      this.bars.forEach(bar => bar.style.height = '0px');
      this.noGraphLabel.style.opacity = 1;
      this.slider.style.opacity = 0;
      this.sliderLabel.style.opacity = 0;
      this.noGraphLabel.style.cursor = 'not-allowed';
   }
}

export default HourFilter;
