/**
 * Aura Labs Particle System
 * Dynamic, interactive particle animations for premium visual effects
 * 
 * Usage:
 * const particles = new AuraParticles({
 *   container: '#element-id',
 *   type: 'molecular',
 *   count: 500,
 *   colors: ['#2563eb', '#ffffff']
 * });
 */

class AuraParticles {
  constructor(options = {}) {
    this.options = {
      container: '#particles',
      count: 500,
      type: 'molecular',  // molecular, data, flow, custom
      colors: ['#2563eb', '#ffffff'],
      size: 2,
      minSize: 1,
      maxSize: 5,
      speed: 1,
      gravity: 0.1,
      friction: 0.95,
      glow: true,
      glowColor: '#2563eb',
      glowIntensity: 0.5,
      opacity: 0.8,
      interaction: true,
      interactionRadius: 150,
      interactionStrength: 0.5,
      autoPlay: true,
      duration: 3000,
      loop: true,
      easing: 'easeInOutQuad',
      responsive: true,
      pixelRatio: window.devicePixelRatio,
      ...options
    };

    this.particles = [];
    this.running = false;
    this.canvas = null;
    this.ctx = null;
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.events = {};

    this.init();
  }

  init() {
    // Create canvas as fixed background
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.zIndex = '-1';  // Behind all content
    this.canvas.style.pointerEvents = 'none';  // Don't block interactions
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    
    // Set canvas size
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Create particles
    this.createParticles();

    // Set up interaction
    if (this.options.interaction) {
      this.setupInteraction();
    }

    // Start animation
    if (this.options.autoPlay) {
      this.play();
    }
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * this.options.pixelRatio;
    this.canvas.height = rect.height * this.options.pixelRatio;
    this.ctx.scale(this.options.pixelRatio, this.options.pixelRatio);
  }

  createParticles() {
    this.particles = [];

    if (this.options.type === 'molecular') {
      this.createMolecularParticles();
    } else if (this.options.type === 'data') {
      this.createDataParticles();
    } else if (this.options.type === 'flow') {
      this.createFlowParticles();
    } else if (this.options.type === 'custom') {
      this.createCustomParticles();
    }
  }

  createMolecularParticles() {
    const centerX = this.canvas.width / (2 * this.options.pixelRatio);
    const centerY = this.canvas.height / (2 * this.options.pixelRatio);
    const radius = Math.min(centerX, centerY) * 0.4;

    for (let i = 0; i < this.options.count; i++) {
      const angle = (i / this.options.count) * Math.PI * 2;
      const distance = radius * (0.5 + Math.random() * 0.5);
      
      const particle = {
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * this.options.speed,
        vy: (Math.random() - 0.5) * this.options.speed,
        size: this.options.minSize + Math.random() * (this.options.maxSize - this.options.minSize),
        color: this.options.colors[i % this.options.colors.length],
        angle: angle,
        baseX: centerX + Math.cos(angle) * distance,
        baseY: centerY + Math.sin(angle) * distance,
        life: 1
      };
      
      this.particles.push(particle);
    }
  }

  createDataParticles() {
    const centerX = this.canvas.width / (2 * this.options.pixelRatio);
    const centerY = this.canvas.height / (2 * this.options.pixelRatio);

    for (let i = 0; i < this.options.count; i++) {
      const particle = {
        x: centerX + (Math.random() - 0.5) * 200,
        y: centerY + (Math.random() - 0.5) * 200,
        vx: (Math.random() - 0.5) * this.options.speed * 0.5,
        vy: (Math.random() - 0.5) * this.options.speed * 0.5,
        size: this.options.minSize + Math.random() * (this.options.maxSize - this.options.minSize),
        color: this.options.colors[i % this.options.colors.length],
        targetY: centerY - 100 + (i / this.options.count) * 200,
        progress: 0
      };
      
      this.particles.push(particle);
    }
  }

  createFlowParticles() {
    const width = this.canvas.width / this.options.pixelRatio;
    const height = this.canvas.height / this.options.pixelRatio;

    for (let i = 0; i < this.options.count; i++) {
      const particle = {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * this.options.speed,
        vy: -this.options.speed * 2,  // Upward flow
        size: this.options.minSize + Math.random() * (this.options.maxSize - this.options.minSize),
        color: this.options.colors[i % this.options.colors.length],
        life: 1
      };
      
      this.particles.push(particle);
    }
  }

  createCustomParticles() {
    // Placeholder for custom particle creation
    this.createMolecularParticles();
  }

  setupInteraction() {
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    document.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouseX = e.touches[0].clientX;
        this.mouseY = e.touches[0].clientY;
      }
    });
  }

  updateInteraction(x, y) {
    this.mouseX = x;
    this.mouseY = y;
  }

  update() {
    for (let particle of this.particles) {
      // Apply physics
      particle.vy += this.options.gravity;
      particle.vx *= this.options.friction;
      particle.vy *= this.options.friction;

      // Apply interaction
      if (this.options.interaction) {
        const dx = this.mouseX - particle.x;
        const dy = this.mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.options.interactionRadius) {
          const force = (1 - distance / this.options.interactionRadius) * this.options.interactionStrength;
          particle.vx -= (dx / distance) * force;
          particle.vy -= (dy / distance) * force;
        }
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      const w = this.canvas.width / this.options.pixelRatio;
      const h = this.canvas.height / this.options.pixelRatio;

      if (particle.x < 0 || particle.x > w) particle.vx *= -1;
      if (particle.y < 0 || particle.y > h) particle.vy *= -1;

      particle.x = Math.max(0, Math.min(w, particle.x));
      particle.y = Math.max(0, Math.min(h, particle.y));

      // Update life
      if (particle.life !== undefined) {
        particle.life -= 0.005;
      }
    }
  }

  draw() {
    // Clear canvas
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw particles
    for (let particle of this.particles) {
      if (particle.life < 0) continue;

      const opacity = particle.life !== undefined ? particle.life : this.options.opacity;

      // Draw particle
      this.ctx.fillStyle = this.hexToRgba(particle.color, opacity);
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();

      // Draw glow
      if (this.options.glow) {
        this.ctx.shadowColor = this.hexToRgba(this.options.glowColor, opacity * this.options.glowIntensity);
        this.ctx.shadowBlur = particle.size * 3;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }
    }
  }

  hexToRgba(hex, alpha = 1) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  animate = () => {
    if (!this.running) return;

    this.update();
    this.draw();

    requestAnimationFrame(this.animate);
  };

  play() {
    if (this.running) return;
    this.running = true;
    this.animate();
  }

  pause() {
    this.running = false;
  }

  destroy() {
    this.pause();
    if (this.canvas && this.canvas.parentElement) {
      this.canvas.parentElement.removeChild(this.canvas);
    }
    this.particles = [];
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AuraParticles;
}
