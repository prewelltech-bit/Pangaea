# Slot Booking System Implementation Prompt

## Feature: Online Slot Booking for Free Counselling Form

### Overview
Implement a slot booking system similar to online movie ticket booking where:
- After form submission, users can select an available time slot for counselling
- When one student selects a slot, it becomes unavailable for other users
- Real-time slot availability updates (slots disappear when booked by others)

### Implementation Requirements

#### 1. Backend API Endpoints Needed:
```
GET /api/slots/available?date=YYYY-MM-DD
  - Returns list of available time slots for a specific date
  - Response: { slots: [{ id, time, available: true/false }] }

POST /api/slots/book
  - Book a slot (temporary reservation for 5-10 minutes)
  - Body: { slotId, firstName, lastName, email, phone, ...formData }
  - Response: { success: true, bookingId, slotId, reservedUntil }

POST /api/counselling/submit
  - Final submission with confirmed slot
  - Body: { bookingId, slotId, ...allFormData }
  - Response: { success: true, confirmationNumber }

GET /api/slots/check/:slotId
  - Check if slot is still available
  - Response: { available: true/false, reservedUntil: timestamp }
```

#### 2. Frontend Implementation:

**Step 1: Form Submission Flow**
- User fills form → clicks "Get Free Counselling"
- Form validates all fields
- On successful validation, show slot selection modal/page

**Step 2: Slot Selection Component**
- Display calendar/date picker to select date
- Show available time slots in a grid (e.g., 9:00 AM, 9:30 AM, 10:00 AM, etc.)
- Each slot should show:
  - Time (e.g., "9:00 AM - 9:30 AM")
  - Available/Unavailable status
  - Visual indicator (green = available, red/gray = booked)
- Disable/hide slots that are already booked
- When user clicks an available slot:
  - Temporarily reserve it (5-10 min hold)
  - Show confirmation message
  - Proceed to final submission

**Step 3: Real-time Updates**
- Poll API every 10-15 seconds to check slot availability
- OR use WebSocket for real-time updates
- Update UI when slots become unavailable
- Show "Slot just booked" notification if user's selected slot gets taken

**Step 4: Final Submission**
- Submit form data + selected slot to backend
- Show success message with booking confirmation
- Send confirmation email/SMS

#### 3. Database Schema:
```sql
slots:
  - id (primary key)
  - date (date)
  - time (time)
  - status (available, reserved, booked)
  - reserved_by (user_id or session_id)
  - reserved_until (timestamp)
  - created_at
  - updated_at

bookings:
  - id (primary key)
  - slot_id (foreign key)
  - first_name
  - last_name
  - email
  - phone
  - study_destination
  - study_timeline
  - preferred_year
  - status (pending, confirmed, cancelled)
  - confirmation_number
  - created_at
```

#### 4. Slot Management Logic:
- **Slot Generation**: Auto-generate slots for next 30 days (e.g., 9 AM - 6 PM, 30-min intervals)
- **Reservation System**: When user selects slot, mark as "reserved" for 5-10 minutes
- **Expiration**: If not confirmed within reservation time, slot becomes available again
- **Conflict Prevention**: Use database locks/transactions to prevent double-booking

#### 5. UI/UX Features:
- **Loading States**: Show spinner while fetching slots
- **Error Handling**: Handle network errors, slot conflicts gracefully
- **Visual Feedback**: 
  - Hover effects on available slots
  - Selected slot highlight
  - Disabled state for booked slots
- **Responsive Design**: Mobile-friendly slot grid
- **Confirmation Screen**: Show booking details before final submission

#### 6. Technical Stack Suggestions:
- **State Management**: React useState/useReducer or Context API
- **API Calls**: Axios or Fetch API
- **Real-time**: WebSocket (Socket.io) or polling with setInterval
- **Date Handling**: date-fns or moment.js
- **Form Validation**: React Hook Form or Formik

#### 7. Security Considerations:
- Prevent slot manipulation via API
- Rate limiting on slot booking endpoints
- Session-based temporary reservations
- Validate slot availability on backend before confirming

#### 8. Edge Cases to Handle:
- Multiple users selecting same slot simultaneously
- Network failure during booking
- User closes browser during reservation period
- Timezone handling for slot times
- Slot expiration during user's selection process

### Example User Flow:
1. User fills counselling form
2. Clicks "Get Free Counselling" button
3. Modal opens: "Select Your Preferred Time Slot"
4. User selects date from calendar
5. Available slots display in grid
6. User clicks desired slot (e.g., "2:00 PM - 2:30 PM")
7. Slot gets reserved, confirmation shown
8. User confirms booking
9. Form submits with slot information
10. Success page with booking confirmation number

### Implementation Priority:
1. ✅ Basic slot selection UI
2. ✅ API integration for fetching available slots
3. ✅ Slot booking/reservation logic
4. ✅ Real-time availability updates
5. ✅ Conflict prevention
6. ✅ Email/SMS notifications
7. ✅ Admin panel for slot management

