# HAND OVER FIST

Responsive company website with game announcements, player help and a feedback message composer. Static HTML, CSS and JavaScript; no paid dependencies, backend or build step.

## Enable player contact

1. Register a free Gmail inbox you control. Suggested names (availability unconfirmed): `handoverfistgames@gmail.com` or `handoverfistgames.support@gmail.com`.
2. Put the registered email into `supportEmail` in `config.js`.
3. Publish the updated files. The form will offer an email-app link with the prepared subject and message. The visitor must send the email in their own email app.

One inbox can handle support and feedback. No inbox is provisioned by this website and the current email setting is intentionally empty.

## Free GitHub Pages hosting

After these files are committed and pushed to the repository, open GitHub repository Settings → Pages. Select “Deploy from a branch”, choose the branch containing these files and the root folder, then save. Free GitHub Pages hosting requires a public repository on GitHub Free. Use the successful deployment URL shown by GitHub; do not assume it is live before deployment succeeds.

## Google Play Console

For each app, open Store settings → Store listing contact details. Enter your working support email and public website URL. Google requires a contact email to publish or update an app. Verify any requested account contact addresses using Google's verification process.

Organization developer accounts have additional identity and website requirements. Follow the prompts for your account type. This site's privacy notice describes only the website; it is not a privacy policy for a game. A game privacy policy must accurately describe that game's data collection, SDKs, ads and other processing.

Google guidance:
- https://support.google.com/googleplay/android-developer/answer/13634081
- https://support.google.com/googleplay/android-developer/answer/13628312

## Editing

Edit `index.html` for copy and game links, `style.css` for appearance, and `config.js` for the support address. Replace the coming-soon content with verified game details when ready. No form messages are uploaded or stored by this site. Google Fonts supplies the fonts.
