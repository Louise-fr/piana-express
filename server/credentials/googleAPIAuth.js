const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const Base64 = require('js-base64').Base64;
const path = require('path')


//General email parameters
var _from = 'les.orsini@gmail.com';
var _dates = '';

//Email parameters for user
var _user_to = 'l.fresq.g@gmail.com';
var _user_subject = 'Nous avons bien enregistré votre demande';
var _user_message = '';
var _user_email_content = '';
var _user_name = ""
var _user_title = "Madame, Monsieur"

//Email parameterts for admin
var _admin_to = 'l.fresq.g@gmail.com';
var _admin_subject = 'Un visiteur est intéressé pour une location';
var _admin_email_content = '';

const EMAIL_TEMPLATE_DIR = __dirname
const USER_EMAIL_TEMPLATE_PATH = path.resolve(EMAIL_TEMPLATE_DIR, 'email-user.html')
const ADMIN_EMAIL_TEMPLATE_PATH = path.resolve(EMAIL_TEMPLATE_DIR, 'email-admin.html')


// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly','https://www.googleapis.com/auth/gmail.send'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_DIR = __dirname
const TOKEN_PATH = path.resolve(TOKEN_DIR, 'token.json')

const CREDENTIAL_DIR = __dirname
const CREDENTIAL_PATH = path.resolve(CREDENTIAL_DIR, 'credentials.json')



/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * FOR TESTING API CALL
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLabels(auth) {
  const gmail = google.gmail({version: 'v1', auth});
  gmail.users.labels.list({
    userId: 'me',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const labels = res.data.labels;
    if (labels.length) {
      console.log('Labels:');
      labels.forEach((label) => {
        console.log(`- ${label.name}`);
      });
    } else {
      console.log('No labels found.');
    }
  });
}

/**
 * Setter for user email parameters
 * 
 * @param {String} to email address of the receiver
 * @param {String} title receiver title
 * @param {String} name receiver name
 */


function setUserEmailParameters (to, title, name) {
  _user_to = to
  _user_title = title
  _user_name = name
}

/**
 * Setter for admin email parameters
 * 
 * @param {String} message user's message to be sent to admin
 * @param {String} dates user's dates to be sent to admin
 */


function setAdminEmailParameters (message, dates) {
  _user_message = message
  _dates = dates
}

/**
 * Setter for user email content
 * 
 * @param {String} name of the receiver
 * @param {String} title of the receiver
 */



function setUserEmailContent (){
  fs.readFile(USER_EMAIL_TEMPLATE_PATH, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/\_titre\_/gi, _user_title);
    result = result.replace(/\_nom\_/gi, _user_name);
    _user_email_content = result;

  });
}

/**
 * Setter for admin email content
 * 
 * @param {String} name of the receiver
 * @param {String} title of the receiver
 */



function setAdminEmailContent (){
  fs.readFile(ADMIN_EMAIL_TEMPLATE_PATH, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/\_titre\_/gi, _user_title);
    result = result.replace(/\_nom\_/gi, _user_name);
    result = result.replace(/\_adresse\_/gi, _user_to);
    result = result.replace(/\_message\_/gi, _user_message);
    if (_dates != 'none'){result = result.replace(/\_dates\_/gi, _dates);}
    else {result = result.replace(/\_dates\_/gi, "Dates non renseignées");}
    _admin_email_content = result;
  
  });
}


/**
 * Build an email as an RFC 5322 formatted, Base64 encoded string for the visitor/user
 * 
 */

function createUserEmail() {
    let encodedSubject = '=?utf-8?B?'+Base64.encodeURI(_user_subject)+'?=' //Needed to manage utf8 char
    let email = ["Content-Type: text/html; charset=\"UTF-8\"\n",
      "MIME-Version: 1.0\n",
      "Content-Transfer-Encoding: 7bit\n",
      "to: ", _user_to, "\n",
      "from: ", _from, "\n",
      "subject: ", encodedSubject, "\n\n",
      _user_email_content
    ].join('');
    return Base64.encodeURI(email);
  }

/**
 * Build an email as an RFC 5322 formatted, Base64 encoded string for the admin
 * 
 */

function createAdminEmail() {
  let encodedSubject = '=?utf-8?B?'+Base64.encodeURI(_admin_subject)+'?=' //Needed to manage utf8 char
  let email = ["Content-Type: text/html; charset=\"UTF-8\"\n",
    "MIME-Version: 1.0\n",
    "Content-Transfer-Encoding: 7bit\n",
    "to: ", _admin_to, "\n",
    "from: ", _from, "\n",
    "subject: ", encodedSubject, "\n\n",
    _admin_email_content
  ].join('');

  return Base64.encodeURI(email);
}
  
  /**
   * Send an email to the user using website account.
   *
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
  function sendUserMessage(auth) {
    const gmail = google.gmail({version: 'v1', auth});
    let request = gmail.users.messages.send({
      auth: auth,
      userId: 'me',
      'resource': {
        'raw': createUserEmail()
      }
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      console.log('Message sent.')
    });    
  }

  /**
   * Send an email to the admin using website account.
   *
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
  function sendAdminMessage(auth) {
    const gmail = google.gmail({version: 'v1', auth});
    let request = gmail.users.messages.send({
      auth: auth,
      userId: 'me',
      'resource': {
        'raw': createAdminEmail()
      }
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      console.log('Message sent.')
    });    
  }


/**
 * Function to call to send the mail with parameters
 * 
 * @param {String} to email address of the receiver
 * @param {String} message user's message
 * @param {String} dates user's dates
 * @param {String} title user's title
 * @param {String} name user's name
 */
  

module.exports.gapiSendMessages = function(to, message, dates, title, name){
  //Preparing emails for user and admin
  setUserEmailParameters(to, title, name)
  setAdminEmailParameters(message, dates)
  setUserEmailContent()
  setAdminEmailContent()
  // Load client secrets from a local file.
  fs.readFile(CREDENTIAL_PATH, (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Gmail API.
    authorize(JSON.parse(content), sendUserMessage);
    authorize(JSON.parse(content), sendAdminMessage);
  });
}

  

 
