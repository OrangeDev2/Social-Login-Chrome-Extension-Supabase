const SUPABASE_URL = ""
const SUPABASE_KEY = "";

const { createClient } = supabase;
supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log(supabase)
getSession()

async function SignIn(){
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
      })

    console.log('data.url', data?.url)
    console.log('error', error)
}

async function SignOut(){
    const { error } = await supabase.auth.signOut()

    if (!error){
        //window.location.reload();
        window.close()
    }
}

async function getSession() {
    const { data, error } = await supabase.auth.getSession();
  
    console.log('data', data);
    console.log('error', error);
  
    if (data?.session) {
      const profileElement = document.getElementById('profile');

      if (profileElement) {
        profileElement.innerHTML = 
        `
          <img src='${data?.session?.user?.user_metadata?.avatar_url}'>
          <p>You are logged in as ${data?.session?.user?.user_metadata?.name}</p>
          <button id="signout-button">Log Out</button>
        `;
      }

    }
  }

document.addEventListener("DOMContentLoaded", (event) => {
    const loginButton = document?.getElementById('login-button');
    const siginButton = document?.getElementById('signin-button');
    const sigoutButton = document?.getElementById('signout-button');

    loginButton?.addEventListener("click", function (e) {
        chrome.windows.create({
            url: './redirect.html',
            width: 300,
            height: 600,
            focused: true,
        });

        window.close(); // Close the extension popup
    });

    siginButton?.addEventListener("click", function (e) {
        SignIn();
    });

    sigoutButton?.addEventListener("click", function (e) {
        console.log('click')
        SignOut();
    });
})