const SUPABASE_KEY = "";
const SUPABASE_URL = ""

const { createClient } = supabase;
supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log(supabase)

document.addEventListener("DOMContentLoaded", (event) => {
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener("click", function (e) {
        console.log('clicked')

        const manifest = chrome.runtime.getManifest()

        const url = new URL('https://accounts.google.com/o/oauth2/auth')

        url.searchParams.set('client_id', manifest.oauth2.client_id)
        url.searchParams.set('response_type', 'id_token')
        url.searchParams.set('access_type', 'offline')
        url.searchParams.set('redirect_uri', `https://${chrome.runtime.id}.chromiumapp.org`)
        url.searchParams.set('scope', manifest.oauth2.scopes.join(' '))

        console.log(url.href)

        chrome.identity.launchWebAuthFlow(
        {
            url: url.href,
            interactive: true,
        },
        async (redirectedTo) => {
            if (chrome.runtime.lastError) {
            // auth was not successful
            } else {
            // auth was successful, extract the ID token from the redirectedTo URL
            const url = new URL(redirectedTo)
            const params = new URLSearchParams(url.hash)

            const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: params.get('id_token'),
            })
            }
        }
        )

    });
});