// Function to retrieve authorization headers with a Bearer token from local storage
export default function getAuthHeaders() {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Construct and return the authorization header
    // The Bearer token format is commonly used for authentication
    return {
        authorization: `Bearer ${token}`
    };
}