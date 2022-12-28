# Chrome Meme Generator

The Meme Generator allows you to create Images with captions.

- Actively maintained by developers.
- Feel free to make pull requests or Issues.

## Installation

The steps below will allow you to run this website locally

1. Clone the repo
   1. `git clone https://github.com/GabrielMarisescu/React-ChromeExtension`
   2. `cd React-ChromeExtension`
2. Get your own VirusTotal API key
   1. Go to the Virus total [website](https://imgflip.com/api)
   2. Sign up / Sign in with your account
   3. Copy your username and password.
3. Add the username and password to your local enviroment variable
   1. Create a file called .env in `React-ChromeExtension` directory
   2. Add this line and replace xxx with your username key `VITE_ACCOUNT_USERNAME=xxx` (
      no quotations marks are needed)
   3. Add this line and replace xxx with your password key `VITE_ACCOUNT_PASSWORD=xxx`
4. Install dependencies and run the website locally!
   1. `npm install`
   2. `npm run build`
5. Load the prod folder into google chrome
   1. Open google chrome and type `chrome://extensions/`
   2. Click Developer Mode and click `Load Unpacked`
   3. Select your dist folder
6. If you'd like to develop, you will have to run `npm run watch`

## Preview

<img width="395" alt="Screenshot 2022-12-27 at 18 20 22" src="https://user-images.githubusercontent.com/43650393/209700195-b30d8d60-bf66-4666-a079-97f2a986f301.png">
<img width="394" alt="Screenshot 2022-12-27 at 18 21 54" src="https://user-images.githubusercontent.com/43650393/209700344-09d05a1e-2339-41bb-9c3c-26476a87e92a.png">

## Contributing

Everyone is welcomed to contribute to our existing code base via pull requests,
find an existing issue and help us fix it.

If you wish to work on additional features, we would strongly recommend you to
create an issue with the appropriate tags and assign yourself to the issue or
comment appropriately on the issue that you are working on it.
