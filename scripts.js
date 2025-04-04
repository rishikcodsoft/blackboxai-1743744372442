// Shared functions for the ambulance booking app

/**
 * Initialize Google Maps autocomplete for location input
 * @param {string} inputId - ID of the input element
 * @param {string} mapId - ID of the map container
 */
function initMapAutocomplete(inputId, mapId) {
    // This would be replaced with actual Google Maps API implementation
    console.log(`Initializing map autocomplete for ${inputId}`);
    
    const input = document.getElementById(inputId);
    const map = document.getElementById(mapId);
    
    if (input && map) {
        input.addEventListener('focus', function() {
            // In a real implementation, this would initialize the Google Maps autocomplete
            console.log('Location input focused - would initialize Google Maps here');
        });
    }
}

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validatePhoneNumber(phone) {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
}

/**
 * Format emergency type for display
 * @param {string} type - Emergency type code
 * @returns {string} Formatted emergency type
 */
function formatEmergencyType(type) {
    const types = {
        'cardiac': 'Cardiac Emergency',
        'trauma': 'Trauma/Accident',
        'stroke': 'Stroke',
        'respiratory': 'Respiratory Distress',
        'other': 'Other Medical Emergency'
    };
    return types[type] || type;
}

/**
 * Generate a random booking ID
 * @returns {string} Booking ID in format AMB-XXXXXX
 */
function generateBookingId() {
    return 'AMB-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
}

/**
 * Get all bookings from storage
 * @returns {Array} Array of booking objects
 */
function getAllBookings() {
    const bookings = JSON.parse(localStorage.getItem('ambulanceBookings')) || [];
    return bookings;
}

/**
 * Save a booking to storage
 * @param {Object} bookingData - Booking data to save
 */
function saveBooking(bookingData) {
    const bookings = getAllBookings();
    bookings.push(bookingData);
    localStorage.setItem('ambulanceBookings', JSON.stringify(bookings));
    localStorage.setItem('latestBooking', JSON.stringify(bookingData));
}

// Initialize common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map autocomplete on booking page
    if (document.getElementById('location')) {
        initMapAutocomplete('location', 'map');
    }
    
    // Add any other shared initialization code here
});