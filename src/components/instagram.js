const AUTHENTICATION="https://www.instagram.com/oauth/authorize/?client_id=beeb19becb2541f49f5d6144ed4daf77&redirect_uri=http://mysail.oakland.edu&response_type=token&scope=public_content"
const CALLBACK_URL="https://mysail.oakland.edu";
const acces_token="1425299723.beeb19b.007cf609d0084d6a9c561f763f057f31"
let RECENT_MEDIA="https://api.instagram.com/v1/users/self/media/recent/?access_token=1425299723.beeb19b.007cf609d0084d6a9c561f763f057f31"

const param = {
    client_id: "beeb19becb2541f49f5d6144ed4daf77",
    client_secret: "957789e29190400c8ddc31db28b64ee3",
    grant_type: authorization_code ,
    redirect_uri: "http://mysail.oakland.edu",
    code: CODE
  }