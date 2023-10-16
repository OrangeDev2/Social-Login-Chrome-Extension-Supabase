# SupaLogin-Chrome-Extension
![logo](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/12556c20-4425-431f-9a10-a2a34f897ee4)

# Unpacking your extension. 
1. Fork this repo
2. Go to chrome://extensions/
3. Click "load Unpacked" and select your repo directory
4. Extension should show up
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/0dbdc962-1d85-465d-84cb-7584a3cf9101)

# Retrieving your Google credientals 
1. Go to https://console.cloud.google.com/ and create a project
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/2b434290-0212-4fb2-97fb-e77f1ac8fc82)

2. Search for APIs & Services > Credientals
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/4326bfdf-35b3-4867-82eb-484dd9ebcdcd)
3. You must create your Consent Screen before creating Credientals for your Supabase Project.
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/4ae594ab-12a6-4255-9b7e-00585c4d1d5b)
4. External > Fill in App Information (App Name, Dev Email, Support Email should sufficient) > Select Scopes (3)

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/a22da943-1a19-4fff-8c11-3f72d6bf01fc)

5. Now you can create Credientals
    
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/e6eeb571-b95e-48bc-add9-c7469ccf3dcf)

6. Select Application Type > Web Application to generate your Client ID and Client Secret
    
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/c5323547-71c4-4bae-bbb1-b998653421bc)

7. Select Application Type again > Chrome Extension to generate your Authorized Client ID.  Get Extension ID at chrome://extensions/
    
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/d6ef8131-2c03-4a52-b516-2c7d09a98de8)

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/736c4c99-022d-4fe0-8318-7074de09d748)

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/553e6a57-d01f-4968-ba93-051b6667df89)

# Create a Supabase Project and set up Auth Flow
1. Go to https://supabase.com/. Create your project
2. Hover and click Authentication tab > Providers tab.  Click on Google Provider
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/c69dbab5-f5d9-4bff-ba7e-0a669464bf03)

3. Fill in Client ID, Client Secret and Authorized Client ID (Chrome Extension) from your Google Cloud Console
4. Save!

# Editing Chrome Extension (Manifest.json, supaLogin.js)
1. Manifest.json: Fill in Authorized Client ID from your Supabase Project (where you filled in) or Google Cloud Console
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/35708bd4-b4d5-487e-afda-9fa45e2ddfe5)

2. supaLogin.js: Fill in Supabase URL and Anon Key from your Supabase Settings > API

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/68703a6c-eecb-4747-b5c3-b7637935480c)
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/041e54a7-134d-43d5-a1e7-665db6130308)

# Updating Extension and Test Supabase Social Login
1. Click the refresh logo to update your extension with the filled information
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/7defcb5f-41de-47bd-89a7-0bb4ae129711)

2. Click "Login with Supabase" Button
   
![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/d2479bb4-9f3a-43cc-8202-10db3df295d6)

![image](https://github.com/OrangeDev2/SupaLogin-Chrome-Extension/assets/47803678/292deddc-78a1-440d-b14f-645a6fa09f4a)

Help me sort this out :D

Links: 

https://supabase.com/

https://supabase.com/docs/guides/auth/social-login/auth-google?platform=chrome-extensions

https://console.cloud.google.com/


