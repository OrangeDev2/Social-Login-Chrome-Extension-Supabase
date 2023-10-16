# SupaLogin Chrome Extension
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/4762b2d1-53b6-4d98-90c3-8d4c42c6b72b)

## Unpacking Your Extension
1. Fork this repository.
2. Go to `chrome://extensions/`.
3. Click "Load Unpacked" and select your repo directory.
4. The extension should show up.
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/389e4866-14da-487f-a096-e765c99c43ca)

## Retrieving Your Google Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com/) and create a project.
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/2ba5a30a-af72-41b8-8d0b-499a635a54dd)

2. Search for "APIs & Services" > "Credentials".
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/6b7eb2a1-4edb-4fdb-8b4f-76cd9caead2d)

3. You must create your Consent Screen before creating Credentials for your Supabase Project.
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/d90d990c-c3cd-4f49-a9ed-ccf6bd3e5075)

4. Under "External", fill in App Information (App Name, Dev Email, Support Email should be sufficient) and select Scopes (3).

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/1bd278bd-6116-4873-a5eb-db3c0839ca6a)

5. Now you can create Credentials.
    
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/ba4202c1-1c3e-40a6-8f24-a05d2ffae0b8)

6. Select "Application Type" > "Web Application" to generate your Client ID and Client Secret.
    
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/7426fb7a-62a0-4706-952d-d6d1e3afdcb2)

7. Select "Application Type" again > "Chrome Extension" to generate your Authorized Client ID. Get the Extension ID at `chrome://extensions/`.
    
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/58464bf3-bbcf-433f-b37d-e0866145f3b0)

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/dfa3393d-7a36-4960-81e6-920cb2624bcd)

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/f8f57529-7afa-4346-b043-7c6151fff253)

## Create a Supabase Project and Set Up Auth Flow
1. Go to [Supabase](https://supabase.com/) and create your project.
2. Hover and click the "Authentication" tab > "Providers" tab. Click on "Google Provider".
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/baf2aaba-f06e-4e73-93d5-7579fd12c379)

3. Fill in Client ID, Client Secret, and Authorized Client ID (Chrome Extension) from your Google Cloud Console.
4. Save!

## Editing Chrome Extension (Manifest.json, supaLogin.js)
1. In `Manifest.json`, fill in the Authorized Client ID from your Supabase Project (where you filled it in) or Google Cloud Console.
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/050c852a-6256-4f61-8be4-ae60613a152d)

2. In `supaLogin.js`, fill in the Supabase URL and Anon Key from your Supabase Settings > API.

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/4ffa4a05-c401-441a-9252-73edcbf4fa6c)

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/b67c5ae6-eaa0-45d9-b96e-62835c61753e)

## Updating the Extension and Testing Supabase Social Login
1. Click the refresh logo to update your extension with the filled information.
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/ca180aaf-076d-415d-9725-c3c6665a47a2)

2. Click the "Login with Supabase" button.
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/ac4bbbf4-698c-46df-8e73-6ca5d4b63632)

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/7e88f111-b352-4302-ba42-8a2caa5cea22)

Help me sort this out 😄

Links: 
- [Supabase](https://supabase.com/)
- [Supabase Chrome Extension Documentation](https://supabase.com/docs/guides/auth/social-login/auth-google?platform=chrome-extensions)
- [Google Cloud Console](https://console.cloud.google.com/)
