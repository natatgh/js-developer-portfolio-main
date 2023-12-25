
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/natatgh/js-developer-portfolio-main/main/data/profile.json?token=GHSAT0AAAAAACLUBZBV7F7K5WFMA6X3R36EZMJARBA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
