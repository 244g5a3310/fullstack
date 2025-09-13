function calculateFare(distance) {
  let fare = 0;

  if (distance <= 4) {
    fare = 30; // Basic pay for up to 4 km
  } else {
    fare = 30; // Base fare for first 4 km
    let remaining = distance - 4;

    // Next 5 km at ₹10/km
    if (remaining > 0) {
      let slab = Math.min(remaining, 5);
      fare += slab * 10;
      remaining -= slab;
    }

    // Next 10 km at ₹15/km
    if (remaining > 0) {
      let slab = Math.min(remaining, 10);
      fare += slab * 15;
      remaining -= slab;
    }

    // Next 15 km at ₹20/km
    if (remaining > 0) {
      let slab = Math.min(remaining, 15);
      fare += slab * 20;
      remaining -= slab;
    }

    // If distance exceeds all slabs, continue at ₹20/km
    if (remaining > 0) {
      fare += remaining * 20;
    }
  }

  return fare;
}

// Example usage:
let distance = 28; // You can change this value to test other distances
console.log(`Fare for ${distance} km is ₹${calculateFare(distance)}`);