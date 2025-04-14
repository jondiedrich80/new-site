const app = document.getElementById("app");

app.innerHTML = `
  <header style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80');">
    <div class="hero-overlay">
      <div>
        <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Experience Luxury at Its Finest</h1>
        <p style="font-size: 1.25rem; margin-bottom: 2rem;">Book your dream stay with us today</p>
        <button>Book Now</button>
      </div>
    </div>
  </header>

  <section>
    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem;">Our Rooms</h2>
    <div class="rooms">
      ${[1, 2, 3].map((i) => `
        <div class="room">
          <img src="https://source.unsplash.com/600x400/?luxury,hotel,room&sig=${i}" alt="Room ${i}" style="width: 100%; border-radius: 12px; height: 200px; object-fit: cover;" />
          <h3 style="margin-top: 1rem;">Deluxe Room ${i}</h3>
          <p>Elegant design, sea view, king-size bed, and modern amenities.</p>
          <button style="width: 100%; margin-top: 1rem;">View Details</button>
        </div>
      `).join('')}
    </div>
  </section>

  <section style="background-color: #f3f4f6;">
    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem;">Amenities</h2>
    <div class="amenities">
      ${["Spa", "Infinity Pool", "Private Beach", "Fine Dining"].map((item) => `
        <div class="amenity">
          <h4>${item}</h4>
          <p>Top-class service and unforgettable experience</p>
        </div>
      `).join('')}
    </div>
  </section>

  <footer style="background-color: #1f2937; color: white; text-align: center; padding: 24px;">
    <p>&copy; ${new Date().getFullYear()} Paradise Hotel. All rights reserved.</p>
  </footer>
`;
