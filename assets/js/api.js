
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/natatgh/js-developer-portfolio-main/main/data/profile.json?token=GHSAT0AAAAAACFV36TU4NEU574RDHSOZ46OZGZGCGA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
