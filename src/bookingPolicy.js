// // Placeholder: real logic will be written later (Green).
// function book({ event, studentId, existingBookings }) {
//   return { ok: false, error: 'NOT_IMPLEMENTED', booked: event.booked };
// }

// module.exports = { book };

function book({ event, studentId, existingBookings }) {
  const alreadyBooked = existingBookings.some(
    (b) => b.eventId === event.id && b.studentId === studentId
  );
  if (alreadyBooked) {
    return { ok: false, error: 'ALREADY_BOOKED', booked: event.booked };
  }

  if (event.booked >= event.capacity) {
    return { ok: false, error: 'EVENT_FULL', booked: event.booked };
  }

  const next = existingBookings.length + 1;
  const reference = 'BK-' + String(next).padStart(4, '0');

  return {
    ok: true,
    booked: event.booked + 1,
    booking: { reference, eventId: event.id, studentId },
  };
}

module.exports = { book };