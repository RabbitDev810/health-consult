const parseFirebaseErrorCoder = (errorMessage: string) => {
  const regex = /\((.*?)\)/g;
  const match = errorMessage.match(regex);
  return match ? match[0].slice(1, -1) : null;
};

export const getErrorMessage = (message: string): string => {
  const errorCode = parseFirebaseErrorCoder(message);

  switch (errorCode) {
    case "auth/claims-too-large":
      return "The information provided is too extensive. Please reduce it to 1000 bytes or less.";
    case "auth/email-already-in-use":
      return "This email is already associated with an existing account. Please use a different email.";
    case "auth/id-token-expired":
      return "Your session has expired. Please log in again.";
    case "auth/id-token-revoked":
      return "Your session has been revoked. Please log in again.";
    case "auth/insufficient-permission":
      return "Permission denied. Please check your credentials and try again.";
    case "auth/internal-error":
      return "Oops! Something unexpected happened on our end. Please report the issue.";
    case "auth/invalid-argument":
      return "Oops! An invalid argument was provided. Please check your input and try again.";
    case "auth/invalid-claims":
      return "The custom claim attributes provided are invalid. Please review and try again.";
    case "auth/invalid-continue-uri":
      return "The continue URL provided is not valid. Please enter a valid URL.";
    case "auth/invalid-creation-time":
      return "The creation time provided is not a valid UTC date string. Please enter a valid date.";
    case "auth/invalid-credential":
      return "Oops! The provided credential cannot be used for this action. Please check your credentials.";
    case "auth/invalid-disabled-field":
      return "The value provided for the disabled user property is invalid. It must be a boolean.";
    case "auth/invalid-display-name":
      return "The value provided for the display name is invalid. It must be a non-empty string.";
    case "auth/invalid-dynamic-link-domain":
      return "The provided dynamic link domain is not configured or authorized for the current project.";
    case "auth/invalid-email":
      return "The provided email is not valid. Please enter a valid email address.";
    case "auth/invalid-email-verified":
      return "The provided value for email verification is invalid. It must be a boolean.";
    case "auth/invalid-hash-algorithm":
      return "The hash algorithm provided is not supported.";
    case "auth/invalid-hash-block-size":
      return "The hash block size must be a valid number.";
    case "auth/invalid-hash-derived-key-length":
      return "The hash derived key length must be a valid number.";
    case "auth/invalid-hash-key":
      return "The hash key must be a valid byte buffer.";
    case "auth/invalid-hash-memory-cost":
      return "The hash memory cost must be a valid number.";
    case "auth/invalid-hash-parallelization":
      return "The hash parallelization must be a valid number.";
    case "auth/invalid-hash-rounds":
      return "The hash rounds must be a valid number.";
    case "auth/invalid-hash-salt-separator":
      return "The hashing algorithm salt separator field must be a valid byte buffer.";
    case "auth/invalid-id-token":
      return "The provided ID token is not valid.";
    case "auth/invalid-last-sign-in-time":
      return "The last sign-in time must be a valid UTC date string.";
    case "auth/invalid-page-token":
      return "The provided next page token is invalid. Please enter a valid non-empty string.";
    case "auth/wrong-password":
      return "The provided password is invalid. It must be a string with at least six characters.";
    case "auth/weak-password":
      return "Password should be at least 6 characters";
    case "auth/invalid-password-salt":
      return "The password salt must be a valid byte buffer.";
    case "auth/invalid-phone-number":
      return "The provided phone number is invalid. It must be a non-empty E.164 standard compliant identifier string.";
    case "auth/invalid-photo-url":
      return "The provided photo URL is invalid. It must be a string URL.";
    case "auth/invalid-provider-data":
      return "The provider data must be a valid array of user information objects.";
    case "auth/invalid-provider-id":
      return "The provider ID must be a valid supported provider identifier string.";
    case "auth/invalid-oauth-responsetype":
      return "Only exactly one OAuth response type should be set to true.";
    case "auth/invalid-session-cookie-duration":
      return "The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.";
    case "auth/invalid-uid":
      return "The provided UID must be a non-empty string with at most 128 characters.";
    case "auth/invalid-user-import":
      return "The user record to import is invalid.";
    case "auth/maximum-user-count-exceeded":
      return "The maximum allowed number of users to import has been exceeded.";
    case "auth/missing-android-pkg-name":
      return "An Android Package Name must be provided if the Android App is required to be installed.";
    case "auth/missing-continue-uri":
      return "A valid continue URL must be provided in the request.";
    case "auth/missing-hash-algorithm":
      return "Importing users with password hashes requires providing the hashing algorithm and its parameters.";
    case "auth/missing-ios-bundle-id":
      return "The request is missing a Bundle ID.";
    case "auth/missing-uid":
      return "A UID identifier is required for the current operation.";
    case "auth/missing-oauth-client-secret":
      return "The OAuth configuration client secret is required to enable OIDC code flow.";
    case "auth/operation-not-allowed":
      return "The sign-in provider is disabled for your Firebase project. Enable it in the Firebase console.";
    case "auth/phone-number-already-exists":
      return "This phone number is already associated with an existing account. Please use a different phone number.";
    case "auth/project-not-found":
      return "No Firebase project found for the provided credentials. Set up a Firebase project and generate a credential.";
    case "auth/reserved-claims":
      return "One or more custom user claims provided are reserved. Avoid using certain reserved claims as keys.";
    case "auth/session-cookie-expired":
      return "The provided session cookie is expired. Please log in again.";
    case "auth/session-cookie-revoked":
      return "The session cookie has been revoked. Please log in again.";
    case "auth/too-many-requests":
      return "Too many requests. Please try again later.";
    case "auth/user-not-found":
      return "User not found. Please try to signup!";
    default:
      return "Oops! Something went wrong. Please try again later.";
  }
};
